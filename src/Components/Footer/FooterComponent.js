import React, { useState } from "react";
import "./styles.css";

const HeaderComponent = (password, email) => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div>
      <div className="footerLayout">
        <p className="font">Create an account</p>
        <button
          className="button"
          onClick={() => {
            setSignIn(true);
            console.log(password, email);
          }}
        >
          LOGIN
        </button>
      </div>
      {signIn && <p>signIn succesfull</p>}
    </div>
  );
};

export default HeaderComponent;
