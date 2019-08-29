import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { BlogViewComponent } from './Components/blog-view/blog-view.component';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, BlogViewComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
