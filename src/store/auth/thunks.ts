
import { createAsyncThunk } from "@reduxjs/toolkit"
import { checkingCredentials, login, logout } from "."
import { registerUserWithEmailPassword } from "../../firebase/provider";

interface UserRegistrationInfo {
    email: string;
    password: string;
    userName: string;
}

//* Comprobación de autenticación
export const chekingAuthentication = createAsyncThunk(
    "authentication/checkingAuthentication",
    async (_, { dispatch }) => {
        dispatch(checkingCredentials());
    }
/*  En este código, estamos utilizando createAsyncThunk de Redux Toolkit
    para definir una acción asíncrona llamada chekingAuthentication. 
    La función asíncrona recibe dos argumentos: el primer argumento es la cadena que representa el tipo de acción, 
    y el segundo argumento es un objeto con el cual podemos interactuar con Redux, incluyendo la función dispatch.
 */
);

//* Comenzar a crear un usuario con contraseña de correo electrónico.
export const startCreatingUserWithEmailPassword = createAsyncThunk(
    "user/startCreatingUserWithEmailPassword",
    async(userInfo: UserRegistrationInfo, {dispatch}) => {
        dispatch(checkingCredentials());

        const {email, password, userName} = userInfo;
        
        const resp = await registerUserWithEmailPassword({email, password, userName});

        if(!resp.ok) return dispatch(logout( {errorMessage: resp.errorMessage}));

        dispatch(login({...resp}));
    }
)