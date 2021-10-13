import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position), //success callback
        (err) => console.log(err) //failure callback
    );

    return (
        <div>
            <div>Hi there!</div>
            <SeasonDisplay />
        </div>
    );

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);