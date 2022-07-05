import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';
import { MainComponent } from './main/main.component';
import { RoutesComponent } from './routes/routes.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RecolectComponent } from './recolect/recolect.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RoutesComponent,
    SidebarComponent,
    RecolectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path: 'main', component: MainComponent},
      {path: 'routes', component: RoutesComponent},
      {path: 'recolect', component: RecolectComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
