import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    const {count} = this.state
    if (count > 100) {
      this.setState(() => ({count: 0}))
    } else {
      const randomNum = Math.ceil(Math.random() * 100)
      this.setState(prevState => ({count: prevState.count + randomNum}))
    }
  }

  render() {
    const {count} = this.state
    let text
    if (count % 2 === 0) {
      text = 'Count is Even'
    } else {
      text = 'Count is Odd'
    }
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          <p className="para">{text}</p>
          <button onClick={this.increment} className="btn">
            Increment
          </button>
          <p className="descripiton">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
