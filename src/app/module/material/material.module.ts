import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatPaginatorModule, MatDividerModule } from '@angular/material';
import { SlideshowModule } from 'ng-simple-slideshow';
import { HttpClientModule } from '@angular/common/http';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    SlideshowModule,
    MatCardModule,
    MatPaginatorModule,
    MatDividerModule,
    NgbCarouselModule,
    HttpClientModule,
  ],
})
export class MaterialModule { }
