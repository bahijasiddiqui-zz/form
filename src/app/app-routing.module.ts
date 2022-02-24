import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { DownloadPageComponent } from './download-page/download-page.component';
import { LoginComponent } from './login/login.component';
import { UploadPageComponent } from './upload-page/upload-page.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {
    path:'upload-page', component:UploadPageComponent,
  },
  {path:'download-page', component:DownloadPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
