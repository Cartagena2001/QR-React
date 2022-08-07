import React from 'react'

const Download = ({qrCode, qrText}) => {
  return (
    <div className='mt-10'>
        <a className='bg-white p-3 rounded font-bold m-5 border ease-out duration-300 border-black hover:bg-black hover:text-white hover:border hover:border-white' href={qrCode} download={`${qrText}.png`}>Download</a> 
    </div>
  )
}

export default Download