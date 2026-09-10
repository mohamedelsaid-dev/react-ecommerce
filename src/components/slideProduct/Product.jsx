import React, { useContext } from 'react'
import { IoMdStar, IoIosStarHalf } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaCheck } from "react-icons/fa";
import toast from 'react-hot-toast';





function Product({ item }) {

    const navigate = useNavigate()

    const { cartItems, addToCart, favorites, addToFavorites, removeFromFavorites } = useContext(CartContext)
    
    const isInCart = cartItems.some(i => i.id === item.id);

    const handleAddToCart= () => {
        addToCart(item)

        toast.success(
            <div className='stoast-wrapper'>
                <img src={item.images[0]} className='toast-img' />
                <div className="toast-contant">
                    <strong>{item.title}</strong>
                    added to Cart 
                    <div>
                        <button className='btn' onClick={()=> navigate('/cart')}> view Cart</button>
                    </div>
                </div>
            </div>
            ,{duration :3500}
        )

    }

    //favorites

    const isInFav = favorites.some(i => i.id === item.id);

    const handleAddToFav = ()=> {
        if(isInFav) {
            removeFromFavorites(item.id)
            toast.error(`${item.title} Removed From favorites`)

        }else{
            addToFavorites(item)
            toast.success(`${item.title} added To favorites`)
        }
        

    }

    return (
        <div className={`product ${isInCart ? 'in-cart' : ''}`}>

            <Link to={`/products/${item.id}`} >
                <span className='status_cart'><FaCheck /> in cart </span>


                <div className="img_product">
                    <img src={item.images[0]} alt="" />


                </div>
                <p className="name_product">
                    {item.title}
                </p>
                <div className="stars">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoIosStarHalf />

                </div>

                <p className="price"><span>${item.price}</span></p>

            </Link>

            

            <div className="icons">
                <span className='btn_addtocart' onClick={handleAddToCart} ><FaCartArrowDown /></span>
                <span className={`${isInFav ? "in-fav" : ""}`} onClick={handleAddToFav}><FaRegHeart /></span>
                <span><IoMdShare /></span>

            </div>

        </div>
    )
}

export default Product