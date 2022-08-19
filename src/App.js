// create your App component here
import React, {Component} from 'react';

class App extends Component {

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then((response) => response.json())
        .then((data) => console.log(data.people))
    }

    render(){
        return <h1>Hi</h1>
    }

}

export default App;