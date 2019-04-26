import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProaddComponent } from './components/proadd/proadd.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path :'proadd',component:ProaddComponent},
  {path:'product-list',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
