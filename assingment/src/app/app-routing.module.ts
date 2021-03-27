import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentDetailsComponent } from './components/document-details/document-details.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService as AuthGuard } from './service/authGaurd.service';
const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'document_list', component: DocumentListComponent, canActivate: [AuthGuard]},
  {path: 'document_details/:id/:name', component: DocumentDetailsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
