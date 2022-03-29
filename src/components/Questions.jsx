import React, { useState } from 'react';

import arrowDown from '../images/icon-arrow-down.svg';


export function Questions(props) {
    const [showResponse, setShowResponse] = useState(false);

    return(
        <>
            <div className='questions'>
                    <div className='question'>
                        {showResponse ? 
                            <p onClick={setShowResponse(!showResponse)} className={`${showResponse ? 'questionResponse' : ''}`}>{props.question}</p>
                        :
                            ''
                        }

                        {showResponse ? 
                            <img onClick={() => setShowResponse(!showResponse)} className='arrowUp' src={arrowDown} alt="Ícone de uma seta para cima"/>
                        :
                            <img  onClick={() => setShowResponse(!showResponse)} src={arrowDown} alt="Ícone de uma seta para baixo"/>
                        }
                    </div>

                    {showResponse ? 
                        <p className='response'>{props.response}</p>
                    :
                        ''
                    }
            </div>
            
            <div className='separator'></div>
       </>
    );
}