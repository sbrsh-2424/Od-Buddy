import React, { useEffect } from "react";
import { auth } from "../../LoginPage";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import './AuthDetails.css'
import './responsive.css'

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
        listen();
    }
  }, []);

  const userSignOut = () => {
    signOut(auth).then(() => {
        console.log('Sign out successful');
    }).catch(error => console.log(error))
  }
  return (
    <div className="auth">
      {authUser ? <><p>Signed in as {authUser.email}</p><button onClick={userSignOut}>SIGN OUT</button></> : <p>Signed Out</p>}
    </div>
  );
};

export default AuthDetails;
