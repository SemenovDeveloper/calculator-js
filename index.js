class App extends React.Component {
  constructor(props) {
    super(props); {
      this.state = {
        result: "",
        currentValue: "",
        perviousValue: "",
        formula: "",
      }
    }
  }

  pressNumberBtn() {
    this.setState()
  }

  render() {
    return (
      <div id="container">
        <h1>Calculator</h1>
        <div id="display">
          {this.state.result}
          <br/>
          {this.state.currentValue}
        </div>
        <Buttons />
        <div id="footer">footer</div>                
      </div>
    )
  }
};

function Buttons (props) {
    return (
      <div id="buttons">
        <div className="btn">C</div>
        <div className="btn">DEL</div>
        <div className="btn">+/-</div>
        <div className="btn">+</div>
        <div className="btn">1</div>
        <div className="btn">2</div>
        <div className="btn">3</div>
        <div className="btn">-</div>
        <div className="btn">4</div>
        <div className="btn">5</div>
        <div className="btn">6</div>
        <div className="btn">*</div>
        <div className="btn">7</div>
        <div className="btn">8</div>
        <div className="btn">9</div>
        <div className="btn">/</div>
        <div className="btn col-2">0</div>
        <div className="btn">.</div>
        <div className="btn">=</div>
      </div>          
    )
}




ReactDOM.render(<App />, document.getElementById("root"))