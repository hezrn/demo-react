import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import PollOption from './PollOption';

function App() {
  const [pets, setPets] = useState([
    { option: 'Dog', count: 0 },
    { option: 'Cat', count: 0 },
    { option: 'Rat', count: 0 },
  ]);

  const handleVote = (index) => {
    const updatedPets = [...pets];
    updatedPets[index].count += 1;
    setPets(updatedPets);
  };

  const getLeader = () => {
    const maxVotes = Math.max(...pets.map(p => p.count));
    const leaders = pets.filter(p => p.count === maxVotes);
    if (maxVotes === 0) return 'No votes yet';
    return leaders.map(l => `${l.option} (${l.count})`).join(', ');
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vote for the Best Pet!</h1>
      <div className="poll-container">
        {pets.map((pet, index) => (
          <PollOption
            key={pet.option}
            label={pet.option}
            count={pet.count}
            onVote={() => handleVote(index)}
          />
        ))}
      </div>
      <h2>Current Leader: {getLeader()}</h2>
    </>
  );
}

export default App;
