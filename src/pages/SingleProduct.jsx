import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/DataContext';

const SingleProduct = () => {
  const {productName} = useParams();
  const [productsName,setProductName] = useState('')
  const{allData,} = useContext(DataContext);

  const showItem = allData.filter(({name}) => name.toLowerCase() === productName.toLowerCase());
  console.log("prod",showItem);
  
  useEffect(() =>{
    sessionStorage.setItem("paramName",productName);
    setProductName(productName);
  },productName)
  return (
    <>
    <div className='flex' >
      <Navbar />
      <div>
        <div className='mx-auto'>
          {
            showItem.map((item) =>{
              return(
                <div  className='h-[90%] pt-4 flex flex-col justify-center items-center'>
                  <p className='font-bold text-3xl'>{item.name}</p>
                  <img src={item.imageUrl} alt ="item image" className='w-[30%]'/>
                  <div className='text-xl flex flex-col items-center justify-center gap-3'>
                  <p>Price: {item.price}</p>
                  <p>Stock: {item.stock}</p>
                  <p>Supplier: {item.supplier}</p>
                  <p>Department: {item.department}</p>
                  <p>SKU: {item.sku}</p>
                  <p>Delivered: {item.delivered}</p>
                  <p>Description: {item.description}</p>
                  </div>


                  </div>
              )
            })
          }
        </div>
      </div>
    </div>

    </>


  )
}

export default SingleProduct