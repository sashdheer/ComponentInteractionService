import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { ListPersonsComponent } from './list-persons/list-persons.component';


const routes: Routes = [
  {path: '', component: AddPersonComponent},
  {path: 'AddAPerson', component: AddPersonComponent},
  {path: 'ListOfPersons', component: ListPersonsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
