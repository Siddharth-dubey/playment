import { AppConstants } from './app.constants';
import { IReducer } from './../../../shared/models/IReducer';
import { IAction } from './../../../shared/models/IAction';
import { fromJS, Map, List } from "immutable";

const initialState = fromJS({
	app: {
		currentDirectory: '/',
		nodes: {
			name: '/',
			children: [
				{ name: 'Folder 1', children: [] },
				{ name: 'Folder 2', children: [] },
				{
					name: 'Folder 3', children: [
						{ name: 'Folder 3.1', children: [] },
						{ name: 'Folder 3.2', children: [] },
						{ name: 'Folder 3.3', children: [] },
					]
				},
			]
		},
	}
});
export const AppReducer: IReducer<Map<string, any>> = (state: Map<string, any> = initialState, action: IAction) => {
	switch (action.type) {
		case AppConstants.SET_DIRECTORY:
			return state.setIn(['app', 'currentDirectory'], action.payload);
		default:
			return state;
	}
}