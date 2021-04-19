import React from 'react';
import Contact from '../components/Contact';
function ContactPage() {
  return (
    <div className="row">
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
     <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <Contact/>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
   </div>
    );
}

export default ContactPage;