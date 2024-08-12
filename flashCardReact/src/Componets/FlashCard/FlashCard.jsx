import React, { useState } from 'react'

export default function FlashCard({ flash, isCurrent, isFlipped, onClick }) {
  // const [flip, setFlip] = useState(false)
  // const [card,setCard]= useState()

  return (
    <div className='relative w-full max-w-md mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden'>
      <div
        className='p-6 bg-purple-600 text-white cursor-pointer'
        onClick={onClick}
      >
        <div className={`flex ${isCurrent && isFlipped ? 'justify-center' : 'justify-between'}`}>
          {!isFlipped ? (
            <div className='flex-grow'>
              <div className='text-xl font-semibold'>{flash.question}</div>
              <div className='mt-4'>
                {flash.options.map((option, index) => (
                  <div key={index} className='py-1'>{option}</div>
                ))}
              </div>
            </div>
          ) : (
            <div className='text-center'>{flash.answer}</div>
          )}
        </div>
      </div>
    </div>
    // <div className='bg-gray-500 rounded-xl'>
    // <div className='p-4 bg-purple-500 w-auto h-auto rounded-xl'
    //  onClick={()=>setFlip(!flip)}>
    //     {flip ? <div>{flash.answer}</div> :  
    //     <div className='left-0 items-start'>{flash.question}
    //     <div>
    //       {flash.options.map(option=>{
    //         return <div>{option}</div>
    //       })}
    //     </div>
    //     </div>}    
    // </div>
    // <div className='flex gap-2 h-auto w-auto'>
    // <button className='bg-blue-600 p-2 rounded-xl mx-1'>Previous</button>
    // <button className='bg-blue-600 p-2 rounded-xl my-1'>Next</button>
    // </div>
    // </div>
  )
}
