import {NAME_CHANGE} from "../actions/types";

const initialState = {
    name: 'parth'
};

export default function (state=initialState, action) {
    switch (action.type) {
        case NAME_CHANGE:
            return {
                ...state,
                name: action.payload
            };
        default:
            return state
    }
}
