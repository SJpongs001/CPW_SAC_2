import React from 'react'
import Messages from './Messages'

export default function Message() {
  return(
    <div className='message owner'>
      <div className="messageInfo">
        <img className='Profileimg' src='https://inwfile.com/s-cn/tzez5z.jpg'
         width={50} height = {50} border-radius = "50%" />
        <span>Just now</span>
      </div>


      <div className="messageContent">
        <p className='TextChat'>Hello</p>
            <img className='Profileimg' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/273ab6bb-59fd-41db-b072-337d74e2b64e/ded2aim-10a8c653-54ec-4fbe-bf8a-c0e6ced89f5d.png/v1/fit/w_400,h_476/ultraman_taro_transparent_5_by_mainmonsterman_ded2aim-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDc2IiwicGF0aCI6IlwvZlwvMjczYWI2YmItNTlmZC00MWRiLWIwNzItMzM3ZDc0ZTJiNjRlXC9kZWQyYWltLTEwYThjNjUzLTU0ZWMtNGZiZS1iZjhhLWMwZTZjZWQ4OWY1ZC5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.nS8eV0o3g8_AYyJxj5iR_U0QnFnC1qPMYQjvsRCWBz8'
            alt='' /> 
     
      </div>
    </div>
  )
}

