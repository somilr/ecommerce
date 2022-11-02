import * as ActionTypes from "../ActionType"

export const signinuser = (values) => (dispech) => {
    dispech({type:ActionTypes.SIGNIN_USER, payload: values});
}

export const signupuser = (values) => (dispech) => {
    dispech({type:ActionTypes.SIGNUP_USER, payload: values});
}

export const forgotpassword = (values) => (dispech) => {
    dispech({type:ActionTypes.FORGOT_PASSWORD, payload: values});
}
export const googlelogin = () => (dispech) => {
    dispech({type:ActionTypes.GOOGLE_LOGIN})
}

export const logoutuser = () => (dispech) => {
    dispech({type:ActionTypes.LOGOUT_USER})
}

export const logginuser = (values) => (dispech) => {
    console.log("logginuser", values);
    dispech({type:ActionTypes.LOGGIN_USER, payload: values});
}

export const loggedoutuser = () => (dispech) => {
    dispech({type:ActionTypes.LOGGEDOUT_USER})
}

export const emailverification = (user) => (dispech) => {
    dispech({type:ActionTypes.EMAIL_VERIFICATION, payload:user})
}