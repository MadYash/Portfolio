import Image from "next/image";
import Profile from '../public/Images/profile_pic.jpeg'
export default function AboutHome() {
    return (
      <>
        {/* Hero Section: Image Side with Simple Header */}
        <div className="relative overflow-hidden bg-white dark:text-gray-100 dark:bg-gray-900">
            <h2 className=" text-center text-2xl ">About Me
            <hr className="w-6 h-1 mx-auto bg-teal-500 border-0 rounded" />
            </h2>
          {/* Hero Content */}
          <div className="relative flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">

            <div className="lg:w-1/2 lg:flex lg:items-center">
              <div>
           
                <h1 className="text-4xl font-black text-black mb-4 dark:text-white">
                  Get to Know me
                </h1>
                <h2 className="text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300 my-3">
                Hey, My name is Yash Sharma and I'm <span className=" bg-emerald-400 text-black">Ambitious, self motivated and driven</span> Software Developer based in Ghaziabad,Uttar Pradesh,India 
                </h2>
                <h2 className="text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300 my-3">
                  I've Graduated from R.D Engineering College, AKTU University in 2023 with a BS in Computer Science and Engineering and have been working in the field from 2022.
                </h2>
                <h2 className="text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300 my-3">I have a wide range of hobbies and passion that keeps me busy. From Going to Gym, playing Football, listening to music. I'm always seeking new experiences and love to keep myself engaged and learning new things</h2>
                <h2 className="text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300 my-3">I Believe that you should <span className="bg-emerald-400 text-black">never stop Growing</span> and that's what i strive to do, I have a passion for technology and a desire to always push the limits of what is possible. I'm excited to see where my career takes me and always open to new opportunities ☺️ </h2>
               
              </div>
            </div>
        {/*Image content  */}
        <div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
        <div>
           
           <h1 className="text-4xl font-black text-black mb-4 dark:text-white mx-4 my-4">
             My Skills
           </h1>
           <div className="text-sm rounded text-gray-800 bg-gray-100 border border-gray-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 dark:text-gray-200 dark:bg-gray-700/50 dark:border-gray-600/50 my-3 mx-3">
                  HTML
                </div>
                <div className="text-sm rounded text-gray-800 bg-gray-100 border border-gray-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 dark:text-gray-200 dark:bg-gray-700/50 dark:border-gray-600/50 my-3 mx-3">
                  CSS
                </div>
                <div className="text-sm rounded text-gray-800 bg-gray-100 border border-gray-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 dark:text-gray-200 dark:bg-gray-700/50 dark:border-gray-600/50 my-3 mx-3">
                  JavaScript
                </div>
                <div className="text-sm rounded text-gray-800 bg-gray-100 border border-gray-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 dark:text-gray-200 dark:bg-gray-700/50 dark:border-gray-600/50 my-3 mx-3">
                  React JS
                </div>
                <div className="text-sm rounded text-gray-800 bg-gray-100 border border-gray-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 dark:text-gray-200 dark:bg-gray-700/50 dark:border-gray-600/50 my-3 mx-3">
                  Next JS
                </div>
                <div className="text-sm rounded text-gray-800 bg-gray-100 border border-gray-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 dark:text-gray-200 dark:bg-gray-700/50 dark:border-gray-600/50 my-3 mx-3">
                  GIT
                </div>
                <div className="text-sm rounded text-gray-800 bg-gray-100 border border-gray-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 dark:text-gray-200 dark:bg-gray-700/50 dark:border-gray-600/50 my-3 mx-3">
                  GitHub
                </div>
                <div className="text-sm rounded text-gray-800 bg-gray-100 border border-gray-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 dark:text-gray-200 dark:bg-gray-700/50 dark:border-gray-600/50 my-3 mx-3">
                  Tailwind CSS
                </div>
                <div className="text-sm rounded text-gray-800 bg-gray-100 border border-gray-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 dark:text-gray-200 dark:bg-gray-700/50 dark:border-gray-600/50 my-3 mx-3">
                  Bootstrap
                </div>
                <div className="text-sm rounded text-gray-800 bg-gray-100 border border-gray-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 dark:text-gray-200 dark:bg-gray-700/50 dark:border-gray-600/50 my-3 mx-3">
                  
                </div>
         </div>

              <div className="relative mx-5 lg:w-96">
       
                
               
              </div>

            </div>
              {/* End of Image content */}
          </div>
          {/* END Hero Content */}
        </div>
        {/* END Hero Section: Image Side with Simple Header */}
      </>
    )
  }