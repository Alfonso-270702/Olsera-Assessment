import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { NavLink } from "./NavLink";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <Box minH="24rem">
        <Navbar>
          <Navbar.Links>
            <NavLink to="/admin" as={Link}>
              Admin
            </NavLink>
            <NavLink as={Link} to="/">
              Dashboard
            </NavLink>
            <NavLink as={Link} to="/liked-posts">
              Like Page
            </NavLink>
            {user ? (
              <NavLink onClick={() => handleLogout()}>Logout</NavLink>
            ) : (
              <NavLink to="/login" as={Link}>
                Login
              </NavLink>
            )}
          </Navbar.Links>
        </Navbar>
        {children}
      </Box>
    </>
  );
}
