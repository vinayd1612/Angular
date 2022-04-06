import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';
import { InsertComponent } from './insert/insert.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:"register", component:RegisterComponent},
  {path:"display", component:DisplayComponent},
  {path:"menu",component:MenuComponent},
  {path:"insert",component:InsertComponent},
  {path:"delete",component:DeleteComponent},
  {path:"search",component:SearchComponent},
  {path:"login",component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
