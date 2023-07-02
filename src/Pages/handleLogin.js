
import * as api from "../componant/SignIn"
import { AUTH } from "../componant/const";

export const handleLogin = ( values, setSubmitting, navigate) =>async (dispatch) => {
    
    try{
        // const {data} = await handleLogin(values);
        const {data} = await  api.handleLogin(values);

        dispatch({type:AUTH, data });
        setSubmitting(false);
        console.log("User Data:", values);
        navigate("/Cards");

    } catch{
        setSubmitting(false)
    }
};