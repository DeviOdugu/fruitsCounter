// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onClickEatMango = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="s"> {mangoCount} </span> mangoes
            <span className="s"> {bananaCount} </span> bananas
          </h1>
          <div className="a">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                height="200px"
                width="200px"
                className="image"
              />
              <br />
              <button
                type="button"
                className="eat-button"
                onClick={this.onClickEatMango}
              >
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                height="200px"
                width="200px"
                className="image"
              />
              <br />
              <button
                type="button"
                className="eat-button"
                onClick={this.onClickEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
