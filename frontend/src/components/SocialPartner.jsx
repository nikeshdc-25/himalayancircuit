import "./socialPartner.css";
import {
  FaFacebook,
  FaLinkedin,
  FaSkype,
  FaYoutube,
  FaInstagram,
  FaVimeo,
} from "react-icons/fa";
import accessibleNepal from "../assets/socialIcons/accessiblenepal.png";
import globalCompact from "../assets/socialIcons/global-compact-logo.png";
import hcde from "../assets/socialIcons/hcde.png";
import himalayan from "../assets/socialIcons/himalayan.png";
import nepalGovt from "../assets/socialIcons/nepal-government.png";
import trekkingAssociation from "../assets/socialIcons/trekking-agencies-association-of-nepal.jpg";
import trustPilot from "../assets/socialIcons/trust-pilot.jpg";

function SocialPartner() {
  return (
    <section className="social-partner">
      <div className="container">
        <div className="row">
          {/* Partner Associations Section */}
          <div className="col-md-4">
            <h3>Partner Associations</h3>
            <hr />
            <div className="partner-list d-flex flex-wrap">
              <a href="https://www.accessiblenepal.com" className="partner-link" target="_blank">
                <img
                  src={accessibleNepal}
                  alt="Accessible Nepal"
                  className="partner-icon"
                />
              </a>
              <a href="https://himalayancircuit.de" className="partner-link" target="_blank">
                <img
                  src={hcde}
                  alt="Himalayan Circuit Denmark"
                  className="partner-icon"
                />
              </a>
              <a href="https://himalayancircuit.team" className="partner-link" target="_blank">
                <img src={himalayan} alt="Himalayan" className="partner-icon" />
              </a>
            </div>
          </div>

          {/* Affiliations Section */}
          <div className="col-md-4">
            <h3>Affiliations</h3>
            <hr />
            <div className="affiliation-list d-flex flex-wrap">
              <a href="https://www.trustpilot.com/review/himalayancircuit.com" className="affiliation-link" target="_blank">
                <img
                  src={trustPilot}
                  alt="Trust Pilot"
                  className="affiliation-icon"
                />
              </a>
              <a href="https://nepal.gov.np" className="affiliation-link" target="_blank">
                <img
                  src={nepalGovt}
                  alt="Nepal Government"
                  className="affiliation-icon"
                />
              </a>
              <a href="https://unglobalcompact.org/what-is-gc/participants/151097-Himalayan-Circuit-Team-Pvt-Ltd" className="affiliation-link" target="_blank">
                <img
                  src={globalCompact}
                  alt="Global Compact"
                  className="affiliation-icon"
                />
              </a>
              <a href="https://www.taan.org.np/members/1258" className="partner-link" target="_blank">
                <img
                  src={trekkingAssociation}
                  alt="Trekking Association"
                  className="partner-icon"
                />
              </a>
            </div>
          </div>

          {/* Socials Section */}
          <div className="col-md-4">
            <h3>Get Socials</h3>
            <hr />
            <div className="social-icons d-flex justify-content-around">
              <a
                href="https://www.facebook.com/himalayancircuit/"
                target="_blank"
              >
                <FaFacebook className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/himalayancircuit/"
                target="_blank"
              >
                <FaLinkedin className="social-icon" />
              </a>
              <a
                href="https://join.skype.com/invite/mhAYAIwiibBH"
                target="_blank"
              >
                <FaSkype className="social-icon" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC7vrLYsDQ4qXSKhCfM4McDg"
                target="_blank"
              >
                <FaYoutube className="social-icon" />
              </a>
              <a
                href="https://www.instagram.com/himalayancircuit/"
                target="_blank"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://vimeo.com/himalayancircuit" target="_blank">
                <FaVimeo className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialPartner;
