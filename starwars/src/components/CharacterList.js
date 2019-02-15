import React from 'react';

import Character from './Character';

const CharacterList = props => {
    return(
        {props.starwarsChars.map( character => (
            <Character key={character.edited} character={character}/>
        ))}
    );
}

export default CharacterList;