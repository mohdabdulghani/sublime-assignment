import React, { useState } from "react";
import EmailComponent from "../EmailComponent/EmailComponent";
import PasswordComponent from "../EmailComponent/PasswordComponent";
import HeaderComponent from "../Header/HeaderComponent";
import FooterComponent from "../Footer/FooterComponent";
import "./styles.css";

const Layout = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const updateEmail = (returnedEmail) => {
    return setEmail(returnedEmail);
  };

  const updatePassword = (returnedPassword) => {
    return setPassword(returnedPassword);
  };

  return (
    <div className="componentLayout">
      <HeaderComponent />
      <EmailComponent onChange={updateEmail} />
      <PasswordComponent onChange={updatePassword} />
      <FooterComponent {...password} {...email} />
    </div>
  );
};

export default Layout;
