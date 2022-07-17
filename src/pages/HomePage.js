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

<div className='flex w-[100%] h-[90%] mt-5 justify-center md:mt-18 md:w-[100%] bg-gray-700 items-center rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg text-white flex-col '>
        <div className=' w-[80%] mt-8 rounded-lg   '>
<img src={`https://ipfs.io/ipfs/${metadata}/image`} alt="" className='p-4'/>

        </div>
        <div className='items-center mt-6 p-4 '>
<h1 className='font-bold text-center '> {name} </h1>
<h1 className='text-center font-caustic text-xl'> {description} </h1>



        </div>
        <div className='items-center hidden md:block mt-4 mb-10'>
        <button class="bg-red-300  mt-4 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center">
  <img src='https://svgshare.com/i/jBg.svg' alt='' className='mr-3'/>
  <a href='https://opensea.io/collection/shardsofeth'> 
  <span className='mr-2  '> <strong> About </strong> </span> </a>
</button>
</div>
<div className=' md:hidden mb-4'>
 <button class="bg-red-300 mt-4 md:hidden hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center">
  <img src='https://svgshare.com/i/jBg.svg' alt='' className='mr-3'/>
  <a href='https://opensea.io/collection/shardsofeth'> 
  <span className='mr-2 '> <strong> View on Opensea </strong> </span> </a>
</button>
        </div>
       </div>



<button class> </button>
     </div>
     <div className='flex  text-white items-center justify-center  flex-col w-[100%] '>
    
       <div className='flex w-[93%]  md:w-[90%] bg-gray-700 rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-6 text-white flex-row '>
        <div className='bg-gray-400  rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-6 text-white flex-row'>
<img src="https://svgshare.com/i/jAD.svg" alt="" className='p-4'/>

        </div>
        <div className='items-center mt-6 '>
<h1 className=''> View on IPFS / ARWEAVE </h1>

<h3 className=' hidden md:block'> See the unlockables for this NFT on the link provided </h3>
        </div>
       </div>
       <div className='flex w-[93%] md:w-[90%] bg-gray-700 rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-6 text-white flex-row '>
        <div className='bg-gray-400  rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-6 text-white flex-row'>
<img src="https://svgshare.com/i/j9M.svg" alt="" className='p-4'/>

        </div>
        <div className='items-center mt-6 '>
<h1 className=''> View AR experience </h1>

<h3 className=' hidden md:block'> See how your NFT looks in augmented reality </h3>
        </div>
       </div>
       <div className='flex w-[93%] md:w-[90%] bg-gray-700 rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-6 text-white flex-row '>
        <div className='bg-gray-400  rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-6 text-white flex-row'>
<img src="https://svgshare.com/i/jB6.svg" alt="" className='p-4'/>

        </div>
        <div className='items-center mt-6 '>
<h1 className=''> Download 3D Model </h1>

<h3 className=' hidden md:block'> instantly get access to the blend file</h3>
        </div>
       </div>
       <div className='flex w-[93%] md:w-[90%] bg-gray-700 rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-6 text-white flex-row '>
        <div className='bg-gray-400  rounded-lg  bg-opacity-30 backdrop-blur-xl  drop-shadow-lg m-6 text-white flex-row'>
<img src="https://svgshare.com/i/jAE.svg" alt="" className='p-4'/>

        </div>
        <div className='items-center mt-6 '>
<h1 className=''> Join the community </h1>

<h3 className=' hidden md:block'> Curstomise your NFTs specification </h3>
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
