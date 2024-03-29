import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavebarComponent } from './navebar/navebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavebarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavebarComponent,
    SidebarComponent
  ]
})
export class TemplateModule { }
