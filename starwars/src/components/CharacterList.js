import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
    return(
        <div className="character-list">
            {props.starwarsChars.map(character => (
                <Character />
            ))}
        </div>        
    );
}

export default CharacterList;