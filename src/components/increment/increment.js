import { Component } from "react";

export default class Increment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 42
    }
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }
  
  render() {

    const { count } = this.state

    return (
      <>
        <div>
          <h2>{count}</h2>
          <button onClick={this.increment} className="counter-button">Click</button>
        </div>
        <style>{`
          .counter-button {
            font-size: 1rem;
            padding: 5px 10px;
            color: #585858;
          }
        `}</style>
      </>
    )
  }
}