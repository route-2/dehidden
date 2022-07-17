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
  const urlLink = "https://run.mocky.io/v3/8321cc85-81e6-45c6-bd23-33e85c504c7d"
  
        const [data,setData] = useState([]);
        const[show,setShow] = useState(true);
        const getdata = async () => {
            try { 
        const response = await axios.get(urlLink)
        
        setData(response.data);
            }
            catch (error) { 
                console.log(error)
            }
        
        
        };
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
       <div className='max-w-screen mx-auto flex items-center justify-between p-5 '> 
       <div className='w-25 '>
    <img src='https://svgshare.com/i/jBd.svg' className='w-full ' title='Dehidden' alt='Dehidden' />

       </div>
       <div onClick={onClick} className='md:hidden rounded-full w-24 pl-5 pt-2 pb-2 uppercase font-caustic bg-regal-red  text-white'> 
       Share
       </div>
       <nav className={`

${ !active && 'hidden' }
absolute flex flex-col  bg-black top-full w-full left-0 z-20
md:static md:w-auto md:flex-row md:flex 
`}>
<div> 
      <div className='container  bg-gray-200 rounded-full bg-opacity-20 backdrop-blur-xl  drop-shadow-lg justify-between  flex flex-row   '>
     <textarea className='w-60 pt-3 pl-4 resize-none bg-transparent text-white rounded-full border-none  h-10 md:mr-5'
     
          ref={textAreaRef}
          value={data}
         >


     </textarea>
    
     <div> 
      <button className='bg-regal-red font-caustic md:mr-5 mr-4  text-white w-24 h-8 mt-2 rounded-full mb-2' onClick={copyToClipboard}>
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