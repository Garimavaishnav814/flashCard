import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate=useNavigate();
    const [allQuestion, setAllQuestion] = useState([]);
    const [submitButton, setSubmitButton] = useState(true);
    const [indexhold, setIndexhold] = useState(null);
    const [inputQuestion, setInputQuestion] = useState({
        ques: " ",
    }
    );
    const handleQuestion = (e) => {
        console.log(inputTask, "event")
        setInputQuestion({
            ...inputQuestion,
            [e.target.name]: e.target.value
        })

    }
    console.log("data entry", allQuestion)
    const handleNewTask = async () => {
        try {
            console.log(indexhold, allQuestion, "allQuestion 21")
            const token = localStorage.getItem("Token")
            const bearerToken = `Bearer ${token}`
            if (indexhold) {
                const updateTaskData = await fetch(`http://localhost:5000/api/v1/${indexhold}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application.json',
                        'Content-Type': 'application/json',
                        "Authorization": bearerToken
                    },
                    body: JSON.stringify(allQuestion)
                })
                await getData();
                setSubmitButton(true)
                setIndexhold();
                //   setInputTask();
                // const newData = allQuestion.map((value, index) => {
                //     if (indexhold === index) {
                //         return inputTask
                //     }
                //     return value;
                // })
                // setAllQuestion(newData)
            }
            else {
                const token = localStorage.getItem("Token")
                const bearerToken = `Bearer ${token}`
                const saveTakeData = await fetch('http://localhost:5000/api/v1/', {
                    method: 'POST',
                    headers: {
                        Accept: 'application.json',
                        'Content-Type': 'application/json',
                        "Authorization": bearerToken
                    },
                    body: JSON.stringify(allQuestion)
                })
                await getData();
                // setAllQuestion([...allQuestion, inputTask]);
                console.log(saveTakeData, "saveData")
            }
            // console.log("data  submit")
            setInputQuestion({
                ques: " ",
            })
        } catch (error) {
            console.log(error)
        }

    }
    const taskUpdate = (updateValue) => {
        console.log(updateValue, "updatevalue")
        // const updt = allQuestion[updateValue]
        setInputQuestion({ task: updateValue.task })
        // console.log(updt)
        setIndexhold(updateValue._id)
        console.log(updateValue)
        setSubmitButton(false)

        // setTaskUpdt([...indexhold,updt])
    }
    console.log(inputQuestion, "updateTask")
    const taskDelete = async (itemindex) => {
        try {
            const token = localStorage.getItem("Token")
            const bearerToken = `Bearer ${token}`
            const saveTakeData = await fetch(`http://localhost:5000/api/v1/${itemindex}`, {
                method: 'DELETE',
                headers: { "Authorization": bearerToken }
            })
            await getData();
            // const dlt = allQuestion.filter((item, index) => index !== itemindex);
            // console.log(dlt)
            // setAllQuestion(dlt)
        } catch (error) {
            console.log(error)
        }

    }
    const getData = async () => {
        try {
            const token = localStorage.getItem("Token")
            const bearerToken = `Bearer ${token}`
            const response = await fetch('http://localhost:5000/api/v1/', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": bearerToken
                },
            });
            const taskData = await response.json();
            console.log(taskData, "taskData")
            setAllQuestion(taskData);

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const CheckUserAlreadyLoginOrNot=localStorage.getItem("Token")
        if(!CheckUserAlreadyLoginOrNot)
        {
            navigate("/")
        }
        else{
            getData();
        }
    }, []);
    console.log(inputQuestion, "inputQuestion")
    return (
        <>
            <div className="flex justify-center items-center flex-col bg-slate-800 relative "  >
                <img className="h-full w-full object-cover bg-cover bg-fixed  " 
                src="https://images.pexels.com/photos/6690930/pexels-photo-6690930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className=" absolute top-10 ">
                <h1 className="display-4 font-extrabold">Add your Quetion</h1>
                <div className="flex gap-x-4 my-4 ">
                    {
                        submitButton ? <button className=" text-white font-semibold rounded-lg bg-blue-700 p-2" type='button' name="Submit" onClick={handleNewTask} >Add</button> : <button className="text-blue-900 font-extrabold" type='button' name="Submit" onClick={handleNewTask} >Update</button>
                    }
                    <input className="bg-slate-600 text-gray-50  w-60 p-2 rounded-xl" type="ques" name="ques" value={inputQuestion.task} onChange={handleQuestion} placeholder="Write your new Question" />
                </div>
                <div className="addTask">
                    <table>
                        {allQuestion.length>0 && allQuestion.map((value, index) =>
                            <tr className="" id="data">
                                <td className="bg-slate-600 text-white font-semibold w-48" id="taskList" name="taskList" ><label for="taskList">{value.task}</label></td>
                                <td><button className="text-blue-900 font-bold mx-2" type="button" onClick={() => taskUpdate(value)}>Update</button><button className=" text-red-800 font-bold mx-2" type="button" onClick={() => taskDelete(value._id)}>Delete</button></td>
                            </tr>
                        )}
                    </table>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Dashboard;