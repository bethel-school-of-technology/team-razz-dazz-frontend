import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./Navigationbar.css";
import { useHistory } from "react-router-dom";
import Cookie from "../assets/cookielogo.png";

const Navigationbar = () => {
  const [showNavText, setShowNavText] = useState(false);
  const history = useHistory();

  const LogOut = () => {
    localStorage.removeItem("myJWT");
    sessionStorage.removeItem("myJWT");
    history.push("/login");
  };

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <img src={Cookie} alt="cookie" id="cookie" href="/" />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/gallery">
                Gallery
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/orderpage">Order Now</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/login">Login</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/signup">Signup</MDBNavbarLink>
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBNavbarLink href="/admin">Admin</MDBNavbarLink>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink href="/login" onClick={LogOut}>
                Log out
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}


// const Navigationbar = () => {
//   return (
//     <Navbar collapseOnSelect expand="lg" variant="dark" id="navbar">
//       <Container>
//         <Navbar.Brand href="/">
//           <img src={Cookie} alt="cookie" id="cookie" href="/" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown> */}
//           </Nav>
//           <Nav>
//             <Nav.Link href="/gallery" id="linktext">
//               Gallery
//             </Nav.Link>
//             <Nav.Link href="/orderpage" id="linktext">
//               Order Now
//             </Nav.Link>
//             <Nav.Link href="/login" id="linktext">
//               Login
//             </Nav.Link>
//             <Nav.Link eventKey={2} href="/signup" id="linktext">
//               Sign up
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

export default Navigationbar;
