import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecruitmentsListComponent} from "./main/enterprise/recruitments/recruitments-list/recruitments-list.component";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
  },
  {
    path: "user",
    loadChildren: () => import('./main/user/user.module').then(module => module.UserModule)
  },
  {
    path: "enterprise",
    loadChildren: () => import('./main/enterprise/enterprise.module').then(module => module.EnterpriseModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./main/admin/admin.module').then(module => module.AdminModule)
  },
  {
    path: "register",
    loadChildren: () => import('./register/register.module').then(module => module.RegisterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
