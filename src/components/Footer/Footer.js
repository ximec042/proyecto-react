import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <p>Contact Us</p>

        <form action="#" method="post">
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
      <div>
        <h3>
          Company<span>logo</span>
        </h3>

        <p className="footer-links">
          <a href="/">Precios</a>.<a href="/public">Acerca de</a>.
          <a href="/">Teléfono</a>
        </p>
      </div>

      <p className="footer-company-name">Company Name © 2015</p>
    </footer>
  );
};

export default Footer;
