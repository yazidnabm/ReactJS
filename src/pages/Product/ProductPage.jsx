import { useState, useEffect } from 'react';
import getAllProducts from '../../services/getAllProducts';
import CardList from '../../components/CardList/CardList';
import Navbar from '../../components/Navbar/Navbar';
import RadioButton from '../../components/RadioButton/RadioButton';

export default function ProductPage() {
  const [products, setProducts] = useState([]); // Semua produk
  const [filteredProducts, setFilteredProducts] = useState([]); // Produk yang difilter
  const [selectedCategory, setSelectedCategory] = useState('all'); // Kategori yang dipilih

  useEffect(() => {
    const allProducts = getAllProducts();
    setProducts(allProducts);
    setFilteredProducts(allProducts); // Awalnya tampilkan semua produk
  }, []);

  const RadioButtonOpts = [
    { label: 'All', value: 'all' },
    { label: "Men's", value: 'Men\'s' }, // Value sesuai dengan kategori produk
    { label: "Women's", value: 'Women\'s' },
  ];

  // Fungsi untuk filter produk berdasarkan kategori
  const handleFilterChange = (category) => {
    setSelectedCategory(category);

    if (category === 'all') {
      setFilteredProducts(products); // Tampilkan semua produk
    } else {
      const filtered = products.filter((product) =>
        product.category.toLowerCase().includes(category)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      <Navbar />
      <div className="px-24 py-4 gap-4 mt-4 flex-wrap">
        <h3 className="font-medium">Filter</h3>
        <div className="flex gap-2 flex-wrap">
          <RadioButton
            options={RadioButtonOpts}
            defaultValue="all"
            onChange={(e) => handleFilterChange(e.target.value)} // Tangkap perubahan kategori
          />
        </div>
      </div>
      <section className="container px-24 py-4">
        <main className="grid grid-cols-4 gap-4">
          <CardList products={filteredProducts} />
        </main>
      </section>
    </>
  );
}
