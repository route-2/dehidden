import React, { useEffect,useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
const HomePage = () => {


const[metadata,setMetaData]=useState([]);
const[name,setName]=useState([]);
const[description,setDescription]=useState([]);
  const getdata = async () => {
    try { 
const response = await axios.get("https://ipfs.io/ipfs/bafkreihst3i6ttsnqrzy3mvlfgxvdfv5fxkuruuvb2ik36tisdjk65cfqq")


var url = response.data.image_url;
var name = response.data.name;
var description= response.data.description;
console.log(response.data.id);
setMetaData(url.slice(7,67));
setName(name);
setDescription(description);
    }
    catch (error) { 
        console.log(error)
    }


};

useEffect(() => {   
getdata();
}, []);

  
  return (
    <div className=' h-screen w-screen  '> 
   
    
   
    <div class="bg-black min-h-screen flex ">
  <div class="relative w-screen h-screen">
  <NavBar/>
    <div class="absolute top-0 -left-8  w-[40%] h-[80%] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full mix-blend-lighten opacity-20 filter blur-3xl "></div>
    <div class="absolute top-0 -bottom-10 left-[55%] w-[50%] h-[40%] bg-gradient-to-r from-pink-600 to-violet-400 rounded-full mix-blend-lighten opacity-30 filter blur-3xl"></div>
    <div class="absolute left-[43%] top-[50%]  w-[60%] h-[50%] bg-gradient-to-r from-red-300 to-yellow-100 rounded-full mix-blend-lighten filter opacity-30 blur-3xl  "></div>
    <div class=" relative  flex flex-col md:flex-row md:space-x-4 md:space-y-4  h-fit">
     <div className='flex m-6 text-white flex-col w-[85%] md:w-[40%] bg-grey-100'>

<div className='flex w-[100%] h-[90%] ml-10 mt-5 justify-center md:mt-18 md:w-[100%] bg-gray-700 items-center rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg text-white flex-col '>

       
        <div class="mr-8 w-[70%] z-10 ">
  <div class="grid gap-8 items-center justify-center">
    <div class="relative group ">
      <div class="absolute  -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-300 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-2000 group-hover:duration-300 animate-tilt"></div>
     
     
      <img src={`https://ipfs.io/ipfs/${metadata}/image`} alt="" className=' relative  bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 p-4'/>
    </div>
  </div>
</div>
        <div className='items-center mt-6 p-4 '>
<h1 className='font-bold text-center '> {name} </h1>
<h1 className='text-center font-caustic text-xl'> {description} </h1>



        </div>
       
<div class="mr-8 items-center hidden md:block mt-4 mb-10 z-10">
  <div class="grid gap-8 items-start justify-center">
    <div class="relative group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"> </div>
      <button class="   relative text-white mt-2 mb-2 px-7 py-3 bg-indigo-300 rounded-full leading-none flex items-center  inline-flex items-center">
  <img src='https://svgshare.com/i/jBg.svg' alt='' className='mr-3'/>
  <a href='https://opensea.io/collection/shardsofeth'> 
  <span className='mr-2  '> <strong> About </strong> </span> </a>
</button>
    </div>
  </div>
</div>
      
      <div class="mr-8 items-center md:hidden  mt-4 mb-10 z-10">
  <div class="grid gap-8 items-start justify-center">
    <div class="relative group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button class="   relative text-white mt-2 mb-2 px-7 py-3 bg-indigo-300 rounded-full leading-none flex items-center  inline-flex items-center">
  <img src='https://svgshare.com/i/jB7.svg' alt='' className='mr-3'/>
  <a href='https://opensea.io/collection/shardsofeth'> 
  <span className='mr-2  '> <strong> View On Opensea </strong> </span> </a>
</button>
    </div>
  </div>
</div>


       </div>



<button class> </button>
     </div>
     <div className='flex ml-4 text-white items-center justify-center  flex-col w-[100%] '>
    
       <div className='flex w-[93%]  md:w-[90%] bg-gray-700 rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-6 text-white flex-row '>
        <div className='bg-gray-400  rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-6 text-white flex-row'>
<img src="https://svgshare.com/i/jAD.svg" alt="" className='p-4'/>

        </div>
        <div className='items-center content-center mt-6 '>
<h1 className='font-bold  '> View on IPFS / ARWEAVE </h1>

<h3 className=' font-caustic hidden md:block'> See the unlockables for this NFT on the link provided </h3>
        </div>
       </div>
       <div className='flex w-[93%] md:w-[90%] bg-gray-700 rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-6 text-white flex-row '>
        <div className='bg-gray-400  rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-6 text-white flex-row'>
<img src="https://svgshare.com/i/j9M.svg" alt="" className='p-4'/>

        </div>
        <div className='items-center mt-6 '>
<h1 className='font-bold'> View AR experience </h1>

<h3 className='font-caustic hidden md:block'> See how your NFT looks in augmented reality </h3>
        </div>
       </div>
       <div className='flex w-[93%] md:w-[90%] bg-gray-700 rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-6 text-white flex-row '>
        <div className='bg-gray-400  rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-6 text-white flex-row'>
<img src="https://svgshare.com/i/jB6.svg" alt="" className='p-4'/>

        </div>
        <div className='items-center mt-6 '>
<h1 className='font-bold'> Download 3D Model </h1>

<h3 className=' font-caustic hidden md:block'> Instantly get access to the blend file</h3>
        </div>
       </div>
       <div className='flex w-[93%] md:w-[90%] bg-gray-700 rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-6 text-white flex-row '>
        <div className='bg-gray-400  rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-6 text-white flex-row'>
<img src="https://svgshare.com/i/jAE.svg" alt="" className='p-4'/>

        </div>
        <div className='items-center mt-6 '>
<h1 className='font-bold'> Join the community </h1>

<h3 className=' font-caustic hidden md:block'> Customise your NFTs specification </h3>
        </div>
       </div>
      
       
    




     </div>
    </div>
  
  </div>
 
  
  
  
</div>
 

    </div>
  );
}
export default HomePage;
