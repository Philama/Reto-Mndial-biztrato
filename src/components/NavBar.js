import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/AuthAction";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header>
      <div>
        <Button
          variant="outline"
          type="submit"
          fontSize="20px"
          marginLeft="20px"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </header>
  );
};
export default Navbar;
