import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate=useNavigate();
    const [token, setToken] = useState('');
    const [questionData, setQuestionData] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswer, setNewAnswer] = useState('');
    const [isUpdateId, setIsUpdateId] = useState(null)

    useEffect(() => {
        const CheckUserAlreadyLoginOrNot = localStorage.getItem('token');
        setToken(CheckUserAlreadyLoginOrNot);
        if (!CheckUserAlreadyLoginOrNot) {
            navigate('/adminLogin');
        } else {
            getData();
        }
    }, []);

    const getData = () => {
      console.log(token,'token')
      const tokenData=localStorage.getItem("token")
        axios.get('http://localhost:5000/api/v1/question', {
            headers: {
                'Authorization': `Bearer ${tokenData}`
            }
        }).then((res) => {
          console.log(res,"res")
          if(res.data?.err){
            navigate('/adminLogin')
          }else{
            setQuestionData(res.data);
          }
           
        }).catch((e) => {
            console.log(e);
        });
    };

    const deleteHandle = (id) => {
        axios.delete(`http://localhost:5000/api/v1/question/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            getData();
        });
    };

    const handleAddUpdateQuestion = () => {
      if(isUpdateId){
        axios.put(`http://localhost:5000/api/v1/question/${isUpdateId}`, {
          question: newQuestion,
          answer: newAnswer
      }, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      }).then(() => {
          getData();
          closePopup();
          setIsUpdateId(null)
      }).catch((e) => {
          console.log(e);
      });
      }else{
        axios.post('http://localhost:5000/api/v1/question', {
            question: newQuestion,
            answer: newAnswer
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            getData();
            closePopup();
        }).catch((e) => {
            console.log(e);
        });}
    };

    const openPopup = () => {
        setIsPopupOpen(true);

    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setNewQuestion('');
        setNewAnswer('');
    };

    const isUpdatePopup=(item)=>{
      setIsPopupOpen(true)
      setNewQuestion(item.question)
      setNewAnswer(item.answer)
      setIsUpdateId(item._id)
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-4 rounded shadow">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold">Dashboard</h1>
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={openPopup}
                    >
                        + Add
                    </button>
                </div>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2 text-left">ID</th>
                            <th className="border px-4 py-2 text-left">Question</th>
                            <th className="border px-4 py-2 text-left">Answer</th>
                            <th className="border px-4 py-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questionData?.map((item, index) => (
                            <tr key={item.id}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{item.question}</td>
                                <td className="border px-4 py-2">{item.answer}</td>
                                <td className="border px-4 py-2 flex justify-around">
                                    <button onClick={()=>isUpdatePopup(item)}> 
                                        <i className="fa-solid fa-pen-to-square text-blue-600"></i>
                                    </button>
                                    <button type='button' onClick={() => deleteHandle(item._id)}>
                                        <i className="fa-solid fa-trash-can text-red-600"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Popup Form */}
                {isPopupOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
                        <div className="bg-white p-6 rounded shadow-md w-1/2">
                            <h2 className="text-lg font-bold mb-4">Add Question</h2>
                            <div className="mb-4 flex flex-col items-start">
                                <label className="block text-sm font-medium mb-2">Question</label>
                                <input
                                    type="text"
                                    value={newQuestion}
                                    onChange={(e) => setNewQuestion(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4 flex flex-col items-start">
                                <label className="block text-sm font-medium mb-2">Answer</label>
                                <input
                                    type="text"
                                    value={newAnswer}
                                    onChange={(e) => setNewAnswer(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                                    onClick={handleAddUpdateQuestion}
                                >
                                    Submit
                                </button>
                                <button
                                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                                    onClick={closePopup}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
