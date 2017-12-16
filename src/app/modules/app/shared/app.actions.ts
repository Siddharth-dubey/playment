
import { AppConstants } from './app.constants';

import { Router } from '@angular/router';
import { Injectable, ViewContainerRef } from '@angular/core';
import { IAction, ToastRecordClass, IActionCreator } from '../../../shared/models';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { fromJS } from "immutable";


@Injectable()
export class AppActions {
	toastTimeout;
	vcr: ViewContainerRef;
	constructor(public toastr: ToastsManager, private router: Router, ) {
	}
	setToastrViewContainerRef(vcr) {
		this.toastr.setRootViewContainerRef(vcr);
	}

	// Actions
	setDirectory: IActionCreator = (payload) => {
		return {
			type: AppConstants.SET_DIRECTORY,
			payload
		}
	}

	setCurrDirectory(dir) {
		return (dispatch) => {
			dispatch(<any>this.setDirectory(dir));
		};
	}

	showDangerToast(message, duration?) {
		return (dispatch) => {
			this.toastr.error(message, null, {
				toastLife: duration ? duration : 4000,
			});
		};
	}

	showSuccessToast(message, duration?: number) {
		return (dispatch) => {
			this.toastr.success(message, null, {
				toastLife: duration ? duration : 4000,
			});
		};
	}

	showWarningToast(message, duration?) {
		return (dispatch) => {
			this.toastr.warning(message, null, {
				toastLife: duration ? duration : 4000,
			});
		};
	}

	parseAndShowError(error?, duration = 5000, message?: string, errorProp = 'errorDescription') {
		return (dispatch) => {
			let msg = message || 'Some error occured!';
			if (error) {
				try {
					let err = error.json();
					err[errorProp] && (msg = err[errorProp]);
				} catch (e) {
					let err = error[errorProp];
					err && (msg = err);
				}
			}
			dispatch(<any>this.showDangerToast(msg, duration));
		};
	}


}

