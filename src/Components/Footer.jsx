import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-[#18212f] text-base-content p-4">
      <aside>
        <p>
           © {new Date().getFullYear()} - All right reserved by Pinki Biswas
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
