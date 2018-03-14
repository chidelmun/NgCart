import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {ItemComponent} from './item/item.component';
import {ItemsService} from './data.service';
import {BackgroundImage} from './pagebg.directive';
import {CartComponent} from './cart/cart.component';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './details/detail.component';
import {EditItemComponent} from './edit/edit.component';
import {PageNotFoundComponent} from './404/page-not-found.component';
import {AddItemComponent} from './catalog/addItem.component';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';
import {LoginComponent} from './login/login.component';
import {LoadingComponent} from './loading/loading.component';
import {UnlockGuard} from  './unlock.service';
import {UnlockComponent} from './unlock/unlock.component';

export const appRoutes : Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'locked', component: UnlockComponent, canActivate: [UnlockGuard]},
  {path: '', component : HomeComponent, canActivate: [AuthGuard]},
  {path: 'checkout', component: CartComponent,canActivate: [AuthGuard]},
  {path: 'item/:id', component: DetailComponent, canActivate: [AuthGuard]},
  {path: 'item/:id/edit', component: EditItemComponent, canActivate: [AuthGuard]},
  {path: 'items/add', component : AddItemComponent, canActivate: [AuthGuard]},
  {path : '404', component: PageNotFoundComponent},
  {path : "**", redirectTo: '404'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ItemComponent,
    BackgroundImage,
    CartComponent,
    HomeComponent,
    DetailComponent,
    EditItemComponent,
    PageNotFoundComponent,
    AddItemComponent,
    LoginComponent,
    LoadingComponent,
    UnlockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ItemsService,AuthGuard,AuthService, UnlockGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
