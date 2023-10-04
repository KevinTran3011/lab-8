import { useEffect, useState } from 'react';
import List from './components/List';
import './App.css';

function App() {

    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        fetch('http://localhost/api/tasks')
        .then(response => response.json())
        .then(data =>setTasks(data))
        .catch((error)=> {console.log('Error while fetching data: ' + error)})
    }, [])

    return (
        <div className='page'>     
            <List heading='My Tasks' tasks={tasks} setTasks={setTasks}/>
        </div>
    );
}

export default App;
