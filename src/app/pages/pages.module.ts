import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../module/material/material.module';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [LayoutComponent, GalleryComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PagesRoutingModule,
    MaterialModule,
  ]
})
export class PagesModule { }
