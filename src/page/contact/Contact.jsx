import React from "react";
import "./contact.css";
import PageTransition from "../../components/PageTransition";

function Contact() {
    return (
        <PageTransition>

            <div className="contact-page">

                {/* =========================================
                    Contact Hero
                ========================================= */}

                <section className="contact-hero">
                    <div className="container">

                        <span>Elsaid Online Store</span>

                        <h1>
                            Contact <strong>Us</strong>
                        </h1>

                        <p>
                            Have a question or need help?
                            We are here to help you.
                        </p>

                    </div>
                </section>


                {/* =========================================
                    Contact Content
                ========================================= */}

                <section className="contact-content">

                    <div className="container">

                        <div className="contact-grid">


                            {/* =================================
                                Contact Information
                            ================================= */}

                            <div className="contact-info">

                                <h2>Get In Touch</h2>

                                <p className="contact-description">
                                    If you have any questions about our products,
                                    orders, or services, feel free to contact us.
                                    Our team will be happy to assist you.
                                </p>


                                {/* Address */}

                                <div className="contact-item">

                                    <div className="contact-icon">
                                        📍
                                    </div>

                                    <div>
                                        <h3>Address</h3>
                                        <p>
                                            Cairo, Egypt
                                        </p>
                                    </div>

                                </div>


                                {/* Phone */}

                                <div className="contact-item">

                                    <div className="contact-icon">
                                        📞
                                    </div>

                                    <div>
                                        <h3>Phone</h3>
                                        <p>
                                            +20 100 000 0000
                                        </p>
                                    </div>

                                </div>


                                {/* Email */}

                                <div className="contact-item">

                                    <div className="contact-icon">
                                        ✉️
                                    </div>

                                    <div>
                                        <h3>Email</h3>
                                        <p>
                                            ap56store@gmal.com
                                        </p>
                                    </div>

                                </div>


                                {/* Working Hours */}

                                <div className="contact-item">

                                    <div className="contact-icon">
                                        🕒
                                    </div>

                                    <div>
                                        <h3>Working Hours</h3>
                                        <p>
                                            Saturday - Thursday
                                        </p>
                                        <p>
                                            10:00 AM - 10:00 PM
                                        </p>
                                    </div>

                                </div>

                            </div>


                            {/* =================================
                                Contact Form
                            ================================= */}

                            <div className="contact-form">

                                <h2>Send Us a Message</h2>

                                <form>

                                    <div className="form-group">

                                        <label>
                                            Your Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label>
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="Enter your Email"
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label>
                                            Subject
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter message subject"
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label>
                                            Message
                                        </label>

                                        <textarea
                                            rows="6"
                                            placeholder="Write your message..."
                                        ></textarea>

                                    </div>


                                    <button type="submit">
                                        Send Message
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </section>

            </div>

        </PageTransition>
    );
}

export default Contact;