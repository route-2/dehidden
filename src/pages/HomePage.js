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
    <div className=' h-screen w-screen scrollbar-hide '> 
   
    
   
    <div class="bg-black min-h-screen flex ">
  <div class="relative w-screen h-screen">
    <div className='md:absolute z-10 flex flex-row md:w-screen'>
      <NavBar/>
    </div>
 
    <div class="absolute -top-[20%] md:top-0 -left-8  w-[80%] h-[80%] md:w-[40%] md:h-[100%] bg-gradient-to-r from-indigo-800 to-indigo-400 rounded-full mix-blend-lighten opacity-80 md:opacity-40 filter blur-3xl "></div>
    <div class="absolute top-[80%] md:top-0 left-[50%] w-[40%] h-[40%] md:w-[40%] md:h-[40%] bg-gradient-to-r from-pink-400 to-purple-600  rounded-bl-full rounded-br-full mix-blend-lighten opacity-80 md:opacity-40 filter blur-3xl"></div>
    <div class="absolute md:left-[50%]  top-[110%] md:top-[70%]  md:w-[60%] md:h-[30%] w-[30%] h-[40%] bg-gradient-to-r from-red-300 to-white rounded-tl-full rounded-tr-full mix-blend-lighten filter opacity-80 md:opacity-50 blur-[100px]  "></div>
    <div class=" relative  flex flex-col md:flex-row md:space-x-4 md:space-y-4 h-fit">
     <div className='flex text-white md:h-screen m-4 md:m-0 flex-col w-fit md:w-[50%] bg-grey-50'>

     <div className='flex w-full  md:h-[100vmax] justify-center md:mt-18 md:w-[100%] bg-white items-center rounded-xl md:rounded-none  bg-opacity-10 backdrop-blur-xl  drop-shadow-lg text-white flex-col '>
       
        <div class=" w-[70%] z-10 ">
  <div class="grid gap-8 items-center justify-center">
    <div class="relative group ">
      <div class="absolute  -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-300 mt-[20%] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-2000 group-hover:duration-300 md:mt-[50%] animate-tilt"></div>
     
  
      <img src= {`https://ipfs.io/ipfs/${metadata}image`} alt="" className=' relative mt-[20%]  md:mt-[10%] w-[100vmax] p-4 h-full md:w-full md:h-full bg-black rounded-lg leading-none flex items-center '/>
    </div>
  </div>
</div>
        <div className='items-center  p-4 '>
<h1 className='font-bold text-center text-2xl font-causten '> Shards Of ETH </h1>
<h1 className='text-center font-bold mt-2 font-causten text-4xl'> Level Up </h1>

<h1 className='text-center  mt-2 font-causten font-bold text-xl'> #007 </h1>

        </div>
       
<div class="  items-center hidden md:block  mb-8 z-10">
  <div class="grid gap-8 items-start justify-center">
    <div class="relative group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"> </div>
      <button class="   relative text-white mt-2 mb-2 px-7 py-3 bg-regal-red rounded-full leading-none flex items-center  inline-flex items-center">
  <img src='https://svgshare.com/i/jBg.svg' alt='' className='mr-3'/>
  <a href='https://opensea.io/collection/shardsofeth'> 
  <span className='mr-2 font-causten  '> <strong> About </strong> </span> </a>
</button>
    </div>
  </div>
</div>
      
      <div class=" items-center md:hidden  mt-4 mb-10 z-10">
  <div class="grid gap-8 items-start justify-center">
    <div class="relative group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button class="   relative text-white mt-2 mb-2 px-4 py-3 bg-regal-red rounded-full leading-none flex items-center  inline-flex items-center">
  <img src='https://svgshare.com/i/jB7.svg' alt='' className='mr-3'/>
  <a href='https://opensea.io/collection/shardsofeth'> 
  <span className='mr-1 font-causten '> <strong> View On Opensea </strong> </span> </a>
</button>
    </div>
  </div>
</div>


       </div>




     </div>
     <div className='flex text-white items-center justify-center  flex-col w-[100%] '>
     
     <div className='flex w-[93%] md:w-[80%] bg-black hover:shadow-lg hover:shadow-blue-500/50 rounded-3xl items-center  bg-opacity-50 backdrop-blur-xl  drop-shadow-lg m-2 text-white flex-row md:mt-[60px] '>
        <div className='bg-gray-400  rounded-2xl  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-4 text-white flex-row'>
<img src="https://svgshare.com/i/jAD.svg" alt="" className='p-4'/>

        </div>
       
        <div className='items-center content-center shadow hover:shadow-xl '>
        <a href='https://opensea.io/collection/shardsofeth'> 
<h1 className='font-bold text-lg md:text-xl '> View on IPFS / ARWEAVE </h1>    </a>

<h3 className=' font-causten mr- hidden md:block'> See the unlockables for this NFT on the link provided </h3>
        </div>
       </div>
     
       <div className='flex w-[93%] hover:shadow-lg hover:shadow-blue-500/50 md:w-[80%] bg-black rounded-3xl items-center  bg-opacity-50 backdrop-blur-xl  drop-shadow-lg m-2 text-white flex-row '>
        <div className='bg-gray-400  rounded-2xl  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-4 text-white flex-row'>
<img src="https://svgshare.com/i/j9M.svg" alt="" className='p-4'/>

        </div>
        <div className='items-center '>
<h1 className='font-bold text-lg md:text-xl'> View AR experience </h1>

<h3 className='font-causten hidden md:block'> See how your NFT looks in augmented reality </h3>
        </div>
       </div>
       <div className='flex w-[93%] hover:shadow-lg hover:shadow-blue-500/50 md:w-[80%] bg-black rounded-3xl items-center  bg-opacity-50 backdrop-blur-xl  drop-shadow-lg m-2 text-white flex-row '>
        <div className='bg-gray-400  rounded-2xl  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-4 text-white flex-row'>
<img src="https://svgshare.com/i/jB6.svg" alt="" className='p-4'/>

        </div>
        <div className='items-center '>
<h1 className='font-bold text-lg md:text-xl'> Download 3D Model </h1>

<h3 className=' font-causten hidden md:block'> Instantly get access to the blend file</h3>
        </div>
       </div>
       <div className='flex hover:shadow-lg hover:shadow-blue-500/50 w-[93%] md:w-[80%] bg-black rounded-3xl items-center  bg-opacity-50 backdrop-blur-xl  drop-shadow-lg m-2 text-white flex-row '>
        <div className='bg-gray-400  rounded-2xl  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-4 text-white flex-row'>
<img src="https://svgshare.com/i/jAE.svg" alt="" className='p-4'/>

        </div>
        <div className='items-center '>
        <a href = 'https://frames.dehidden.com/'> 
<h1 className='text-lg md:text-xl font-bold'> Join the community </h1></a>

<h3 className=' font-causten hidden md:block'> Customise your NFTs specification </h3>
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
