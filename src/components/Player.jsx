import {useState} from 'react';

export default function Player({ name, symbol }) {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick(){
    setIsEditing(editing =>!isEditing);
  }

  function handleChange(event){
    setPlayerName(event.target.value)
  }

  let editedPlayerName = isEditing ? <input type="text" onChange={handleChange} required value={playerName}/>
    : <span className="player-name">{playerName}</span> 

  return (
    <li>
      <span className="player">
        {editedPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick} > {isEditing ? 'Save' : 'Edit'} </button>
    </li>
  );
}
