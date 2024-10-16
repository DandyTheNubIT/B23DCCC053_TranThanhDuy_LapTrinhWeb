import React, {useState} from "react";
import './Todoapp.css'
const TodoApp = () => {
    const [tasks, setTasks] = useState([]);

    const [newTask, setNewTask] = useState('');
    const [newTaskDate, setNewTaskDate] = useState('')

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const mm = String(date.getMonth()+1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const yy = String(date.getFullYear()).slice(-2);
        return `${mm}/${dd}/${yy}`;
    }

    const getTaskDateColor = (dateString) => {
        const today = new Date();
        const taskDate = new Date(dateString);
        const diffTime = taskDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Chuyển đổi khoảng cách thời gian thành ngày

        if (diffDays === 0) {
            return 'green';
        } else if (diffDays === 1 || diffDays === 2) {
            return 'orange';
        } else {
            return 'purple';
        }
    }

    const addTask = () => {
        if(newTask.trim() !== '' && newTaskDate) {
            const newTaskItem = {
                id: tasks.length + 1,
                text: newTask,
                date: newTaskDate,
                status: 'Todo'
            };
            setTasks([...tasks, newTaskItem]);
            setNewTask('');
            setNewTaskDate('');
        }
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks)
    };

    const markAsDone = (taskId) => {
        const updatedTasks = tasks.map((task) => 
        task.id === taskId
            ? {...task, status: task.status === 'Todo' ? 'Done' : 'Todo'}
            : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-container">
            <h2 className="title">My work<span className="icon">🎯</span></h2>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} className={`task-item ${task.status.toLowerCase()}`}>
                        <label className="task-label">
                            <input
                                type="checkbox"
                                className="task-checkbox"
                                checked={task.status === 'Done'}
                                onChange={() => markAsDone(task.id)}
                            />
                            <span className="custom-checkbox"></span>
                            <div className="task-info">
                                <span className="task-text">{task.text}</span>
                                <span 
                                    className="task-date"
                                    style={{ color: getTaskDateColor(task.date) }}
                                >
                                    {formatDate(task.date)}
                                </span>
                            </div>
                        </label>
                        <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div className="add-task">
                <button className="add-button" onClick={addTask}>+</button>
                <input
                    className="add-task"
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add task"
                />
                <input
                    type="date"
                    className="task-date"
                    value={newTaskDate}
                    onChange={(e) => setNewTaskDate(e.target.value)}
                />
            </div>
        </div>
    )
}

export default TodoApp;