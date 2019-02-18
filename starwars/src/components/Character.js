import React from 'react';

const Character = props => {
    return (
        <div className="character-card-container">
            <div className="character-card">
                <h2 className="character-name">{props.character.name}</h2>
                <p>Birth Year: {props.character.birth_year}</p>
                <p>Eye Color: {props.character.eye_color}</p>
            </div>
        </div>
    );
};

export default Character;