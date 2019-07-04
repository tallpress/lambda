import React from 'react';

const Frequencies = (props) => {
    return (
        <ul>
            {props.data.map((result, index) => {
                return (<li key={index}>
                    {result.count}: {result.values.join(', ')}
                </li>
                )
            })}
        </ul>
    );
};

export default Frequencies
