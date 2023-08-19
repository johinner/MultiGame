import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Copyright } from ".";
import { Dispatch, SetStateAction } from "react";

//? Validación de formulario simple con React Hook Form.
import { useForm, SubmitHandler } from "react-hook-form";
import { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../../store/auth";

interface Auth {
  setAuthentication: Dispatch<SetStateAction<boolean>>;
}
interface IFormInput {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = ({ setAuthentication }: Auth) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const dispatch = useDispatch<AppDispatch>();

    //event: React.FormEvent<HTMLFormElement>
  const onSubmit: SubmitHandler<IFormInput> = async(data) => {
    //const {userName, email, password } = data;
    await dispatch(startCreatingUserWithEmailPassword(data));
  };

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      item
      xs={12}
      sm={8}
      md={5}
      component={Paper}
      elevation={6}
      square
    >
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrarse
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Nombre de Usuario"
            autoComplete="name"
            autoFocus
            {...register("userName", {
              required: {
                value: true,
                message: "Nombre de usuario es requerido",
              },
              maxLength: {
                value: 15,
                message: "Nombre de usuario debe tener minimo 15 caracteres",
              },
            })}
            error={!!errors.userName}
            helperText={errors.userName ? errors.userName.message : ""}
          />
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Dirección de correo electrónico"
            autoComplete="email"
            {...register("email", {
              required: {
                value: true,
                message: "Ingrese un correo",
              },
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Ingrese un correo valido",
              },
            })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", {
              required: {
                value: true,
                message: "Ingrese una contraseña",
              },
              minLength: {
                value: 6,
                message: "La contraseña debe tener minino 6 caracteres"
              }
            })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Confirmar contraseña"
            type="password"
            id="ConfirmPassword"
            autoComplete="current-password"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirme su contraseña",
              },
              validate: value => value === watch('password') || 'Las contraseña no coinciden'
            })}
            error={!!errors.confirmPassword}
            helperText={
              errors.confirmPassword ? errors.confirmPassword.message : ""
            }
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Acuérdate de mí"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Crear cuenta
          </Button>
          <Grid container>
            <Grid item>
              <Link
                href="#"
                variant="body2"
                onClick={() => {
                  setAuthentication(true);
                }}
              >
                {"¿Ya tienes cuenta? ingresar"}
              </Link>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Grid>
  );
};
