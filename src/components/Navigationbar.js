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
import axios from "axios";


const Navigationbar = ({ history }) => {

  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const token = localStorage.getItem("myJWT");
  const [showNavText, setShowNavText] = useState(false);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user/admin", {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        console.log(result);
        setAdmin(result.data.allUsers);
      });
  }, [token]);


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
            style={{ color: "white" }}
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
                <MDBNavbarLink
                  href="/gallery"
                  id="navlink"
                  
                >
                  GALLERY
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="/contactpage"
                  id="navlink"
                  
                >
                  CONTACT US
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
                    <MDBNavbarLink
                      href="/signup"
                      id="navlink"
                      
                    >
                      SIGNUP
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink
                      href="/login"
                      id="navlink"
                      
                    >
                      LOGIN
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </>
              ) : (
                <>
                  <MDBNavbarItem>
                    <MDBNavbarLink
                      href="/profile"
                      id="navlink"
                      
                    >
                      MY PROFILE
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  {!admin ? (
                    <>
                      <MDBNavbarItem>
                        <MDBNavbarLink
                          href="/orderpage"
                          id="navlink"
                          
                        >
                          ORDER NOW
                        </MDBNavbarLink>
                      </MDBNavbarItem>
                    </>
                  ) : (
                    <>
                      <MDBNavbarItem>
                        <MDBNavbarLink
                          href="/adminview"
                          id="navlink"
                          
                        >
                          ADMIN
                        </MDBNavbarLink>
                      </MDBNavbarItem>
                    </>
                  )}
                  <MDBNavbarItem>
                    <MDBNavbarLink
                      href="/login"
                      onClick={handleLogout}
                      id="navlink"
                      
                    >
                      LOG OUT
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

export default Navigationbar;
