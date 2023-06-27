import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Layout from './component/Layout';
import Body from './component/Body';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [posts, setPosts] = useState([]);
  const [day1, setDay1] = useState('');
  const [task1, setTask1] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3000/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [posts]);

  const handlePostCreated = newPost => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <div className="app-container">
        <table className="table">
          <Layout
            setBackgroundColor={setBackgroundColor}
            setDay1={setDay1}
            setTask1={setTask1}
            onPostCreated={handlePostCreated}
            task1={task1}
            day1={day1}
          />
          <Body task1={task1} day1={day1} backgroundColor={backgroundColor} />
        </table>
      </div>
    </div>
  );
}

export default App;





