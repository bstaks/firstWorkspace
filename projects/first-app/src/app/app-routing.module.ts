import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './Customer/customer.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './Customer/main/main.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
