import React from 'react';


class ClassCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
          <p>Ви натиснули {this.state.count} разів</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Плюс
          </button>
          <div>
          
          <button onClick={() => this.setState({ count: this.state.count - 1 })}>
            Мінус
          </button>
        </div>
        </div>
        
      );
    }
  }
  export default ClassCounter;