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
import { TitleComponent } from './components/title/title.component';
import { GalleryItemComponent } from './components/gallery/gallery-item/gallery-item.component';
import { TestimonialItemComponent } from './components/testimonial/testimonial-item/testimonial-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    AboutComponent,
    TestimonialComponent,
    ServicescardsComponent,
    MapComponent,
    TitleComponent,
    GalleryItemComponent,
    TestimonialItemComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
