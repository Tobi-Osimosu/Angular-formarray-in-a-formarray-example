import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromApp from './@core/stores/app.reducer';
import { AuthEffects } from './@core/stores/auth/auth.effects';
import { DashboardEffects } from './@core/stores/dashboard/dashboard.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from './@core/styles/material/material.module';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './@auth/components/login/login.component';
import { RegisterComponent } from './@auth/components/register/register.component';
import { DashboardContainerComponent } from './@components/dashboard-container/dashboard-container.component';
import { SidebarComponent } from './@components/sidebar/sidebar.component';
import { NavbarComponent } from './@components/navbar/navbar.component';
import { ConfigurationsComponent } from './@components/configurations/configurations.component';
import { ProductConfigurationComponent } from './@components/configurations/product-configuration/product-configuration.component';
import { ContractConfigurationComponent } from './@components/configurations/contract-configuration/contract-configuration.component';
import { AddProductConfigurationsComponent } from './@components/configurations/product-configuration/add-product-configurations/add-product-configurations.component';
import { AddContractConfigurationComponent } from './@components/configurations/contract-configuration/add-contract-configuration/add-contract-configuration.component';
import { EditContractConfigurationComponent } from './@components/configurations/contract-configuration/edit-contract-configuration/edit-contract-configuration.component';
import { ViewContractConfigurationComponent } from './@components/configurations/contract-configuration/view-contract-configuration/view-contract-configuration.component';
import { NotificationComponent } from './@components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardContainerComponent,
    SidebarComponent,
    NavbarComponent,
    ConfigurationsComponent,
    ProductConfigurationComponent,
    ContractConfigurationComponent,
    AddProductConfigurationsComponent,
    AddContractConfigurationComponent,
    EditContractConfigurationComponent,
    ViewContractConfigurationComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects, DashboardEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
  ],
  providers: [],
  entryComponents: [AddProductConfigurationsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
