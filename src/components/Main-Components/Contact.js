import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [fullName, setFullName] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [phoneNumber, setPhoneNumber] = useState(' ');
    const [subject, setSubject] = useState(' '); // Define subject state variable and its setter
    const [message, setMessage] = useState(' ');
    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1300 });
    }, []);

    const validateFullName = (value) => {
        if (!value.trim()) {
            setFullNameError('Please enter your Name');
            return false;
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
            setFullNameError('Full name should only contain letters and spaces');
            return false;
        } else {
            setFullNameError('');
            return true;
        }
    };

    const validateEmail = (value) => {
        if (!value.trim()) {
            setEmailError('Please enter your Email');
            return false;
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            setEmailError('Please enter a valid Email address');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    };

    const validatePhoneNumber = (value) => {
        if (!value.trim()) {
            setPhoneNumberError('Please enter your Phone number');
            return false;
        } else if (!/^\d+$/.test(value)) {
            setPhoneNumberError('Phone number should only contain digits');
            return false;
        } else {
            setPhoneNumberError('');
            return true;
        }
    };

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
        validateFullName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
        validatePhoneNumber(e.target.value);
    };

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleCloseSuccessMessage = () => {
        setShowSuccessMessage(false);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const isFullNameValid = validateFullName(fullName);
        const isEmailValid = validateEmail(email);
        const isPhoneNumberValid = validatePhoneNumber(phoneNumber);
    
        if (isFullNameValid && isEmailValid && isPhoneNumberValid) {
            const formData = {
                fullName: fullName,
                email: email,
                phoneNumber: phoneNumber,
                subject: subject,
                message: message
            };
            console.log('Form submitted successfully');
            setShowSuccessMessage(true);
            emailjs.send('service_h8kvvfc', 'template_0hee9s9', formData, 'jM4inLvDHxFhjePBy')
                .then(() => {
                    setFullName('');
                    setEmail('');
                    setPhoneNumber('');
                    setSubject(''); // Clear the subject
                    setMessage('');
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                });
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <section className="contact-area page-section scroll-content" id="contact">
            <div className="custom-container">
                <div className="contact-content content-width">
                    <div className="section-header">
                        <div className="subtitle scroll-animation" data-aos="fade-up">
                            <i className="las la-dollar-sign"></i> contact
                        </div>
                        <div className="h1 scroll-animation" data-aos="fade-up">
                            Let's Build Something <span>Amazing Together!</span>
                        </div>
                    </div>
                    <h3 className="scroll-animation" data-aos="fade-up">
                        <a href="mailto:jassirohit02@gmail.com" title='Mail to Jashpal Rohit'>jassirohit02@gmail.com</a>
                    </h3>
                    <p id="required-msg">* Marked fields are required to fill.</p>

                    <form className="contact-form scroll-animation" data-aos="fade-up" method="POST" onSubmit={handleSubmit}>
                        <div className="alert alert-success messenger-box-contact__msg" style={{ display: showSuccessMessage ? 'block' : 'none' }}  role="alert">
                            Your message was sent successfully.
                            <button type="button" className="close" onClick={handleCloseSuccessMessage} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="full-name">
                                        full Name <sup>*</sup>
                                    </label>
                                    <input
                                        type="text"
                                        name="full-name"
                                        id="full-name"
                                        placeholder="Your Full Name"
                                        value={fullName}
                                        onChange={handleFullNameChange}
                                    />
                                    {fullNameError && <span className="error">{fullNameError}</span>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="email">
                                        Email <sup>*</sup>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Your email address"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                    {emailError && <span className="error">{emailError}</span>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="phone-number">phone <sup>*</sup></label>
                                    <input
                                        type="text"
                                        name="phone-number"
                                        id="phone-number"
                                        placeholder="Your phone number"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                    />
                                    {phoneNumberError && <span className="error">{phoneNumberError}</span>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="subject">subject </label>
                                    <select name="subject" id="subject" value={subject} onChange={handleSubjectChange}>
                                        <option value="">
                                            Select a subject
                                        </option>
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Project Portfolio">Explore more Project Portfolio</option>
                                        <option value="Project Support">Project Support</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group">
                                    <label htmlFor="message">message</label>
                                    <textarea name="message" id="message" placeholder="Write your message here ..." value={message} onChange={handleMessageChange}></textarea>
                                </div>
                            </div>
                           
                            <div className="col-md-12">
                                <div className="input-group submit-btn-wrap">
                                    <button className="theme-btn" name="submit" type="submit" id="submit-form">
                                        send message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
