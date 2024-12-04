import './css/todo.css';
import img from "./todo.png"
import { useState } from 'react';
export default function MyTaskApp() {
    const [task, setTask] = useState("")
    const [todo, setTodo] = useState([])
    const [edit, setEdit] = useState(-1)

    function addtask() {
        if (!task) {
            return alert("Enter Data To Continue")
        }
        if (edit === -1) {
            setTodo([...todo, task]);
        } else {
            const editask = [...todo]
            editask[edit] = task
            setTodo(editask)
            setEdit(-1)

        }
        setTask("")
    }
    function edittask(index) {

        setEdit(index)
        setTask(todo[index])
    }
    function deletetask(index) {
        const deletelement = [...todo]
        deletelement.splice(index, 1)
        setTodo(deletelement)
    }


    return (
        <>
            <div className='maindiv'>
                <div className="childdiv1">
                    {/* <img src={require("./todo.png")} alt="" /> */}
                    <img src={img} alt="" className='todoimg' />
                    <h1 style={{ fontFamily: 'Arial Narrow Bold, sans-serif', position: 'absolute', left: 600, top: 10 }}>OneTime Task Store Website</h1>
                </div>
                <div className="childdiv2">
                    <input onChange={(t) => setTask(t.target.value)} value={task} type="text" placeholder='Add Task' className='inputfield' />
                    <button onClick={addtask} className='btn'>
                        {
                            edit === -1 ? "Add Task" : "Update"
                        }
                    </button>
                    {
                        todo.length > 0 ? 
                            <div className="childdiv3">
                                <table>
                                    <tbody>
                                        <ol>
                                            {
                                                todo.map((task, index) => (
                                                    <li key={index} style={{ paddingBottom: 10 }}>
                                                        <div className="childdiv4">
                                                            {task} &nbsp;&nbsp;&nbsp;&nbsp;
                                                            <div className="buttondiv">
                                                                <button onClick={() => edittask(index)} className="editbtn">Edit</button>
                                                                <button onClick={() => deletetask(index)} className="deletebtn">Delete</button>
                                                                &nbsp;&nbsp;
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                        </ol>
                                    </tbody>
                                </table>
                            </div>
                            : ''
                    }



                </div>
            </div>
        </>
    )
}