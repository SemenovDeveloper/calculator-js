class App extends React.Component {
  constructor(props) {
    super(props); {
      this.state = {
        result: "1",
        currentValue: "0",
        perviousValue: "2",
      }
      this.numberBtn=this.numberBtn.bind(this);
      this.clearInput=this.clearInput.bind(this);
      this.deleteNumber=this.deleteNumber.bind(this);
      this.plusMinus=this.plusMinus.bind(this);
    }
  }

  plusMinus() {   
    const input = this.state.currentValue; 
    if(input.startsWith("-")){
      this.setState({
        currentValue: input.slice(1, input.length)
      })
    } else {
      this.setState({
        currentValue: "-" + input
      })
    }
  }

  numberBtn(e) {
    const value = e.target.value;
    this.setState({
      currentValue: this.state.currentValue + value,
    });
  }

  deleteNumber() {
    const input = this.state.currentValue
    this.setState({
      currentValue: input.slice(0, input.length-1)
    })
  }
  
  clearInput() {
    this.setState({
      currentValue: "0"
    });
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
        <Buttons
          numberBtn={this.numberBtn}
          clearInput={this.clearInput}
          deleteNumber={this.deleteNumber}
          plusMinus={this.plusMinus}   
        />
        <div id="footer">footer</div>                
      </div>
    )
  }
};

function Buttons (props) {
    return (
      <div id="buttons">
        <button id="clear" onClick={props.clearInput}>C</button>
        <button id="del" onClick={props.deleteNumber}>DEL</button>
        <button id="plus-minus" onClick={props.plusMinus}>+/-</button>
        <button id="plus" onClick={props.numberBtn} value="+">+</button>
        <button id="one" onClick={props.numberBtn} value="1">1</button>
        <button id="two" onClick={props.numberBtn} value="2">2</button>
        <button id="three" onClick={props.numberBtn} value="3">3</button>
        <button id="minus" onClick={props.numberBtn} value="-">-</button>
        <button id="four" onClick={props.numberBtn} value="4">4</button>
        <button id="five" onClick={props.numberBtn} value="5">5</button>
        <button id="six" onClick={props.numberBtn} value="6">6</button>
        <button id="multiply" onClick={props.numberBtn} value="*">*</button>
        <button id="seven" onClick={props.numberBtn} value="7">7</button>
        <button id="eight" onClick={props.numberBtn} value="8">8</button>
        <button id="nine" onClick={props.pnumberBtn} value="9">9</button>
        <button id="divide" onClick={props.numberBtn} value="/">/</button>
        <button id="zero" className="col-2"onClick={props.numberBtn} value="0">0</button>
        <button id="dot" onClick={props.numberBtn} value=".">.</button>
        <button id="equal" onClick={props.numberBtn} value="=">=</button>
      </div>          
    )
}




ReactDOM.render(<App />, document.getElementById("root"))