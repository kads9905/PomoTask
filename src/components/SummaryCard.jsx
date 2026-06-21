import React from 'react'

// calculate and displays the completed tasks out of total tasks
// Initially: 0/2 Tasks Done , Complete one: 1/2 Tasks Done ,
// Complete both: 2/2 Tasks Done, Delete one: 1/1 Tasks Done
// Add another: 1/2 Tasks Done
// Automatically updates because it's calculated from tasks.

// using state would be a bad approach as we would have to manually
// update it everywhere
const SummaryCard = ({ completedTasks, totalTasks }) => {
  return (
    <div className='bg-zinc-900 border border-zinc-800 rounded-3xl p-8 min-h-44 flex justify-between items-center'>
        
        {/* left side */}
        <div>
          <h1 className='text-5xl font-bold text-white'>
            Todo Done
          </h1>
          <p className='text-zinc-400 text-xl mt-4'>
            Keep it up
          </p>
        </div>

        {/* right side circle */}

        <div className='w-40 h-40 rounded-full bg-orange-500 flex flex-col items-center justify-center shrink-0 transition-all duration-300 hover:scale-105'>
          <h2 className='text-4xl font-bold text-black'>
            {completedTasks}/{totalTasks}
          </h2>
          
          <p className='text-black text-lg'>
            Tasks Done
          </p>

        </div>
    </div>
  )
}

export default SummaryCard