// import { useEffect, useState } from "react";
// import axios from "axios";
// import React from "react";
// import {
//   MDBCard,
//   MDBCardHeader,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardFooter,
//   MDBRow,
//   MDBCol,
// } from "mdb-react-ui-kit";
// import "./UserProfile.css";

// const AdminView = () => {
//   const [admin, setAdmin] = useState([]);

//   const token = localStorage.getItem("myJWT");

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/user/admin", {
//         headers: {
//           Authorization: token,
//         },
//       })
//       .then((result) => {
//         setAdmin(result.data.currentUser);
//       });
//   }, [token]);



//   return (
//     <div className="App container py-3" id="profilecontainer">
//       <MDBCard alignment="center">
//         <MDBCardHeader id="userheader">
//           {admin.firstName} {admin.lastName}{admin.lastName}
//         </MDBCardHeader>
//         <MDBRow>
//           <MDBCol>
//             <MDBCardBody>
//               <MDBCardTitle>Email</MDBCardTitle>
//               <MDBCardTitle>Username</MDBCardTitle>
//             </MDBCardBody>
//           </MDBCol>
//           <MDBCol>
//             <MDBCardBody>
//               <MDBCardText>{admin.email}</MDBCardText>
//               <MDBCardText>{admin.username}</MDBCardText>
//             </MDBCardBody>
//           </MDBCol>
//         </MDBRow>
//         <MDBCardFooter>Orders</MDBCardFooter>
//       </MDBCard>
//     </div>
//   );
// };

// export default AdminView;
