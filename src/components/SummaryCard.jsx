import React from 'react'

const SummaryCard = ({ completedTasks, totalTasks }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 min-h-44 flex justify-between items-center">

      {/* Left Side */}
      <div>
        <h1 className="text-5xl font-bold text-white">
          Todo Done
        </h1>

        <p className="text-zinc-400 text-xl mt-4">
          Keep it up
        </p>
      </div>

      {/* Right Side Circle */}
      <div className="w-40 h-40 rounded-full bg-orange-500 flex flex-col items-center justify-center shrink-0">

        <h2 className="text-4xl font-bold text-black">
          {completedTasks}/{totalTasks}
        </h2>

        <p className="text-black text-lg">
          Tasks Done
        </p>

      </div>

    </div>
  )
}

export default SummaryCard