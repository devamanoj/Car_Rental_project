import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import { AuthProvider } from '../../pages/authContext';

const Layout = () => {
  return (
    
    <Fragment>
      
      <Header />
      <div>
      <AuthProvider>
        <Routers />
      </AuthProvider>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
