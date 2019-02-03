import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Spinner from './Spinner';

// const App= () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err) 
//     );
//     return <div>Latitude: {}</div>
// };

class App extends React.Component {

    // constructor(props) {
    //         super(props);
    //         // this is the only time we do direct assignment to this state
    //         this.state = {lat: null, errorMessage: ''};
    // }

    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
             // We called setstate!!!!
            position=> this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    renderContent() {
            // return <div> Latitude: {this.state.lat} <br/>
            //         Error: {this.state.errorMessage} 
            //        </div>

        if(this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat= {this.state.lat}></SeasonDisplay>
        }
         return <Spinner message= "Please accept location request"></Spinner>
    }
    // React says we have to define render !! this is by default required 
    render() {
       
       return (
           <div className="border red">{this.renderContent()}</div>
       )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));