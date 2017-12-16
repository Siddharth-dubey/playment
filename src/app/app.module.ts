import { DirectoryComponent } from './modules/dashboard/shared/directory/directory.component';
import { CustomOption } from './shared/toastr.config';
import { AppActions } from './modules/app/shared/app.actions';
import { CoreModule } from './modules/core/core.module';
import { HomeModule } from './modules/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './modules/app/app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CoreModule.forRoot(),
    ToastModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DirectoryComponent
  ],
  providers: [
    { provide: ToastOptions, useClass: CustomOption },
    AppActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
