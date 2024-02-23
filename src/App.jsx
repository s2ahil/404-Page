import img from "./images/background.png"
import Arrow from "../public/svg/hand-drawn-arrow.svg"
import { useState } from "react";


function App() {
  const [showArray, setShowArray] = useState(false);
  const answers = [{
    error: 'There\'s a dead link. ',
  },
  {
    error: 'A typo in a URL or that it’s broken. ',
  },
  {
    error: 'Server is down. ',
  },
  {
    error: 'you are offline. ',
  }
  ]

  return (
    <>
      <div className='flex flex-col h-[100vh] justify-center items-center '>

        {/* <div className='flex gap-4 flex-col w-full h-[100vh] items-center justify-center '> */}
        <div className="grid  

          p-4 ">
          <div className="flex gap-4 flex-col items-center justify-center">
            <div className='text-5xl' >
              4
              <span>0</span>
              4</div>

            <div className='text-5xl' >Page not found</div>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 h-[3px] my-2 bg-gray-200 border-0 dark:bg-gray-700" />

            </div>

            <button className="bg-[#FFC900] p-4 mt-4 border-[1px] border-black  rounded-xl font-bold" id="GoBackButton">Return Back  :)</button>
          </div>


        </div>




        {/* little desc of error */}
        <div className="flex flex-col  items-center  w-full p-4 h-[10rem]">
          <div className="cursor-pointer hover:text-blue-500 font-semibold" onClick={() => setShowArray(!showArray)}>Why this page ?</div>

          {showArray && (
            <div className="mt-4">
              <ul className="list-disc "  >
                {answers.map((answer, index) => (
                  <li className="m-2" key={index}>{answer.error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
