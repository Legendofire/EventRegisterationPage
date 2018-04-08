export default function reducer(state = {
    user: {
        name: "",
        email: "",
        phone: "",
        startup: "",
        reason: ""
    },
    adding: false,
    added: false,
    error: null
}, action) {
    console.log("state:", state);
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                adding: true,
                added: false,
                error: null
            };
            break;
        case "ADD_USER_FULFILLED":
            return {
                ...state,
                adding: false,
                added: true,
                error: null
            };
            break;
        case "ADD_USER_REJECTED":
            return {
                ...state,
                adding: false,
                added: false,
                error: action.payload
            };
            break;
        case "CHANGE_INPUT": {
            let newState = { ...state };
            newState.user[action.payload.input] = action.payload.value;
            return {
                ...newState,
                adding: false,
                added: false,
                error: null
            };
            break;
        }
        default:
            return {
                ...state,
                adding: false,
                added: false,
                error: false
            };
    }
}
