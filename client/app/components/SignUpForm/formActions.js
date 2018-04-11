import axios from "axios";

export function ADD_USER(form, allValid) {
    if (allValid) {
        let user = {};
        Object.keys(form).forEach(key => {
            user[key] = form[key].value;
        });
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
    } else {
        return {
            type: "REMIND_USER"
        };
    }
}

export function CHANGE_INPUT(input, value) {
    return {
        type: "CHANGE_INPUT",
        payload: {
            name: input,
            data: {
                value: value,
                valid: validate(input, value)
            }
        }
    };
}

function validate(input, value) {
    switch (input) {
        case "email":
            return isValidEmail(value) && !isEmpty(value);
            break;
        case "name":
            return !isEmpty(value);
            break;
        case "phone":
            return isValidPhone(value) && !isEmpty(value);
            break;
        case "reason":
            return !isEmpty(value);
            break;
        default:
            return true;
    }
}

function isEmpty(input) {
    return !input || input === "";
}

function isValidEmail(input) {
    return input.match(/[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]+/) !== null;
}

function isValidPhone(input) {
    return input.match(/[0-9]{11}/) !== null;
}
