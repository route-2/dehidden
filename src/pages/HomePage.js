import React from 'react';
import NavBar from '../components/NavBar';
const HomePage = () => {
  return (
    <div className=' h-screen w-screen  '> 
   
    
    <NavBar/>
    <div class="bg-black min-h-screen flex px-16">
  <div class="relative w-screen">
    <div class="absolute ml-24 w-72 h-72 bg-purple-300 rounded-full mix-blend-lighten opacity-80 filter blur-3xl "></div>
    <div class="absolute w-72 h-72 bg-yellow-300 rounded-full mix-blend-lighten opacity-75 filter blur-3xl"></div>
    <div class="absolute  w-72 h-72 bg-pink-300 rounded-full mix-blend-lighten filter opacity-75 blur-3xl  "></div>
    <div class=" relative  flex flex-row  h-screen ">
     <div className='flex flex-col w-[30%] bg-grey-100'>
<h1> ysdug</h1>
<button class> </button>
     </div>
     <div className='flex flex-col w-[50%] bg-grey-100'>
     <h1> ysdug</h1>
     </div>
    </div>
  
  </div>
 
  
  
  
</div>
 

    </div>
  );
}
export default HomePage;
