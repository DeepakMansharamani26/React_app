import React from 'react'
import styled from 'styled-components';
//import "./Contact.css";
function Contact() {

  
    const Wrapper = styled.section`
        padding: 5rem 0 5rem 0;
        .common-heading{
          font-size: 2.8rem;
          font-weight: 400;
          margin-bottom: 6rem;
         text-transform: capitalize;
         text-align :center
        }
    .conter {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            background-color: rgb(98 84 243);
            box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);

            &:hover {
              background-color: #fff;
              border: 1px solid rgb(98 84 243);
              color: rgb(98 84 243);
              transform: scale(0.9);
            }
          }
        }
      }
      
    }
    `;
    return <Wrapper className='section'>
      <h2 className='common-heading'>Feel Free to Contact me...</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.749818354626!2d74.61226981435543!3d26.463792185643456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be765752cb0d3%3A0x284dfdea2433cb5d!2sFoy%20Sagar%20Rd%2C%20Jyoti%20Nagar%2C%20Ajmer%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1679663649032!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />

      <div className='container conter'>
        <div className='row'>
          <div className='col-lg-12'>
        <div className="contact-form">
        <form
            action="https://formspree.io/f/xnqybkqy"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <button type="submit" className="btn btn-info ">send</button>
          </form>
        </div>
        </div>
        </div>
      </div>
    </Wrapper>;
  
};

export default Contact;
