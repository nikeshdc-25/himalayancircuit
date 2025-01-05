import "./footer.css";

function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          {/* Contact Us Section */}
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <hr />
            <p>Office: GPO 9294, Nayabazaar Marg</p>
            <p>Kathmandu, Nepal</p>
            <p>connect@himalayancircuit.com</p>
            <p>info@himalayancircuit.de</p>
          </div>

          {/* Map Section */}
          <div className="col-md-4 mt-4">
            <div className="map-container">
              <iframe
                title="Himalayan Circuit Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.184784911271!2d85.29785311079911!3d27.723578170998305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199b35a1aef1%3A0xda750d2b7909d468!2sHimalayan%20Circuit!5e0!3m2!1sen!2snp!4v1735989470747!5m2!1sen!2snp"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="useful-links-container">
              <h3 className="text-center">Useful Links</h3>
              <hr />
              <div className="row">
                <div className="col-4 offset-1">
                  <ul className="footer-links text-center">
                    <li>
                      <a href="#">Payment Information</a>
                    </li>
                    <li>
                      <a href="#">Newsletter</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Form</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </div>
                <div className="col-4 offset-2">
                  <ul className="footer-links text-center">
                    <li>
                      <a href="#">Disclaimer</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Report</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="text-center" style={{fontSize: 18, color: "white"}}>
              © Copyright {currentYear} Himalayan Circuit. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
