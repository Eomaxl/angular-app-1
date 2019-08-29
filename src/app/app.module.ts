import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { BlogViewComponent } from './Components/blog-view/blog-view.component';
import { HeaderComponent } from './Components/header/header.component';
import { ChangeCaseDirective } from './directives/change-case.directive';
import { DirectiveHostComponent } from './Components/directive-host/directive-host.component';
import { UnlessDirective } from './directives/unless.directive';

const appRouting:Routes = [
  { path:'home', component:HomeComponent },
  { path:'about', component:AboutComponent},
  { path:'blogview', component:BlogViewComponent},
  { path:'directive', component:DirectiveHostComponent},
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'**',redirectTo:'/home',pathMatch:'full'}
]


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRouting) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, BlogViewComponent, HeaderComponent, ChangeCaseDirective, DirectiveHostComponent, UnlessDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
