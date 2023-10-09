export interface IEventFormReducerState {
	firstName: string;
	email: string;
	surname?: string;
	position?: string;
	company?: string;
}

export enum ActionTypes {
	FIRSTNAME_CHANGE,
	EMAIL_CHANGE,
	SURNAME_CHANGE,
	POSITION_CHANGE,
	COMPANY_CHANGE,
}

export interface IEventFormReducerAction {
	type: ActionTypes;
	payload?: any;
}

export const eventFormInitialState: IEventFormReducerState = {
	firstName: '',
	email: '',
};

export const eventFormReducer = (state: IEventFormReducerState, action: IEventFormReducerAction) => {
	if (action.type === ActionTypes.FIRSTNAME_CHANGE) {
		console.log(action.payload);
		return { ...state, firstName: action.payload };
	}
	if (action.type === ActionTypes.EMAIL_CHANGE) {
		return { ...state, email: action.payload };
	}
	if (action.type === ActionTypes.SURNAME_CHANGE) {
		return { ...state, surname: action.payload };
	}
	if (action.type === ActionTypes.POSITION_CHANGE) {
		return { ...state, position: action.payload };
	}
	if (action.type === ActionTypes.COMPANY_CHANGE) {
		return { ...state, company: action.payload };
	} else return eventFormInitialState;
};
