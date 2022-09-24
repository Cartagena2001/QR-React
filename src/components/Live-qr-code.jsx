import React from 'react'
import QRCode from 'react-qr-code'

const Liveqrcode = ({value}) => {
  return (
    <div className='bg-[#387BF6] p-10 rounded-xl'>
      <QRCode value={value} bgColor={"#387BF6"} fgColor={"#FFF"}></QRCode>
    </div>
  )
}

export default Liveqrcode