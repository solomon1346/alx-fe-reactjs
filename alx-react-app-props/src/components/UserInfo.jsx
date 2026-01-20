import { useContext } from 'react';
import UserContext from '../UserContext'; // Adjust path if UserContext is in src

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;