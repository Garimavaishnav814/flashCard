import './App.css'
import { useState } from 'react'
import FlashCardList from './Componets/FlashCard/FlashCardList'
function App() {
  return (
    <>
    <FlashCardList/>
    </>
  )
}


// const CARD_QUESTIONS=[
//   {
//     id:1,
//     question:'what type variable in JavaScript ?',
//     answer:3,
//     options:[1,2,3,4]
//   },
//   {
//     id:2,
//     question:'what is NAN in JavaScript ?',
//     answer:'not legal Number',
//     options:['valid number','undifine Number','not legal number ']
//   },  {
//     id:3,
//     question:'what is java languge ?',
//     answer:'java is oops language',
//     options:['scripting language', 'java is oops language']
//   }
// ]

export default App
