import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';


 
const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'kotturupreethi@gmail.com',
      link: 'mailto:kotturupreethi@gmail.com'
    },
    {
      id: 2,
      icon: <FaPhone />,
      label: 'Phone',
      value: '+1 (480) 455-7633',
      link: 'tel:+14804557633'
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Tempe, AZ',
      link: null
    }
  ];

  return (
    <section className="contact section" id="contact">
      <div className="contact-section">
        <div className="contact-info">
          <h2>Let's Work Together</h2>
          <p>
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="contact-details">
            {contactInfo.map((item) => (
              <div key={item.id} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-text">
                  <strong>{item.label}</strong>
                  {item.link ? (
                    <a href={item.link}>{item.value}</a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-animation">
          <FaPaperPlane className="floating-icon" />
        </div>
      </div>
    </section>
  );
};

export default Contact;