import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { BlogViewComponent } from './Components/blog-view/blog-view.component';
import { HeaderComponent } from './Components/header/header.component';
import { ChangeCaseDirective } from './directives/change-case.directive';
import { DirectiveHostComponent } from './Components/directive-host/directive-host.component';
import { UnlessDirective } from './directives/unless.directive';
import { ParentComponent } from './Components/parent/parent.component';
import { AppenderPipe } from './pipes/appender.pipe';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UserComponent } from './Components/user/user.component';
import { PlaceHolderComponent } from './Components/place-holder/place-holder.component';

const appRouting:Routes = [
  { path:'home', component:HomeComponent },
  { path:'about', component:AboutComponent, 
  // canActivate: [ AuthGuard]
  },
  { path:'blogview', component:BlogViewComponent ,
    // canActivateChild:[AuthGuard],
     children:[
    {path:':id',component:UserDetailsComponent},
     {path:'',component:PlaceHolderComponent}
  ]},
  { path:'directive', component:DirectiveHostComponent},
  { path:'parent', component:ParentComponent},
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'**',redirectTo:'/home',pathMatch:'full'},
  
]


@NgModule({
  providers: [ AuthGuard ],
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRouting) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, BlogViewComponent, HeaderComponent, ChangeCaseDirective, DirectiveHostComponent, UnlessDirective, ParentComponent, AppenderPipe, UserListComponent, UserDetailsComponent, UserComponent, PlaceHolderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
