import React from 'react'
import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";



// const Calendar = () => {
//   return (
//     <div className='flex gap-20 p-20 bg-[#F5F7FA]'>
//       <div className='p-2 '>
//         <Image
//         src={require("../../../public/image 9.png")}
//         alt=''
//         width={4000}
//         height={1200}/>
//       </div>
//       <div>
//         <p className='text-gray-400 pr-2 text-xl p-1'>
//         Maecenas dignissim justo eget nulla rutrum molestie. 
//         Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. 
//         Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. 
//         Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, 
//         nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices,
//         quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. 
//         Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
//         Quisque vulputate odio neque, eget efficitur libero condimentum id. 
//         Curabitur id nibh id sem dignissim finibus ac sit amet magna.
//         </p>
//         <h1 className='text-primary font-semibold p-1'>Tim Smith</h1>
//         <p className='text-gray-400 p-1'>British Dragon Boat Racing Association</p>
//         <div>
         
//          <ul className='flex gap-4 p-1 '>
//              <li> 
//             <Image src={require("../../../public/Logo.png")}
//             alt=""
//             height={48}
//             width={48}
//             />
//              </li>

//              <li>
//              <Image src={require("../../../public/Logo (1).png")}
//             alt=""
//             height={48}
//             width={48}/>
//              </li>

//              <li>
//              <Image src={require("../../../public/Logo (2).png")}
//             alt=""
//             height={48}
//             width={48}/>
//              </li>

//              <li>
//              <Image src={require("../../../public/Logo (3).png")}
//             alt=""
//             height={48}
//             width={48}/>
//              </li>

//              <li>
//              <Image src={require("../../../public/Logo (4).png")}
//             alt=""
//             height={48}
//             width={48}/>
//              </li>

//              <li>
//              <Image src={require("../../../public/Logo (5).png")}
//             alt=""
//             height={48}
//             width={48}/>
//              </li>

//              <li>
//              <Image src={require("../../../public/Logo (6).png")}
//             alt=""
//             height={48}
//             width={48}/>
//              </li>


        
//          <ul>
//          <p className='text-primary items-center text-center flex font-semibold ml-2 mt-2 gap-2'>Meet all customers
//          <FaLongArrowAltRight />
//          </p>
         
//          </ul>
//          </ul>
//          </div>
        
        
//     </div>
//     </div>



//   )
// }

// export default Calendar



const Customer = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 p-6 lg:p-20 bg-[#F5F7FA]">
      {/* Image Section */}
      <div className="flex justify-center">
        <Image
          src={require("../../../public/image 9.png")}
          alt="Calendar Preview"
          width={4000}
          height={1200}
          className="max-w-full h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center">
        <p className="text-gray-400 text-sm sm:text-base lg:text-xl leading-relaxed">
          Maecenas dignissim justo eget nulla rutrum molestie. 
          Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. 
          Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. 
          Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, 
          nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices,
          quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. 
          Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
          Quisque vulputate odio neque, eget efficitur libero condimentum id. 
          Curabitur id nibh id sem dignissim finibus ac sit amet magna.
        </p>

        <h1 className="text-primary font-semibold mt-4 text-base lg:text-lg">Tim Smith</h1>
        <p className="text-gray-400 text-sm lg:text-base">
          British Dragon Boat Racing Association
        </p>

        {/* Logos Section */}
        <div className="mt-6">
          <ul className="flex flex-wrap gap-4 items-center">
            {[
              "Logo.png",
              "Logo (1).png",
              "Logo (2).png",
              "Logo (3).png",
              "Logo (4).png",
              "Logo (5).png",
              "Logo (6).png",
            ].map((logo, index) => (
              <li key={index}>
                <Image
                  src={require(`../../../public/${logo}`)}
                  alt={`Logo ${index + 1}`}
                  height={48}
                  width={48}
                  className="w-12 h-12"
                />
              </li>
            ))}
          </ul>

          {/* Call-to-Action */}
          <div className="mt-4 flex items-center gap-2 text-primary font-semibold cursor-pointer">
            <span>Meet all customers</span>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;