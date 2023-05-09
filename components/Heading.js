import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

export const Heading = () => {
  return (
    <>
      <Navbar color="dark" dark>
        <Container>
          <Nav>
               <NavbarBrand href="/">My Heart</NavbarBrand>
            <NavItem>
                <Link to="/add" className="btn btn-primary ml-auto" style={{"marginLeft": "237px"}}>
                Add User
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
