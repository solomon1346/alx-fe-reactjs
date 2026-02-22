import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams(); // Grab dynamic segment from URL

  return <h2>User Profile for User ID: {id}</h2>;
}

export default UserProfile;