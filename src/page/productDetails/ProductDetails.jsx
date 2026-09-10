import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoMdStar, IoIosStarHalf, IoMdShare } from "react-icons/io";
import './productdetails.css'
import { TiShoppingCart } from 'react-icons/ti';
import { FaRegHeart } from 'react-icons/fa';
import SlideProduct from '../../components/slideProduct/SlideProduct';
import ProductDetailsLoading from './ProductDetailsLoading';
import SlideproductLoading from '../../components/slideProduct/SlideproductLoading';
import ProductInfo from './ProductInfo';
import ProductImages from './productimages';
import PageTransition from '../../components/PageTransition';

function ProductDetails() {
    const { id } = useParams()

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [relatedProducts, setRelatedProducts] = useState([])
    const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true)




    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await res.json()
                setProduct(data)
                setLoading(false)


            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct()

    }, [id])

    useEffect(() => {
        if (!product) return
        fetch(`https://dummyjson.com/products/category/${product.category}`)
            .then(res => res.json())
            .then((data) => {
                setRelatedProducts(data.products)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoadingRelatedProducts(false))
    }, [product?.category])

    if (!product) return <p>product Not found</p>

    return (
        <PageTransition key={id} >
            <div>
                {loading ? (
                    <ProductDetailsLoading />
                ) : (
                    <div className='item_details'>
                        <div className="container">
                            <ProductImages product={product} />
                            <ProductInfo product={product} />
                        </div>
                    </div>
                )}



                {loadingRelatedProducts ? (
                    <SlideproductLoading />
                ) : (
                    <SlideProduct
                        key={product.category}
                        data={relatedProducts}
                        title={product.category.replace("-", " ")} />
                )}
            </div>
        </PageTransition>
    )
}

export default ProductDetails