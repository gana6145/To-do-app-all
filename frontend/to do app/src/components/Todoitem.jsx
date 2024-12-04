import React from 'react'
import Button from './Button'

const Todoitem = ({event,date}) => {
  return (
    <div>
      <div class="m-5 flex  justify-center">
      <div class="bg-gray-100 p-8 rounded-lg shadow-lg">
      <div class="flex space-x-4">
      
      <div class="flex-1">
        {event}
      </div>

     
      <div class="flex-1">
        {date}
      </div>

      
      <div class="flex-1">
        <Button/>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Todoitem
