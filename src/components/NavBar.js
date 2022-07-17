import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState,useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NavBar = () => {
    const [active,setActive] = useState(false);
    const onClick = () => {
        setActive(!active);
    }
    const notify = () => toast.success(' Copied to ClipBoard!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null); 
  const urlLink = "https://random-data-api.com/api/users/random_user"
  
        const [data,setData] = useState([]);
       
        const getdata = async () => {
            try { 
        const response = await axios.get(urlLink)
        
        setData(response.data.id);
            }
            catch (error) { 
                console.log(error)
            }
        
        
        };
        const string = `de.dehidden.com/${data}`;
        useEffect(() => {
            getdata();
        }, []);
  
  
  function copyToClipboard(e) {
      textAreaRef.current.select();
     notify();
      document.execCommand('copy');
      e.target.focus();
      setCopySuccess('');
    };
    
    return (
    <>
       <header className="bg-none relative z-1 ">
       <div className='max-w-screen mx-auto flex items-center justify-between  '> 
       <div className='w-25 pt-4 pl-16 '>
    <img src='https://svgshare.com/i/jBd.svg' className='w-full ' title='Dehidden' alt='Dehidden' />

       </div>
       <div class="mr-8 md:hidden mt-4">
  <div class="grid gap-8 items-start justify-center">
    <div class="relative group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button onClick={copyToClipboard} className="relative text-white px-7 py-4 bg-black rounded-full leading-none flex items-center divide-x divide-gray-600" >
        
       Share
      </button>
    </div>
  </div>
</div>
       <nav className={`

${ !active && 'hidden' }
absolute flex flex-col   top-full  w-screen left-0 z-20
md:static md:w-auto md:flex-row md:flex 
`}>
<div className='mr-10'> 
      <div className='container mt-4  bg-gray-200 rounded-full bg-opacity-20 backdrop-blur-xl  drop-shadow-lg justify-between  flex flex-row   '>
     <textarea className='w-60 pt-3 pl-4 resize-none bg-transparent text-white rounded-full border-none  h-10 md:mr-5'
     contentEditable={false}
          ref={textAreaRef}
          value={string}
         >


     </textarea>
    
     <div> 
      <button className='text-white text-white bg-gradient-to-r from-red-500 via-red-400 to-red-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-400 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-900/80  text-center  font-caustic md:mr-5 mr-4   w-24 h-8 mt-2 rounded-full mb-2' onClick={copyToClipboard}>
        Copy
      </button>
     
      </div>
      

      </div>
      <div className='text-white text-center mt-2  '>
     
      <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
      </div> 
     
     
      </div>

      


       </nav>
       
       
       
       
       </div>
       </header>
    </>
    )
    };
    export default NavBar;