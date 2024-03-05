import React from 'react'
import { Button } from "@/components/ui/button"


const page = () => {
  return (
    <div className="bg-blue-500 text-red-500">
        <h1>Global</h1>
        <button className="text-green-500 bg-black p-4 rounded-2xl">Click me</button>
        <Button variant={'destructive'} className='bg-yellow-500'>Button</Button>

    </div>
  )
}

export default page