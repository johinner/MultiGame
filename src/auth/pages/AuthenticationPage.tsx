import { CssBaseline, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Login, Register } from "./components";
import { useState } from "react";


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


export const AuthenticationPage = () => {
    const [authentication, setAuthentication] = useState(true)
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        
        {authentication ? <Login setAuthentication={setAuthentication}/>  : <Register setAuthentication={setAuthentication}/>}
          
        
      </Grid>
    </ThemeProvider>
  );
};
