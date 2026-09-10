import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
import Product from '../../components/slideProduct/Product'
import './categoryPage.css'
import SlideproductLoading from '../../components/slideProduct/SlideproductLoading'
import PageTransition from '../../components/PageTransition'
function CategoryPage() {

    const { category } = useParams()

    const [categoryProducts, setCategoryProducts] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setCategoryProducts(data)
            })
            .catch((error) => console.error(error))
            .finally(() => setloading(false))

    }, [category])

    console.log(categoryProducts);


    return (
        <PageTransition key={category}>
            <div className="category_products">

                {loading ? <SlideproductLoading key={category} /> :

                    <div className="container">

                        <div className="top_slide">
                            <h2>{category} : {categoryProducts.limit}</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>


                        <div className="products">
                            {categoryProducts.products.map((item, index) => (
                                <Product item={item} key={index} />
                            ))}
                        </div>
                    </div>

                }


            </div>
        </PageTransition>
    )
}

export default CategoryPage