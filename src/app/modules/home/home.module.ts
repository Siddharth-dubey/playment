
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
	imports: [
		HomeRoutingModule,
	],
	declarations: [
		HomeComponent,
		SidebarComponent,
		HeaderComponent,
	],
	providers: []

})

export class HomeModule {

}