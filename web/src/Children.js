 import React, { Component , PropTypes} from 'react';


 class Children extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          children: []
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({children: newProps.children })
        console.log(newProps.children);
    }
    
    render() {
        return (
        <div className="Children">
            {
            this.state.children.map( (child, index) =>  
                <div key={index}>
                <h1>  {child.name}  </h1>
                  <Children children={child.children}></Children>
                </div>
             ) 
            } 
        </div>
        );
    }
}

export default Children
    