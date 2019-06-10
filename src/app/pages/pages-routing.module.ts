import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: ':phone', component: LayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
