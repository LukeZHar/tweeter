import { useState } from "react"

import Posts from 
import CreatePost from

const HomePage = () => {
  const [feedType, setFeedType] = useState("forYou")

  return (
    <>
      <div className="flex-[4_4_0] mr-auto border-r border-gray-700 min-h-screen">
        {/* Header */}
        <div className="flex-w-full border-b border-gray-700">
          <div className="flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"></div>
        </div>
      </div>
    </>
  )
}

export default HomePage