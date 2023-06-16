import React, { useContext } from 'react'
import "./contact.css"
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import {useRef, useState} from "react"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../Context'


const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_4n8fy0b', 'template_7tzz5pn', formRef.current, '5eiOKmD3Rtab5f-Lq')
        .then((result) => {
            setDone(true)
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
            <h1 className="c-title">Let's discuss your project!</h1>
            <div className="c-info">
                <div className="c-info-item">
                    <img src={Phone} alt="" className="c-icon" /> +63 917-876-1087
                </div>
                <div className="c-info-item">
                    <img src={Email} alt="" className="c-icon" /> joshua_litam@yahoo.com
                </div>
                <div className="c-info-item">
                    <img src={Address} alt="" className="c-icon" /> Susana Heights Muntinlupa City
                </div>
            </div>
        </div>
        <div className="c-right">
            <p className="c-desc"><b>What's your story?</b> Get in touch!</p>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name="user_name" />
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name="user_subject" />
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name="user_email" />
                <textarea style={{backgroundColor: darkMode && "#333"}} name="Message" placeholder='message' id="" rows="5"></textarea>
                <button>Submit</button>
                {done && "Thank you!"}
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
