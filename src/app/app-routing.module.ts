import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './@auth/components/login/login.component';
import { RegisterComponent } from './@auth/components/register/register.component';
import { AddContractConfigurationComponent } from './@components/configurations/contract-configuration/add-contract-configuration/add-contract-configuration.component';
import { ContractConfigurationComponent } from './@components/configurations/contract-configuration/contract-configuration.component';
import { EditContractConfigurationComponent } from './@components/configurations/contract-configuration/edit-contract-configuration/edit-contract-configuration.component';
import { ViewContractConfigurationComponent } from './@components/configurations/contract-configuration/view-contract-configuration/view-contract-configuration.component';
import { ProductConfigurationComponent } from './@components/configurations/product-configuration/product-configuration.component';
import { DashboardContainerComponent } from './@components/dashboard-container/dashboard-container.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/product-configuration',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'dashboard',
    component: DashboardContainerComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      // {
      //   path: '',
      //   component: DashboardComponent,
      //   data: { accessLevel: [0, 1, 2, 3, 4] },
      // },
      {
        path: 'product-configuration',
        component: ProductConfigurationComponent,
      },
      {
        path: 'contract-configuration',
        component: ContractConfigurationComponent,
      },
      {
        path: 'add-contract-configuration',
        component: AddContractConfigurationComponent,
      },
      {
        path: 'edit-contract-configuration',
        component: EditContractConfigurationComponent,
      },
      {
        path: 'view-contract-configuration',
        component: ViewContractConfigurationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
