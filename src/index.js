import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props){
        super(props);

        // this is the ONLY TIME we do direct assignment
        // to this.state
        this.state = { lat: null, errorMessage: '' };
    }


    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude});
            }, //success callback
            (err) => {
                this.setState({ errorMessage: err.message});
            }
        );
        console.log("My component was rendered to the screen");
    }

    componentDidUpdate(){
        console.log("My component was just updated - it rerendered.");
    }

    // React says we have to define render!!
    render() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage} </div> 
        }
        if (!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat} </div>
        }
        return <div>Getting your location..</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);