import React from 'react';
import ReactDOM from 'react-dom';

// const App= () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err) 
//     );
//     return <div>Latitude: {}</div>
// };

class App extends React.Component {

    constructor(props) {
            super(props);
            // this is the only time we do direct assignment to this state
            this.state = {lat: null, errorMessage: ''};

            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    // We called setstate!!!!
                    this.setState({lat: position.coords.latitude});
                },
                err => {
                    this.setState({errorMessage: err.message})
                }
            );
    }
    // React says we have to define render !! this is by default required 
    render() {
        // return <div> Latitude: {this.state.lat} <br/>
        //              Error: {this.state.errorMessage} 
        //        </div>

        if(this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <div> Latitude: {this.state.lat} </div>
        }
         return <div> Loading........ </div>
       
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));