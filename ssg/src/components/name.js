import React, {useState} from 'react';
import Basic from './formulario';

const Name = () => {
    const [name, setName] = useState('Raphael');

    return(
        <div>
            <h1>{name}</h1>
            <Basic />
        </div>
        )
}

export default Name;