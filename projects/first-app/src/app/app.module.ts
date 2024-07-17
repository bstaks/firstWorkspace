import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MdSidenavModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedLibModule } from 'projects/shared-lib/src/public-api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './Customer/customer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './Customer/main/main.component';
import { MaterialModule } from './Customer/material.module';
import { ComponentModule } from './component.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    MatSidenavModule,
    AppRoutingModule,
    SharedLibModule,
    FormsModule,
    CommonModule,
    CustomerComponent,
    NavigationComponent,
    AboutComponent,
    ProductComponent,
    MainComponent,
    MaterialModule,
    ComponentModule,
  ],
})
export class AppModule {}
