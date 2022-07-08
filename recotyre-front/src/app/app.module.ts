import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { RoutesComponent } from './pages/routes/routes.component';
import { SidebarComponent } from './base/sidebar/sidebar.component';
import { RecolectComponent } from './pages/recolect/recolect.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TireListComponent } from './apis/get/tire-list/tire-list.component';
import { VehicleListComponent } from './apis/get/vehicle-list/vehicle-list.component';
import { AddTireComponent } from './apis/post/add-tire/add-tire.component';
import { HttpClientModule } from '@angular/common/http';
import { EditTireComponent } from './apis/patch/edit-tire/edit-tire.component';
import { AddCarrierComponent } from './apis/post/add-carrier/add-carrier.component';
import { AddCollectionPointComponent } from './apis/post/add-collection-point/add-collection-point.component';
import { AddCollectorComponent } from './apis/post/add-collector/add-collector.component';
import { AddFinalManagerComponent } from './apis/post/add-final-manager/add-final-manager.component';
import { AddManagerPointComponent } from './apis/post/add-manager-point/add-manager-point.component';
import { AddVehicleComponent } from './apis/post/add-vehicle/add-vehicle.component';
import { ManagerPointListComponent } from './apis/get/manager-point-list/manager-point-list.component';
import { FinalManagerListComponent } from './apis/get/final-manager-list/final-manager-list.component';
import { CollectorListComponent } from './apis/get/collector-list/collector-list.component';
import { CollectionPointListComponent } from './apis/get/collection-point-list/collection-point-list.component';
import { CarrierListComponent } from './apis/get/carrier-list/carrier-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RoutesComponent,
    SidebarComponent,
    RecolectComponent,
    AddTireComponent,
    EditTireComponent,
    AddCarrierComponent,
    AddCollectionPointComponent,
    AddCollectorComponent,
    AddFinalManagerComponent,
    AddManagerPointComponent,
    AddVehicleComponent,
    TireListComponent,
    VehicleListComponent,
    PageNotFoundComponent,
    ManagerPointListComponent,
    FinalManagerListComponent,
    CollectorListComponent,
    CollectionPointListComponent,
    CarrierListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
