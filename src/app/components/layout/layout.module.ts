import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [NavbarComponent, FooterComponent],
  providers: [],
})
export class LayoutModule { }
