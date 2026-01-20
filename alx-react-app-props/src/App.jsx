import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // Make sure this path is correct

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // You must use .Provider and pass the 'value' prop
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;