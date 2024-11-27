import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { contactFormUnsavedChangesGuard } from '../../guards/contact-form-unsaved-changes.guard';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    canDeactivate: [contactFormUnsavedChangesGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
