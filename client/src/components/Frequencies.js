import React from 'react';

const Frequencies = (props) => {
    return (
        <ul>
            {Object.keys(props.data).map(function (key, index) {
                return <li key={index}>
                    <b>Frequency {key}</b>
                    <p>values: {props.data[key].join(', ')}</p>
                </li>;
            })}
        </ul>
    );
};

export default Frequencies
