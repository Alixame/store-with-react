import React from 'react'
import Title from './Title'
import Footer from './Footer'
import Header from './Header'

const Home = () => {
  return (
    <>
        <Header />

        <div className="container min-h-screen px-4 sm:px-8">
            <div className="py-8">
                <Title text="Home" />
                <p>Essa é a home do site</p>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default Home
