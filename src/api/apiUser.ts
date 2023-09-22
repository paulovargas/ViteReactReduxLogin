import axios from "axios";

const api = import.meta.env.REACT_APP_API;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const userLogin = (login: any) /* => async (dispatch: any)  */=> {
    return() => {
        
        axios.post(`${api}/account/loginuser/${login}`)
        .then((response) => {
            const data = response.data.dados;
            console.log("Buscou login : ", data);
            console.log("Buscou login : ", login);
            //dispatch((''));
        //alert("Ta aqui"); */
    /*    dispatch({
            payload: login,
        }); */
    })
    .catch((error) => {
        console.log("Buscou login : ", );
        console.log(error);
    });
    }
    
}