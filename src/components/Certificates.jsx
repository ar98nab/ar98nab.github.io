import React from 'react';
import './css/certificate.css';
import masai_certificate from "../Images/Arnab Dutta (2).jpeg"
import college_certificate from"../Images/college certificate.jpeg"
import twelveth_certificate from"../Images/12th certificate.jpeg"
import tenth_certificate from"../Images/10th certificate.jpeg"
import drama_certificate from"../Images/Drama certificate.jpeg"
import drawing_certificate from"../Images/Drawing certificate.jpeg"


const academicCertificates = [
  { name: 'Full-Stack Web Development (Masai School)', image: masai_certificate },
  { name: 'B.Tech in Electronics and Telecommunication', image: college_certificate},
  { name: 'High Secondary Examination', image:twelveth_certificate },
  { name: 'Secondary Examination', image: tenth_certificate }
];

const extracurricularCertificates = [
  { name: 'Drama Training and perfomance', image: drama_certificate },
  { name: 'Senior Diploma for Drawing', image: drawing_certificate },
  
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


