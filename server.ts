import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express, { Request, Response, NextFunction } from 'express';
import compression from 'compression'; // Dodanie kompresji
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import AppServerModule from './src/main.server';

// Funkcja tworząca aplikację Express
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  // Włącz kompresję Gzip/Brotli
  server.use(compression());

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Przykład API REST (opcjonalny)
  // server.get('/api/**', (req, res) => { });

  // Serwowanie plików statycznych z katalogu przeglądarki
  server.use(express.static(browserDistFolder, {
    maxAge: '1y', // Cache na 1 rok
    index: false, // Wyłącz domyślne renderowanie index.html
  }));

  // Obsługa routingu dla aplikacji Angular
  server.get('**', (req: Request, res: Response, next: NextFunction) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap: AppServerModule,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => {
        console.error('Error rendering Angular application:', err);
        res.status(500).send('Internal Server Error');
      });
  });

  // Middleware obsługujący błędy
  server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Server Error:', err.message);
    res.status(500).send('Internal Server Error');
  });

  return server;
}

// Funkcja uruchamiająca serwer
function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start Node.js server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Uruchamianie serwera, jeśli jest to główny moduł
if (require.main === module) {
  run();
}
