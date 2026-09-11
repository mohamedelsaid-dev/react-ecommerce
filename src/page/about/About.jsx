import React from "react";
import "./about.css";

function About() {
    return (
        <div className="about-page">

            <section className="about-hero">
                <div className="container">
                    <h1>About Elsaid Online Store</h1>
                    <p>
                        Your trusted destination for quality products, great prices,
                        and a simple shopping experience.
                    </p>
                </div>
            </section>

            <section className="about-content">
                <div className="container">

                    <div className="about-intro">
                        <h2>Welcome to Elsaid Online Store</h2>

                        <p>
                            Elsaid Online Store is a modern e-commerce website designed
                            to make online shopping simple, fast, and enjoyable.
                        </p>

                        <p>
                            Our goal is to provide customers with a wide range of
                            quality products through an easy-to-use and responsive
                            shopping experience.
                        </p>
                    </div>

                    <div className="about-features">

                        <div className="about-card">
                            <h3>Quality Products</h3>
                            <p>
                                We focus on providing quality products that meet our
                                customers' needs.
                            </p>
                        </div>

                        <div className="about-card">
                            <h3>Fast Delivery</h3>
                            <p>
                                We aim to provide a smooth and convenient shopping
                                experience from order to delivery.
                            </p>
                        </div>

                        <div className="about-card">
                            <h3>Secure Shopping</h3>
                            <p>
                                Our website is designed with a focus on providing a
                                safe and comfortable shopping experience.
                            </p>
                        </div>

                        <div className="about-card">
                            <h3>Customer Support</h3>
                            <p>
                                Customer satisfaction is one of our main priorities.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
}

export default About;