import './style.css';
import { useEffect, useState } from 'react';
import { Joke } from './components/Joke';


export const HomePage = () => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();
      setJokes(data.result);
      console.log(data.result)
    };

    fetchData();
  }, []);

  return (
    <div className="container">
    <div className="joke">
        {jokes.map((joke) => (
          <Joke
            key={joke.id}
            id={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        ))}
      </div>
  </div>
  );
};
