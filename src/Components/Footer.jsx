import React from "react";
import ScrollToTop from "./ScrollToTop";

const Footer = () => {
  return (
    <footer className="footer text-gray-400 sm:footer-horizontal footer-center bg-[#18212f] py-8 p-4">
      <aside>
        <p>
           © {new Date().getFullYear()} - All right reserved by Pinki Biswas
        </p>
      </aside>
      <ScrollToTop></ScrollToTop>
    </footer>
  );
};

export default Footer;
