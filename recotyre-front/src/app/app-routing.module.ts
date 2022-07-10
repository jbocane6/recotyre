import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RecolectComponent } from './pages/recolect/recolect.component';
import { RoutesComponent } from './pages/routes/routes.component';
import { AddCarrierComponent } from './apis/post/add-carrier/add-carrier.component';
import { AddCollectionPointComponent } from './apis/post/add-collection-point/add-collection-point.component';
import { AddCollectorComponent } from './apis/post/add-collector/add-collector.component';
import { AddFinalManagerComponent } from './apis/post/add-final-manager/add-final-manager.component';
import { AddManagerPointComponent } from './apis/post/add-manager-point/add-manager-point.component';
import { AddTireComponent } from './apis/post/add-tire/add-tire.component';
import { AddVehicleComponent } from './apis/post/add-vehicle/add-vehicle.component';
import { CarrierListComponent } from './apis/get/carrier-list/carrier-list.component';
import { CollectionPointListComponent } from './apis/get/collection-point-list/collection-point-list.component';
import { CollectorListComponent } from './apis/get/collector-list/collector-list.component';
import { FinalManagerListComponent } from './apis/get/final-manager-list/final-manager-list.component';
import { ManagerPointListComponent } from './apis/get/manager-point-list/manager-point-list.component';
import { TireListComponent } from './apis/get/tire-list/tire-list.component';
import { VehicleListComponent } from './apis/get/vehicle-list/vehicle-list.component';
import { EditCarrierComponent } from './apis/patch/edit-carrier/edit-carrier.component';
import { EditCollectionPointComponent } from './apis/patch/edit-collection-point/edit-collection-point.component';
import { EditCollectorComponent } from './apis/patch/edit-collector/edit-collector.component';
import { EditFinalManagerComponent } from './apis/patch/edit-final-manager/edit-final-manager.component';
import { EditManagerPointComponent } from './apis/patch/edit-manager-point/edit-manager-point.component';
import { EditTireComponent } from './apis/patch/edit-tire/edit-tire.component';
import { EditVehicleComponent } from './apis/patch/edit-vehicle/edit-vehicle.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'routes', component: RoutesComponent },
  { path: 'recolect', component: RecolectComponent },
  { path: 'addCarrier', component: AddCarrierComponent },
  { path: 'addCollectionPoint', component: AddCollectionPointComponent },
  { path: 'addCollector', component: AddCollectorComponent },
  { path: 'addFinalManager', component: AddFinalManagerComponent },
  { path: 'addManagerPoint', component: AddManagerPointComponent },
  { path: 'addTire', component: AddTireComponent },
  { path: 'addVehicle', component: AddVehicleComponent },
  { path: 'carrierList', component: CarrierListComponent },
  { path: 'collectionPointList', component: CollectionPointListComponent },
  { path: 'collectorList', component: CollectorListComponent },
  { path: 'finalManagerList', component: FinalManagerListComponent },
  { path: 'managerPointList', component: ManagerPointListComponent },
  { path: 'tireList', component: TireListComponent },
  { path: 'vehicleList', component: VehicleListComponent },
  { path: 'editCarrier/:id', component: EditCarrierComponent },
  { path: 'editCollectionPoint/:id', component: EditCollectionPointComponent },
  { path: 'editCollector/:id', component: EditCollectorComponent },
  { path: 'editFinalManager/:id', component: EditFinalManagerComponent },
  { path: 'editManagerPoint/:id', component: EditManagerPointComponent },
  { path: 'editTire/:id', component: EditTireComponent },
  { path: 'editVehicle/:id', component: EditVehicleComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
