import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props){
        super(props);

        // this is the ONLY TIME we do direct assignment
        // to this.state
        this.state = { lat: null };

        // window.navigator.geolocation.getCurrentPosition(
        //     (position) => console.log(position), //success callback
        //     (err) => console.log(err) //failure callback
        // );

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude});
            }, //success callback
            (err) => console.log(err) //failure callback
        );
    }


    // React says we have to define render!!
    render() {
    
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);