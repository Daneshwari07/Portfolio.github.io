import React from "react"; // Link your CSS file

const DomainCard = () => {
  return (
    <section id="domain" className="domain-section">
      <h3 className="contact-title">Chosen Domain</h3>

      <div className="domain-card">
        <img
          src="/images/visa-logo.png" // replace this with your image path
          alt="Visa Logo"
          className="domain-logo"
        />
        <div className="domain-text">
          <h4 className="domain-title">Visa</h4>
          <p>
            Visa Inc. is a world leader in digital payments, facilitating transactions between consumers, merchants, financial institutions, and governments across more than 200 countries. With a commitment to innovation and security, Visa develops cutting-edge technologies that power seamless and secure financial experiences, from contactless payments to mobile wallets and e-commerce. Its mission is to connect the world through the most innovative, reliable, and secure payment network, enabling individuals, businesses, and economies to thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DomainCard;
