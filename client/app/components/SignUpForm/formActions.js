import axios from "axios";

export default function ADD_USER(user) {
    return function (dispatch) {
        dispatch({ type: "ADD_USER" });
        axios.post('/', {
            formData: user
        }).then((response) => {
            dispatch({ type: "ADD_USER_FULFILLED", payload: response });
        }).catch((response) => {
            dispatch({ type: "ADD_USER_REJECTED", payload: response });
        });
    };
}

export function CHANGE_INPUT(input, value) {
    return {
        type: "CHANGE_INPUT",
        payload: {
            input: input,
            value: value
        }
    };
}
