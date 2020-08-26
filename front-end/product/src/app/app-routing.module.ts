import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadComponent } from './components/read/read.component';
import { WriteComponent } from './components/write/write.component';
import {AboutComponent} from './components/about/about.component';
import {DeleteComponent} from './components/delete/delete.component';
import { from } from 'rxjs';


const routes: Routes = [
{path:'',component:WriteComponent},
{path:'read',component:ReadComponent},
{path:'write',component:WriteComponent},
{path:'about',component:AboutComponent},
{path:'delete',component:DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
