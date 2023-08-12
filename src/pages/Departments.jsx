import React,{useContext,useState,useEffect} from 'react'
import { DataContext } from '../context/DataContext';
import Navbar from '../components/Navbar';

const Departments = () => {
  const [showData,setShowData] =  useState([])
  const {departmentTypes} = useContext(DataContext);


  console.log("show",departmentTypes);

  useEffect(() =>{
    setShowData([...departmentTypes]);
  },[departmentTypes])

  return (
    <>
    <div className='flex' >
      <Navbar />
      <div className='pt-[100px] w-[100%] flex justify-evenly'>
        {
          showData.map((item) =>{
            return(
              <div className='w-[250px] h-[150px] bg-gray-300  rounded-md flex flex-col justify-center   items-center '>
              <p className='text-3xl font-semibold'>{item}</p>
            </div>
            )
          })
        }
      </div>
    </div>

    </>


  )
}

export default Departments