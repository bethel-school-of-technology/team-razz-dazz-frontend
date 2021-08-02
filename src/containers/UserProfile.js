import { useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  useEffect(() => {
    const token = localStorage.getItem("myJWT");

    const options = {
      headers: {
        Authorization: `Bearer ${token}`
      },
    };

    axios
      .get("http://localhost:3000/api/user/profile", options)
      .then((result) => {
        console.log(result.data);
      });
  }, []);

  return (
    <div className="App container py-3">
      <h1 align="center">Insert Profile/Orders Info</h1>
      {/* <ul>
        { profile.map(profile => 
          <li key={profile._id}>{profile.firstName}</li>
        )}
      </ul> */}
    </div>
  );
};

export default UserProfile;
