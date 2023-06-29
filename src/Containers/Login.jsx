import { Container, Grid } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithPopup } from "@firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const userName = result.user.displayName;
        navigate("/home", {
          state: {
            userName,
          },
        });
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  return (
    <>
      <Container sx={{ mt: 10 }}>
        <Grid
          alignItems="center"
          justifyContent="center"
          container
          sx={{ height: "100vh" }}
        >
          <Grid item>
            <button
              style={{
                backgroundColor: "transparent",
                height: "40px",
                border: "1px solid blue",
                borderRadius: "5px",
                fontSize: "20px",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="loginBtn"
              onClick={loginHandler}
            >
              <GoogleIcon sx={{ mr: 2, color: "red" }} />
              <span>Signin with Google</span>
            </button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
