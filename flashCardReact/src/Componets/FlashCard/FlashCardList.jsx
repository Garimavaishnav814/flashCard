import React, { useState } from 'react'
import FlashCard from './FlashCard'

export default function FlashCardList({ flashCard }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : flashCard.length - 1));
    setIsFlipped(false); // Flip the card back when changing cards
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < flashCard.length - 1 ? prevIndex + 1 : 0));
    setIsFlipped(false); // Flip the card back when changing cards
  };

  const handleCardClick = () => {
    setIsFlipped((prevFlipped) => !prevFlipped);
  };
  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-gray-600'>
        <div>
          <FlashCard
            flash={flashCard[currentIndex]}
            isCurrent={true}
            isFlipped={isFlipped}
            onClick={handleCardClick}
          />
          <div className='flex gap-4 mt-4 justify-center'>
            <button
              className='bg-blue-600 p-2 rounded-xl text-white'
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className='bg-blue-600 p-2 rounded-xl text-white'
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {/* <div className='text-white gap-4 flex'>
        {flashCard.map(flash => {
          return <FlashCard flash={flash} key={flash.id} />
        })}
      </div> */}
    </>

  )
}
