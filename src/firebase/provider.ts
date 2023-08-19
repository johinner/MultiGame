import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { FirebaseAuth } from "./config";

interface RegistrationResponse {
    ok: boolean
    uid: string
    photoURL: string | null
    email: string
    userName: string
    errorMessage: string | null
}

interface RegistrationInfo {
    email: string;
    password: string;
    userName: string;
}


//* Registrar usuario con contraseña y correo electrónico en Firebase
export const registerUserWithEmailPassword = async({email, password, userName}: RegistrationInfo): Promise<RegistrationResponse> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );
        const {uid, photoURL} = userCredential.user;
        //? Agregar el userName
        await updateProfile(userCredential.user, { displayName: userName });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            userName,
            errorMessage: null
        }

    } catch (error: any) {
         return {
            ok: false,
            uid: '',
            photoURL: '',
            email: '',
            userName: '',
            errorMessage: error.message
        }
    }
}

