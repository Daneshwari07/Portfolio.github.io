import React from 'react';

const VisaTechInvestments = () => {
  const investments = [
    {
      title: 'Blockchain & Digital Assets',
      description: 'Visa is integrating blockchain technology to manage tokenized assets like stablecoins, bridging traditional finance and digital assets through the Visa Tokenized Asset Platform (VTAP). This enables efficient, secure transactions and positions Visa at the forefront of decentralized finance.'
    },
    {
      title: 'AI & Machine Learning for Fraud Prevention',
      description: 'Leveraging AI and machine learning, Visa enhances fraud detection with real-time transaction analysis, ensuring better security and faster identification of suspicious activity.'
    },
    {
      title: 'Open APIs & Cloud Infrastructure',
      description: 'Visa invests in cloud technology and open APIs, making its payment network more accessible for fintechs and developers. This facilitates scalable, innovative payment solutions and enables seamless integration across platforms.'
    }
  ];

  return (
    <div id="VisaTechInvestments" className="visa-investments-section">
      <div className="section-header">
        <h2>Business Cases</h2>
        <div className="underline" />
      </div>
      <div className="investment-cards">
        {investments.map((investment, index) => (
          <div key={index} className="investment-card">
            <h3>{investment.title}</h3>
            <p>{investment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaTechInvestments;
