import { actionType } from './constants'

const initialState = {
    users: [
        {
            email: 'sarankumar@gmail.com',
            password: 'Saran@63538',
        },
        {
            email: 'admin@gmail.com',
            password: 'Admin@63538',
        }
    ],
    addUniver: [
        {
            id: 0,
            countrycode: 'IN',
            countryname: 'India',
            domains: 'testing.org',
            univername: 'Testing',
            statename: "testing",
            webpage: 'http://www.testing.org/',
        }
    ]
}

//login reducer
export const loginReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case actionType.LOGIN_SUCCESS:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}

//add & edit reducer 
export const formReducer = (state = initialState.addUniver, action) => {
    switch (action.type) {
        case actionType.ADD_FORM_UNIVERSITY:
            return [
                ...state,
                action.payload,
            ];
        case actionType.EDIT_FORM_UNIVERSITY:
            const updateState = state.map(state => state.id === action.payload.id ? action.payload : state)
            return updateState;
        default:
            return state;
    }
}


