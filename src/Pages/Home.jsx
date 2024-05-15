import React,{Suspense} from 'react'


import Shoes from '../Components/Shoes'
import Accessories from '../Components/Accessories'



import Banner2 from '../Components/Banner2'

import Layout from '../Components/Layout'

const LazyLoadedProduct = React.lazy(() => import('../Components/Product'));

const Home = () => {
  
  return (
    <Layout>
    
    <section className='banner-section mt-4 d-flex justify-content-center-align-itmes-center position-relative'>
    {/* <Suspense fallback={<div className='d-flex justify-content-center-align-itmes-center w-100 h-100 position-absolute lazy-loader'><LazyLoadSpinner/></div>}>
        <LazyLoadedBanner />
      </Suspense> */}
      <Banner2/>
    </section>
    <section className='shoe-section section-spacing pt-4'>
      <Shoes/>
    </section>
    <section className='acc-section  pb-4'>
      <Accessories/>
    </section>
    
    
    
    </Layout>
  )
}

export default Home