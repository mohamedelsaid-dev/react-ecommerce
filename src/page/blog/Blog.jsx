import React from "react";
import "./blog.css";
import PageTransition from "../../components/PageTransition";

function Blog() {
    const posts = [
        {
            id: 1,
            category: "Mobile Tips",
            title: "How to Choose the Right Smartphone for You",
            description:
                "Discover the most important factors to consider when choosing a smartphone, from performance and camera quality to battery life and display.",
            date: "Sep 10, 2026",
        },
        {
            id: 2,
            category: "Accessories",
            title: "5 Essential Mobile Accessories You Need",
            description:
                "From wireless chargers to protective cases, discover the accessories that can make your smartphone experience easier and more convenient.",
            date: "Sep 08, 2026",
        },
        {
            id: 3,
            category: "Shopping Guide",
            title: "How to Shop Online Safely",
            description:
                "Learn simple and practical tips to enjoy a safer online shopping experience and choose products with confidence.",
            date: "Sep 05, 2026",
        },
        {
            id: 4,
            category: "Technology",
            title: "Technology Trends You Should Know",
            description:
                "Explore some of the latest technology trends and discover how modern devices are changing the way we work, communicate, and live.",
            date: "Sep 02, 2026",
        },
        {
            id: 5,
            category: "Laptops",
            title: "What to Look for When Buying a Laptop",
            description:
                "A simple guide to choosing the right laptop based on processor, RAM, storage, display, and your daily needs.",
            date: "Aug 30, 2026",
        },
        {
            id: 6,
            category: "Product Reviews",
            title: "Why Product Quality Matters",
            description:
                "Choosing quality products can save you money in the long run. Here are some things to consider before making your next purchase.",
            date: "Aug 27, 2026",
        },
    ];

    return (
        <PageTransition>
            <div className="blog-page">

                {/* Blog Hero */}
                <section className="blog-hero">
                    <div className="container">
                        <span>Elsaid Online Store</span>

                        <h1>
                            Our <strong>Blog</strong>
                        </h1>

                        <p>
                            Discover useful tips, shopping guides, technology
                            news, and helpful information.
                        </p>
                    </div>
                </section>


                {/* Blog Posts */}
                <section className="blog-content">
                    <div className="container">

                        <div className="blog-heading">
                            <h2>Latest Articles</h2>
                            <p>
                                Helpful articles to make your shopping experience
                                easier and smarter.
                            </p>
                        </div>


                        <div className="blog-grid">

                            {posts.map((post) => (
                                <article className="blog-card" key={post.id}>

                                    <div className="blog-card-content">

                                        <span className="blog-category">
                                            {post.category}
                                        </span>

                                        <h3>
                                            {post.title}
                                        </h3>

                                        <p>
                                            {post.description}
                                        </p>

                                        <div className="blog-card-footer">
                                            <span>{post.date}</span>

                                            <button>
                                                Read More
                                            </button>
                                        </div>

                                    </div>

                                </article>
                            ))}

                        </div>

                    </div>
                </section>

            </div>
        </PageTransition>
    );
}

export default Blog;