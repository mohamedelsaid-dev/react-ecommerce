import React, { useEffect, useState } from "react";
import SlideProduct from "../../components/slideProduct/SlideProduct";
import SlideproductLoading from "../../components/slideProduct/SlideproductLoading";
import PageTransition from "../../components/PageTransition";
import "./accessories.css";

function Accessories() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchAccessories = async () => {

            try {

                const res = await fetch(
                    "https://dummyjson.com/products/category/mobile-accessories"
                );

                const data = await res.json();

                setProducts(data.products);

            } catch (error) {

                console.error("Error Fetching Accessories:", error);

            } finally {

                setLoading(false);

            }

        };

        fetchAccessories();

    }, []);

    return (

        <PageTransition>

            <div className="accessories-page">

                {/* Accessories Hero */}

                <section className="accessories-hero">

                    <div className="container">

                        <span>Elsaid Online Store</span>

                        <h1>
                            Mobile <strong>Accessories</strong>
                        </h1>

                        <p>
                            Discover our collection of modern mobile accessories
                            designed to complement your devices.
                        </p>

                    </div>

                </section>


                {/* Products */}

                {loading ? (

                    <SlideproductLoading />

                ) : (

                    <SlideProduct
                        data={products}
                        title="Mobile Accessories"
                    />

                )}

            </div>

        </PageTransition>

    );
}

export default Accessories;