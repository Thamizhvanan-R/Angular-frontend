import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes : Routes=[

    {path:'',redirectTo:'/form',pathMatch:'full'},
    {path:"form",component:FormComponent},
    {path:"detail",component:UserDetailComponent},
    {path:"loginform",component:LoginFormComponent}
  ];

@NgModule({
  exports:[ RouterModule ],
  imports:[RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }