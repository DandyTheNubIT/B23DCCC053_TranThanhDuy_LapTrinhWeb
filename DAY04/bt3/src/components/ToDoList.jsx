import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import { PlusCircleOutlined, CalendarOutlined } from '@ant-design/icons';
const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [dueDate, setDueDate] = useState('');

    const addTask = () => {
        if (newTask && dueDate) {
            const task = {
                id: tasks.length + 1,
                title: newTask,
                dueDate: dueDate,
            };
            setTasks([...tasks, task]);
            setNewTask('');
            setDueDate('');
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (id) => {
        const taskToEdit = tasks.find(task => task.id === id);
        if (taskToEdit) {
            setNewTask(taskToEdit.title);
            setDueDate(taskToEdit.dueDate);
            deleteTask(id);
        }
    };

    return (
        <div className="ToDoList" style={{ marginLeft: '10px' }}>
            <h1>My work 🎯</h1>
            <div>
                {tasks.map(task => (
                    <ToDoItem
                        key={task.id}
                        title={task.title}
                        dueDate={task.dueDate}
                        onDelete={() => deleteTask(task.id)}
                        onEdit={() => editTask(task.id)}
                    />
                ))}
            </div>
            <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter your task"
                    style={{ marginRight: '10px' }}
                />
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                    <CalendarOutlined style={{ fontSize: '20px', marginRight: '5px' }} />
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <PlusCircleOutlined
                    style={{ fontSize: '20px', color: '#d1453b', cursor: 'pointer' }}
                    onClick={addTask}
                />
                <span style={{ marginLeft: '5px' }}>Add Task</span>
            </div>
        </div>
    );
};

export default ToDoList;
