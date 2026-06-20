import React from 'react'

const SummaryCard = ({ completedTasks, totalTasks }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

      <h2 className="text-white text-xl font-semibold">
        {completedTasks} / {totalTasks} Tasks Done
      </h2>

      <p className="text-zinc-400 mt-2">
        Start adding tasks to stay productive.
      </p>

    </div>
  )
}

export default SummaryCard