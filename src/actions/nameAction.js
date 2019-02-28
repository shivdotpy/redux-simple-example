import {NAME_CHANGE} from "./types";

export const changeName = (name) => dispatch => {

    console.log('calling this function')

        dispatch({
            type: NAME_CHANGE,
            payload: name
        })
};
