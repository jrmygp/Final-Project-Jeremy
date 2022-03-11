const initial_state = {
    id: 0,
    username: "",
    email: "",
    full_name: "",
}

const userReducer = ( state = initial_state, action) => {
    if (action.type === "USER_LOGIN") {
        return {
            ...state,

        }
    }
}