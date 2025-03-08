import { useState } from 'react';

export default function Player({ name, symbol, isActive, onChangeName }) {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if(isEditing){
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  let editedPlayerName = isEditing ? <input type="text" onChange={handleChange} required value={playerName} />
    : <span className="player-name">{playerName}</span>

  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {editedPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick} > {isEditing ? 'Save' : 'Edit'} </button>
    </li>
  );
}
