import React, { useState, useEffect } from "react";
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
import Cookie from "../assets/cookielogo.png";


const Navigationbar = ({history}) => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const token = localStorage.getItem("myJWT"); 
  const [showNavText, setShowNavText] = useState(false);


  
  
  useEffect(() => {
    async function onLoad() {
      if (token && token !== undefined && token !== "") {
        userHasAuthenticated(true);
      } else {
        console.log("No Current User");
      }
      setIsAuthenticating(false);
    }

    onLoad();
  }, [token]);
  

  async function handleLogout() {
    localStorage.removeItem("myJWT");
    sessionStorage.removeItem("myJWT");
    userHasAuthenticated(false);
    history.push("/login");
  }

  return (
    !isAuthenticating && (
      <MDBNavbar expand="lg" style={{ backgroundColor: "lightseagreen" }}>
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
                <MDBNavbarLink href="/gallery" style={{ color: "white" }}>
                  Gallery
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/contactpage" style={{ color: "white" }}>
                  Contact Us
                </MDBNavbarLink>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
              <MDBNavbarLink href="/admin">Admin</MDBNavbarLink>
            </MDBNavbarItem> */}
            </MDBNavbarNav>
            <MDBNavbarNav className="justify-content-end">
              {!isAuthenticated ? (
                <>
                  <MDBNavbarItem>
                    <MDBNavbarLink href="/signup" style={{ color: "white" }}>
                      Signup
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href="/login" style={{ color: "white" }}>
                      Login
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </>
              ) : (
                <>
                  <MDBNavbarItem>
                    <MDBNavbarLink href="/profile" style={{ color: "white" }}>
                      My Profile
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href="/orderpage" style={{ color: "white" }}>
                      Order Now
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink
                      href="/login"
                      onClick={handleLogout}
                      style={{ color: "white" }}
                    >
                      Log out
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    )
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
