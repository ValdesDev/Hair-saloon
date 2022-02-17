import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { MapComponent } from './components/map/map.component';
import { TitleComponent } from './components/title/title.component';
import { GalleryItemComponent } from './components/gallery/gallery-item/gallery-item.component';
import { TestimonialItemComponent } from './components/testimonial/testimonial-item/testimonial-item.component';
import { AboutItemComponent } from './components/about/about-item/about-item.component';
import { ServiceItemComponent } from './components/service-list/service-item/service-item.component';
import { ServiceListComponent } from './components/service-list/service-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    AboutComponent,
    TestimonialComponent,
    ServiceListComponent,
    MapComponent,
    TitleComponent,
    GalleryItemComponent,
    TestimonialItemComponent,
    AboutItemComponent,
    ServiceItemComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
