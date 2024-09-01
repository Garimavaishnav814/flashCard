import React from 'react'
import './FlashCard.css'


export default function FlashCard({ flash, isCurrent, isFlipped, onClick }) {
  // const [flip, setFlip] = useState(false)
  // const [card,setCard]= useState()

  return (
    <div className='relative w-full max-w-md mx-auto bg-gray-800 shadow-lg overflow-hidden'>
      <div
        className='p-6 bg-gradient-to-b from-white to-gray-400 cursor-pointer shadow-black'
        onClick={onClick}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className={`flex ${isCurrent && isFlipped ? 'justify-center' : 'justify-between '}`}>
          {!isFlipped ? (
            <div className='flex-grow flex flex-col justify-center items-start p-6 h-full bg-gray-400 rounded-xl backface-hidden'>
              <div className='text-xl font-semibold'>{flash.question}</div>
              {/* <div className='mt-4'>
                {flash.options.map((option, index) => (
                  <div key={index} className='py-1'>{option}</div>
                ))}
              </div> */}
            </div>
          ) : (
            <div className='text-center w-full h-full bg-gray-400 rounded-lg backface-hidden transform rotate-y-180 flex items-center justify-center'>{flash.answer}</div>
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