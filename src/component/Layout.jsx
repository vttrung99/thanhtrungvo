import React, { useState } from 'react';
import axios from 'axios';

function Layout(props) {
  const [task, setTask] = useState('');
  const [day, setDay] = useState('');
  const [check, setCheck] = useState(false);

  const handleCreate = () => {
    const backgroundColor = check ? 'red' : 'white';
    props.setBackgroundColor(backgroundColor);
    props.setDay1(day);
    props.setTask1(task);

    axios
      .post('http://localhost:3000/posts', {
        title: task,
        author: day
      })
      .then(response => {
        setTask('');
        setDay('');
        console.log('Create successful');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="inputTask" className="form-label">
          Task
        </label>
        
          <tbody>
            <tr>
              <td className="d-flex justify-content-center">
                <input
                  type="text"
                  className="form-control"
                  id="inputTask"
                  placeholder="Task"
                  value={task}
                  onChange={e => {
                    setTask(e.target.value);
                  }}
                  style={{ width: '100%', fontSize: '1.5rem' }} // Apply CSS width and font-size properties
                />
              </td>
            </tr>
            <tr>
              <td className="d-flex justify-content-center">
                <input
                  type="text"
                  className="form-control"
                  id="inputTask"
                  placeholder="Day & Time"
                  value={day}
                  onChange={e => {
                    setDay(e.target.value);
                  }}
                  style={{ width: '100%', fontSize: '1.5rem' }} // Apply CSS width and font-size properties
                />
              </td>
            </tr>
            <tr>
              <td className="d-flex justify-content-center">
                <span>Set Reminder</span>
                <input
                  type="checkbox"
                  id="inputTask"
                  onClick={() => {
                    setCheck(!check);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td className="d-flex justify-content-center">
                <button className="btn btn-primary" onClick={handleCreate}>
                  Add
                </button>
              </td>
            </tr>
          </tbody>
    
      </div>
    </div>
  );
}

export default Layout;
