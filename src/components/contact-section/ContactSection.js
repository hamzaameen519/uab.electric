import React from "react";
import "./ContactSection.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

function ContactSection({ isHomePage }) {
  return (
    <section
      className={isHomePage ? "contact-section" : "contact-section-standalone"}
    >
      <div className="contact-section-container">
        <h1 className="contact-title">Contact</h1>
        <div className="contact-info-container">
          <div className="contact-text-cont">
            <p>
              Hi, I'm Usman Ameen from UAB Electrical Services. We are based in
              Multan and are delighted to offer our services across over all
              Pakistan. Please feel free to get in touch with any concerns that
              you have regarding electrical work. We'd love to be able to help,
              no matter the size or complexity of the job.
            </p>
          </div>
          <div className="contact-details-cont">
            <div className="contact-details">
              <p>Usman Ameen</p>
              <div className="phone cont">
                <i className="fas fa-phone-alt"></i>
                <a href="tel:03138864885">03138864885</a>
              </div>
              <div className="email cont">
                <i className="far fa-envelope"></i>
                <a href="mailto:uab.electric@gmail.com">
                  uab.electric@gmail.com
                </a>
              </div>
              <div className="social-media-links-container">
                <Link
                  className="social-link"
                  to={"//web.facebook.com/people/Usman-Ameen/100090462721516/"}
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebookSquare />
                </Link>
                <Link
                  className="social-link"
                  to={"//www.instagram.com/uab.electric/"}
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
            <img className="contact-logo" src="/images/logo.jpg" alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
