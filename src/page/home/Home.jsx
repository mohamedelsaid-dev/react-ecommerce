import React, { useEffect, useState } from 'react'
import HeroSlider from '../../components/HeroSlider'
import './home.css'
import SlideProduct from '../../components/slideProduct/SlideProduct'
import SlideproductLoading from '../../components/slideProduct/SlideproductLoading'
import PageTransition from '../../components/PageTransition'

const categories = [
  {
    name: "smartphones",
    description: "Discover the latest smartphones with powerful performance and modern features."
  },
  {
    name: "mobile-accessories",
    description: "Find essential accessories to enhance and protect your mobile devices."
  },
  {
    name: "laptops",
    description: "Explore powerful laptops for work, study, gaming, and everyday use."
  },
  {
    name: "tablets",
    description: "Browse versatile tablets designed for entertainment, productivity, and more."
  },
  {
    name: "sunglasses",
    description: "Discover stylish sunglasses that combine modern design with everyday comfort."
  },
  {
    name: "sports-accessories",
    description: "Get the sports accessories you need to support an active lifestyle."
  },
]

function Home() {

  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category.name}`
            )

            const data = await res.json();

            return {
              [category.name]: data.products
            }
          })
        )
        const productsData = Object.assign({}, ...results);
        setProducts(productsData)



      } catch (error) {
        console.error("Erorr Fetching", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])



  return (
    <PageTransition>
      <div>
        <HeroSlider />


        {loading ? (
          categories.map((category) => (
            <SlideproductLoading key={category.name} />
          ))

        ) : (



            categories.map((category) => (
              <SlideProduct
                key={category.name}
                data={products[category.name]}
                title={category.name.replace("-", " ")}
                description={category.description}
              />
            ))
        )}





      </div>
    </PageTransition>
  )
}

export default Home