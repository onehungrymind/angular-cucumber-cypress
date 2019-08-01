import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@demo/ui-login';
import { ProjectsComponent } from './projects/projects.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path: 'projects', component: ProjectsComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'projects', pathMatch: 'full'},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
