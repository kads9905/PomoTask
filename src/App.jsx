import React from 'react';
import Header from './components/Header';

const App = () => {
  return (
    <div className="h-screen bg-black p-8">

      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">

        {/* Left Side */}
        <div className="lg:col-span-8">

          <div className="border border-zinc-800 rounded-xl p-6">
            Main Content Area
          </div>

        </div>

        {/* Right Side */}
        <div className="lg:col-span-4">

          <div className="border border-zinc-800 rounded-xl p-6">
            Sidebar Area
          </div>

        </div>

      </div>

    </div>
  )
}

export default App