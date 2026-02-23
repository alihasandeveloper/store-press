import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">StorePress Dashboard</h1>
          <p className="text-gray-600">Welcome to your plugin management area.</p>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Plugin Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <span className="block text-2xl font-bold text-blue-600">{count}</span>
              <span className="text-sm text-blue-800">Total Actions</span>
            </div>
          </div>
          
          <div className="mt-8">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-medium"
            >
              Increment Counter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

