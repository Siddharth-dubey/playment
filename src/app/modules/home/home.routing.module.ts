
import { DashboardComponent } from './../dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [{
	path: '',
	component: HomeComponent,
	children: [
		{ path: '', redirectTo: '/home', pathMatch: 'full' },
		{ path: 'home', component: DashboardComponent },
	]
}];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class HomeRoutingModule {

}