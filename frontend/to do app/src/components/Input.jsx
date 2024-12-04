import React from 'react'

const Input = () => {
  return (
    <div>
      <div class="m-5 flex  justify-center">
      <div class="bg-gray-100 p-8 rounded-lg shadow-lg">
      <div class="flex space-x-4">
      
      <div class="flex-1">
        <input type="text" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter text"/>
      </div>

     
      <div class="flex-1">
        <input type="date" class="w-full p-2 border border-gray-300 rounded-lg"/>
      </div>

      
      <div class="flex-1">
        <button class="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Add
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Input
