import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';


// Pages
import { HomePage } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', data: {title: 'Empty'} },
  { path: 'home', component: HomePage, data: { title: 'Home'}, canActivate: [ OktaAuthGuard ]},
  // { path: 'dashboard', component: Dashboard, data: { title: 'Dashboard'}, canActivate: [ OktaAuthGuard ]},
  { path: 'implicit/callback', component: OktaCallbackComponent, data: {title: 'Callback'}},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: false}), // <-- Use Hash for InfoBurst
  ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
