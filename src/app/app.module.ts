import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ServicescardsComponent } from './components/servicescards/servicescards.component';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    AboutComponent,
    TestimonialComponent,
    ServicescardsComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
