import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SessionPageComponent } from './session-page/session-page.component';

const routes: Routes = [
  {path: 'simple', component: LandingPageComponent},
  {path: 'session', component: SessionPageComponent},
  {path: '**', redirectTo: 'simple'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
