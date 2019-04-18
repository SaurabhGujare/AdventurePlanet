import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportListComponent } from './transport-list/transport-list.component';
import { TransportSitesComponent } from './transport-list/transport-sites/transport-sites.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PreloaderPageComponent } from './preloader-page/preloader-page.component';
import { AuthenticationService as AuthGuard } from './service/authentication.service';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { AdventureListComponent } from './adventure-list/adventure-list.component';
import { BooknowComponent } from './booknow/booknow.component';
// import { ShowPackagesComponent } from './package-page/show-packages/show-packages.component';
import { PackageEvenComponent } from './package-even/package-even.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {path:'', component: PreloaderPageComponent},
  {path:'home', component: HomePageComponent},
  {path:'transportTypes', component: TransportListComponent, canActivate: [AuthGuard]},
  {path:'transportSites/:transportType', component: TransportSitesComponent, canActivate: [AuthGuard]},
  {path:'accomodation', component: AccomodationComponent, canActivate: [AuthGuard]},
  {path:'signup', component: SignupPageComponent, canActivate: [AuthGuard]},
  {path:'login', component: LoginPageComponent, canActivate: [AuthGuard]},
  {path: 'Scuba', component: AdventureListComponent, canActivate: [AuthGuard]},
  {path: 'RiverRafting', component: AdventureListComponent, canActivate: [AuthGuard]},
  {path: 'Paragliding', component: AdventureListComponent, canActivate: [AuthGuard]},
  {path: 'BungeeJumping', component: AdventureListComponent, canActivate: [AuthGuard]},
  {path: 'booknow', component: BooknowComponent, canActivate: [AuthGuard]},
  {path:'packagelist',component: PackageEvenComponent, canActivate: [AuthGuard]},
  {path:'scpackage',component:ShoppingCartPageComponent, canActivate: [AuthGuard]},
  {path:'blog', component: BlogComponent, canActivate: [AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
