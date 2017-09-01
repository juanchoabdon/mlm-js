import React, { Component , PropTypes} from 'react';
import  Children from './Children';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      network: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/users")
    .then( (response) => {
        return response.json() })   
            .then( (json) => {
                this.setState({network: json});
            }
          )
   }
            

  render() {
    return (
      <div className="App">
         <h1> {this.state.network.name}</h1>
         <Children  children={this.state.network.children}></Children>
      </div>
    );
  }
}
