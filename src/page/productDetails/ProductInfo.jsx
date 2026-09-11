import React, { useContext } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { IoIosStarHalf, IoMdShare, IoMdStar } from 'react-icons/io'
import { TiShoppingCart } from 'react-icons/ti'
import { CartContext } from '../../components/context/CartContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function ProductInfo({ product }) {

    const {
        cartItems,
        addToCart,
        addToFavorites,
        removeFromFavorites,
        favorites
    } = useContext(CartContext)

    const isInCart = cartItems.some(i => i.id === product.id)

    const navigate = useNavigate()


    // =========================================
    // Add To Cart
    // =========================================

    const handleAddToCart = () => {

        addToCart(product)

        toast.success(
            <div className='stoast-wrapper'>

                <img
                    src={product.images[0]}
                    className='toast-img'
                    alt=""
                />

                <div className="toast-contant">

                    <strong>{product.title}</strong>
                    added to Cart

                    <div>
                        <button
                            className='btn'
                            onClick={() => navigate('/cart')}
                        >
                            view Cart
                        </button>
                    </div>

                </div>

            </div>,

            { duration: 3500 }
        )
    }


    // =========================================
    // Favorites
    // =========================================

    const isInFav = favorites.some(i => i.id === product.id)

    const handleAddToFav = () => {

        if (isInFav) {

            removeFromFavorites(product.id)

            toast.error(
                `${product.title} Removed From favorites`
            )

        } else {

            addToFavorites(product)

            toast.success(
                `${product.title} added To favorites`
            )
        }
    }


    // =========================================
    // Share Product
    // =========================================

    const handleShare = async () => {

        const productUrl = window.location.href

        try {

            if (navigator.share) {

                await navigator.share({
                    title: product.title,
                    text: `Check out ${product.title}`,
                    url: productUrl
                })

            } else {

                await navigator.clipboard.writeText(productUrl)

                toast.success("Product link copied!")

            }

        } catch (error) {

            if (error.name !== "AbortError") {
                console.error("Share failed:", error)
                toast.error("Unable to share product")
            }

        }
    }


    return (

        <div className="details_item">

            <h1 className='name'>
                {product.title}
            </h1>


            <div className="stars">

                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoIosStarHalf />

            </div>


            <p className='price'>
                ${product.price}
            </p>


            <h5>
                Availability:
                <span>
                    {product.availabilityStatus}
                </span>
            </h5>


            <h5>
                Brand:
                <span>
                    {product.brand}
                </span>
            </h5>


            <p className='desc'>
                {product.description}
            </p>


            <h5 className='stock'>
                Hurry Up! Only
                <span>
                    {product.stock}
                </span>
                products left in stock.
            </h5>


            <button
                onClick={handleAddToCart}
                className={`btn ${isInCart ? 'in-cart' : ''}`}
            >

                {isInCart
                    ? "item in cart"
                    : "Add to cart"
                }

                <TiShoppingCart />

            </button>


            <div className="icons">

                {/* Favorite */}

                <span
                    className={`${isInFav ? "in-fav" : ""}`}
                    onClick={handleAddToFav}
                >
                    <FaRegHeart />
                </span>


                {/* Share */}

                <span onClick={handleShare}>
                    <IoMdShare />
                </span>

            </div>

        </div>
    )
}

export default ProductInfo