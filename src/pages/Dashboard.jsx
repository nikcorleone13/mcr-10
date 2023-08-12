import React,{useContext,useState,useEffect} from 'react'
import { DataContext } from '../context/DataContext';
import Navbar from '../components/Navbar';

const Dashboard = () => {
    const [showData,setShowData] =  useState([])
    const {allData} = useContext(DataContext);

    const totalStocks = showData.reduce((sum,curr) =>{sum+=curr.stock; return sum},0);
    // // const total = cart.reduce((sum, curr) => {sum += curr.price*curr.qty; return sum}, 0);
    const delivered = showData.reduce((sum,curr) =>{sum+=curr.delivered; return sum},0);
    const lowStocks = showData.reduce((sum,curr) =>{sum+=curr.stock<=10; return sum},0);
    // console.log("total",totalStocks,delivered
    // ,lowStocks);
    // console.log("show",showData);

    useEffect(() =>{
      setShowData([...allData]);
    },[allData])
    
  return (
    <>
    <div className='flex' >
      <Navbar />
      <div className='pt-[100px] w-[100%] flex justify-evenly'>
        <div className='w-[250px] h-[150px] bg-gray-300  rounded-md flex flex-col justify-start  items-center '>
          <p className='text-green-500 text-3xl pt-2'>Total Stocks</p>
          <p className='text-3xl pt-2'>{totalStocks}</p>
        </div>

        <div className='w-[250px] h-[150px] bg-gray-300  rounded-md flex flex-col justify-start  items-center '>
          <p className='text-yellow-500 text-3xl pt-2'>Delivered</p>
          <p className='text-3xl pt-2'>{delivered}</p>
        </div>

        <div className='w-[250px] h-[150px] bg-gray-300  rounded-md flex flex-col justify-start  items-center '>
          <p className='text-red-500 text-3xl pt-2'>Low Stock Items</p>
          <p className='text-3xl pt-2'>{lowStocks}</p>
        </div>
      </div>
    </div>

    </>


  )
}

export default Dashboard;