import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

// const Frame = () => {
//   return (
//     <div className='bg-[#F5F7FA]'>
//       <h1 className='text-black font-bold text-5xl text-center p-10 pr-96 pl-96'>Pellentesque suscipit fringilla libero eu.</h1>
//       <button className="bg-primary text-white p-2 pl-4 pr-4 ml-[600px]">
//         <ul className='flex gap-2'>
//             <li>Get a Demo</li>
//             <li className='mt-1'><FaLongArrowAltRight/></li>
//         </ul>
//         </button>
//     </div>
//   )
// }

// export default Frame




const Frame = () => {
  return (
    <div className="bg-[#F5F7FA] p-6">
      <h1 className="text-black font-bold text-3xl sm:text-4xl lg:text-5xl text-center p-6">
        Pellentesque suscipit fringilla libero eu.
      </h1>
      <div className="flex justify-center mt-4">
        <button className="bg-primary text-white p-2 px-6 flex items-center gap-2">
          <span>Get a Demo</span>
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default Frame;
