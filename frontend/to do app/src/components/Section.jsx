import React from 'react'
import Appname from './Appname'
import Input from './Input'
import Todoitem from './Todoitem'

const Section = () => {
  return (
    <div class="min-h-screen flex items-center justify-center">
    <div class="bg-gray-300 w-[70%] rounded-lg">
      <Appname/>
      <Input/>
      <Todoitem event="go to college" date="11/12/2024"/>
      <Todoitem event="go to home" date="11/1/2024"/>
    </div>
  </div>
 )
}

export default Section
