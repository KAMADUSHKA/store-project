import { AUTH } from "../componant/const";

export const handleLogin = ( values, setSubmitting, navigate) =>async (dispatch) => {
    
    try{
        // const {data} = await Api. handleLogin(values);
        const {data} = await  handleLogin(values);

        dispatch({type:AUTH, data });
        setSubmitting(false);
        console.log("User Data:", values);
        navigate("/Cards");
    } catch{
        setSubmitting(false)
    }
};