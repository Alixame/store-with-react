import React from 'react'
import Title from './Title'
import Footer from './Footer'
import Header from './Header'
import Product from './Product'

const Products = () => {
  const products = [
    { 
      name: 'Notebook',
      price: 2000.00,
      img: '/img/andras-vas-Bd7gNnWJBkU-unsplash.jpg',
      details: ['16gb ram', '512gb'] 
    },
    { 
      name: 'Iphone 11', 
      price: 4000.00, 
      img: '/img/alexander-andrews-Wzs4-QEmCUQ-unsplash.jpg', 
      details: ['6gb ram', '128gb'] 
    },
  ];

  return (
    <>
      <Header />
      
      {/* <div className="container min-h-screen px-4 sm:px-8">
          <div className="py-8">
              <Title text="Produtos" />

              {products.map((product) => (
                <Product key={product.name} {...product} />
              ))}
          </div>
      </div> */}

      <div className="container min-h-screen px-4 sm:px-8 bg-white text-gray-600 work-sans leading-normal text-base tracking-normal" cz-shortcut-listen="true">
        <section className="bg-white py-8">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                        <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="/#">
                            <Title text="Produtos" />
                        </a>

                        <div className="flex items-center" id="store-nav-content">

                            <a className="pl-3 inline-block no-underline hover:text-black" href="/#">
                                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z"></path>
                                </svg>
                            </a>

                            <a className="pl-3 inline-block no-underline hover:text-black" href="/#">
                                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
                                </svg>
                            </a>

                        </div>
                    </div>
                </nav>

                {products.map((product) => (
                  <Product key={product.name} {...product} />
                ))}
            </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default Products
