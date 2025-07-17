import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className='contact'>
      <div className='contact-inner'>
        <ul className='contact-list'>
          <p className='contact-list-text'>elenatropanets@gmail.com</p>
          <div className='socials'>
            <a href='https://www.linkedin.com/in/elena-tropanets-b7765315a/' target='_blank' rel="noopener noreferrer" className='contact-list-item'>LinkedIn</a>
            <a href='https://github.com/elenatrr' target="_blank" rel="noopener noreferrer" className='contact-list-item'>GitHub</a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className='contact-list-item'>
              CV
            </a>
          </div>
        </ul>
      </div>
    </div>
  )
}