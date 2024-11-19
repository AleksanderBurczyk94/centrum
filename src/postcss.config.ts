module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 1,
    }),
    require('cssnano')({
      preset: 'default',
    }),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './src/**/*.html',
        './src/**/*.ts',
      ],
      safelist: [/^some-important-class$/], // Dodaj klasy, których nie chcesz usuwać
      defaultExtractor: (content: string) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
