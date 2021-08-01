import { useEffect, useState } from "react";
import axios from 'axios';

const UserProfile = () => {
  const [profile, setProfile] = useState([]);

  const token = localStorage.getItem("myJWT");
  console.log('PROFILE local storage', token)

  useEffect(() => {
    axios.get('http://localhost:3000/api/user/profile').then(result => {
      console.log(result.data);
      console.log(result);
      setProfile(result.data);
    })
  }, [token]);

  console.log(profile)


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
