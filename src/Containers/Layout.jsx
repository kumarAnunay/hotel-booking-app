import NavBar from "../Components/NavBar";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Layout = (props) => {
  console.log(props);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
      console.log(user);
    });
  }, []);
  return (
    <>
      <NavBar />
      {/* {Dynamic Component} */}
      {props.children}
    </>
  );
};

export default Layout;
