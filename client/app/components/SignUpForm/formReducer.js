export default function reducer(state = {
    form: {
        name: {
            value: "",
            valid: "",
            error: "Please enter a valid Name."
        },
        email: {
            value: "",
            valid: "",
            error: "Please enter a valid Email."
        },
        phone: {
            value: "",
            valid: "",
            error: "Please enter a valid Phone."
        },
        startup: {
            value: "",
            valid: true
        },
        reason: {
            value: "",
            valid: "",
            error: "Please enter a Reason."
        }
    },
    adding: false,
    added: false,
    allValid: false
}, action) {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                adding: true,
                added: false
            };
            break;
        case "ADD_USER_FULFILLED":
            return {
                ...state,
                adding: false,
                added: true
            };
            break;
        case "ADD_USER_REJECTED":
            return {
                ...state,
                adding: false,
                added: false
            };
            break;
        case "CHANGE_INPUT": {
            let newState = { ...state };
            newState.form[action.payload.name].value = action.payload.data.value;
            newState.form[action.payload.name].valid = action.payload.data.valid;
            newState.allValid = checkAllValid();
            return {
                ...newState
            };
            break;
        }
        case "REMIND_USER": {
            let newState = { ...state };
            Object.keys(newState.form).forEach(key => {
                if (newState.form[key].valid === "") {
                    newState.form[key].valid = false;
                }
            });
            return {
                ...newState
            };
            break;
        }
        default:
            return {
                ...state
            };
    }

    function checkAllValid() {
        let flag = true;
        Object.keys(state.form).forEach(element => {
            console.log(`${element} is ${state.form[element].valid}`);
            if (state.form[element].valid === "") {
                flag = flag && state.form[element].valid;
            }
        });
        return flag;
    }
}
