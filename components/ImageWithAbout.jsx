import Image from "next/image";
import Profile from '../public/Images/profile_pic.jpeg'
export default function ImageWithAbout() {
    return (
      <>
        {/* Hero Section: Image Side with Simple Header */}
        <div className="relative overflow-hidden bg-white dark:text-gray-100 dark:bg-gray-900">
      
  
          {/* Hero Content */}
          <div className="relative flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">

        {/*Image content  */}
          <div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
              <div className="relative mx-5 lg:w-96">
                <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-200 rounded-full -mt-16 -ml-20 dark:border-blue-900" />
                <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-100 rounded-full -mt-20 -ml-14 dark:border-blue-950" />
                <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-200 rounded-full -mb-16 -mr-20 dark:border-blue-900" />
                <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-100 rounded-full -mb-20 -mr-14 dark:border-blue-950" />
                <div className="absolute inset-0 rounded-xl -m-6 -rotate-2 bg-gray-200 dark:bg-gray-800" />
                <div className="absolute inset-0 rounded-xl -m-6 rotate-1 bg-blue-800 bg-opacity-75 shadow-inner dark:bg-blue-900 dark:bg-opacity-75" />
                <Image src={Profile} className="relative  rounded-full mx-auto shadow-lg" alt="Hero Image" />
              </div>

              {/* End of Image content */}
            </div>
            <div className="lg:w-1/2 lg:flex lg:items-center">
              <div>
                <div className="text-sm rounded text-gray-800 bg-gray-100 border border-gray-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 dark:text-gray-200 dark:bg-gray-700/50 dark:border-gray-600/50">
                  Software Developer
                </div>
                <h1 className="text-4xl font-black text-black mb-4 dark:text-white">
                  Yash Sharma, <span className="text-blue-600 dark:text-blue-500">Software Developer</span>
                </h1>
                <h2 className="text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300">
                  Hi, I'm Yash Sharma. I've experience in the areas of Javascript, Next.js , HTML, CSS and React js also have good understanding of business requirements and it's feasibility to the existing systems.  Also delivered the projects within the stipulated time frame by deploying React js project.
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
                  
                  <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                    <span>Projects</span>
                  </a>
                </div>
              </div>
            </div>
          
          </div>
          {/* END Hero Content */}
        </div>
        {/* END Hero Section: Image Side with Simple Header */}
      </>
    )
  }