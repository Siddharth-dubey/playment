import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { RouterModule } from '@angular/router';


import { store } from './services/build-redux-store.service';





@NgModule({
	imports: [
		CommonModule,
		NgReduxModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		HttpModule,
	],
	exports: [
		NgReduxModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
	],
	declarations: []
})
export class CoreModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: []
		};
	}

	constructor( @Optional() @SkipSelf() parentModule: CoreModule, ngRedux: NgRedux<any>) {
		if (parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only');
		}
		ngRedux.provideStore(store);
	}
}
