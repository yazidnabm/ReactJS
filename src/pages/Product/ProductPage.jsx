import {useState, useEffect} from 'react'
import getAllProducts from '../../services/getAllProducts'
import CardList from '../../CardList/CardList'

export default function ProductPage() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    let allProducts = getAllProducts()
    allProducts = allProducts.length > 0 ? allProducts : []
    // allProducts = []
    setProducts(allProducts)
  }, [])
  return (
    <section className='container px-24 py-4'>
      <main className='grid grid-cols-4 gap-4'>
          <CardList products={products}/>
      </main>

    </section>
  )
}
