import { useUserAuth } from "./_utils/auth-context";
import { getItems, addItem } from './shopping-list-service';
import { useEffect } from 'react';
const AuthComponent = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // handling github sign in
  const handleGitHubSignIn = async () => {
    try {
      await gitHubSignIn();
      
    } catch (error) {
      
      console.error("There is a GitHub sign-in error:", error);
    }
  };

  // a function to handle log out
  const handleLogOut = async () => {
    try {
      await firebaseSignOut();
      
    } catch (error) {
      
      console.error("There is a Logout error:", error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button onClick={handleGitHubSignIn}>Sign in with GitHub</button>
        </div>
      )}
    </div>
  );
};

export default AuthComponent;
