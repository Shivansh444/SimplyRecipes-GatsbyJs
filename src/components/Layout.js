import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/css/main.css'
import 'normalize.css'

// creating  a layout like this will make it useful for all the pages
const Layout = ({children}) => {
    // the props of the layout contains the children elements
    // of the component it is called in, is used in
    // if we use nav and footer in layout the middle data has to be displayed too
  return <>
      <Navbar/>
      {children}
    {/* the children contains the child tags containing info of the components */}
      <Footer/>
  </>;
};

export default Layout;
