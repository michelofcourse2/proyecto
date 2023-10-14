import React from 'react'

const Error = ({children}) => {
  return (
    <div className="p-2">

    <p className=" p-3 m-3 shadow-md text-white uppercase rounded-md text-center font-bold bg-red-800">{children}</p>
    
     </div>
  )
}

export default Error
