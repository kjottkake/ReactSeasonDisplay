import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = {lat: null, errorMessage: ''};

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

    renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage} </div> 
        }
        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat = {this.state.lat}/> //we are getting a property from a state and passing it as a prop.
        }
        return <Spinner message="Please Accept Location Request."/>;
    }

    //Refactored logical statements into renderContent() then calls on function in render.
    render() {
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);