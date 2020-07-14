import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer() {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright: Kayla Ann Kuhlman
        <br />
        View the repo for my porfolio <a href="https://github.com/kaykuhl/portfolio">here</a>!
      </MDBContainer>
    </div>
  </MDBFooter>
  );
}

export default Footer;
