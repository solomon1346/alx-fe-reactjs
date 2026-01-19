import { useContext } from 'react'; // Import the hook
import UserContext from './UserContext'; // Import the context

function UserDetails() {
  // Use the hook to access the data directly from UserContext
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;