import React from 'react';
import './css/certificate.css';

const academicCertificates = [
  { name: 'Full-Stack Web Development (Masai School)', image: '' },
  { name: 'B.Tech in Electronics and Telecommunication', image: 'src/Images/college certificate.jpeg' },
  { name: 'High Secondary Examination', image: 'src/Images/12th certificate.jpeg' },
  { name: 'Secondary Examination', image: 'src/Images/10th certificate.jpeg' }
];

const extracurricularCertificates = [
  { name: 'Drama Training and perfomance', image: 'src/Images/Drama certificate.jpeg' },
  { name: 'Senior Diploma for Drawing', image: 'src/Images/Drawing certificate.jpeg' },
  
];

export const Certificates = () => {
  return (
    <section id="certificates">
      <h2>Certificates</h2>
      <div className="certificates-container">
        <div className="certificates-section">
          <h3>Academic</h3>
          {academicCertificates.map((certificate, index) => (
            <div key={index} className="certificate-item">
              <div className="certificate-image">
                <img src={certificate.image} alt={certificate.name} />
              </div>
              <div className="certificate-info">
                <p>{certificate.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="certificates-section">
          <h3>Extracurricular Activities</h3>
          {extracurricularCertificates.map((certificate, index) => (
            <div key={index} className="certificate-item">
              <div className="certificate-image">
                <img src={certificate.image} alt={certificate.name} />
              </div>
              <div className="certificate-info">
                <p>{certificate.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


