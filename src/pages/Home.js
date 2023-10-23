import React, { useEffect} from 'react';

function Home() {
 

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://flipkart-email-mock.vercel.app/');
      const data = await res.json();
      console.log(data);
    
    };
    fetchProducts();
  });
  return (
    <>
      <section className='mt-2'>
      
        <section className='m-auto container bg-blue-900 w-[100%] h-[100vh] text-white'>
        
        </section>
      </section>
    </>
  );
}

export default Home;
