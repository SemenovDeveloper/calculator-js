const initialState = {
  result: "0",
  currentValue: "0",
  perviousValue: "0",
};

const isOperator = /[*/+‑]/;
const endsWithOperator = /[*/+‑]$/;

class App extends React.Component {
  constructor(props) {
    super(props); {
      this.state = initialState;
      this.numbers=this.numbers.bind(this);
      this.clearInput=this.clearInput.bind(this);
      this.deleteNumber=this.deleteNumber.bind(this);
      this.minusPrefix=this.minusPrefix.bind(this);
      this.operators=this.operators.bind(this);
      this.equal=this.equal.bind(this);
      this.decimals=this.decimals.bind(this);
    }
  };

  numbers(e) {
    const input = this.state.currentValue;
    const value = e.target.value;
    if(input.startsWith("0") && !input.startsWith("0.")){
      this.setState({
        currentValue: value,
      });
    } else {
      this.setState({
        currentValue: input + value,
      })
    }
  }

  decimals() {
    const input = this.state.currentValue;
    const dot = "."
    if(!input.includes(dot)){
      this.setState({
        currentValue: input + dot
      })
    }

  }

  minusPrefix() {   
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

  deleteNumber() {
    const input = this.state.currentValue
    this.setState({
      currentValue: input.slice(0, input.length-1)
    })
  }
  
  clearInput() {
    this.setState(initialState);
  }  

  operators(e) {
    const input = this.state.currentValue;
    const operator = e.target.value;
    if(!endsWithOperator.test(input)){
      this.setState({
        perviousValue: input + operator,
        currentValue: "0"
      })
    } else {
      this.setState({
        perviousValue: input.replace(isOperator, operator),
      })
    }

  }

  equal() {
    this.setState({
      perviousValue: eval(this.state.perviousValue + this.state.currentValue)
    })
  }

  render() {
    return (
      <div id="container">
        <h1>Calculator</h1>
        <div id="display">
          {this.state.perviousValue}
          <br/>
          {this.state.currentValue}
        </div>
        <Buttons
          numbers={this.numbers}
          clearInput={this.clearInput}
          deleteNumber={this.deleteNumber}
          minusPrefix={this.minusPrefix}
          operators={this.operators}
          equal={this.equal}
          decimals={this.decimals}
        />
        <div id="footer">footer</div>                
      </div>
    )
  }
};

function Buttons (props) {
    return (
      <div id="buttons">
        <button 
          id="clear" 
          onClick={props.clearInput}
        >
          C
        </button>
        <button 
          id="del" 
          onClick={props.deleteNumber}
        >
          DEL
        </button>
        <button 
          id="minus-prefix" 
          onClick={props.minusPrefix}
        >
          +/-
        </button>
        <button 
          id="plus"
          onClick={props.operators} 
          value="+"
        >
          +
        </button>
        <button 
          id="one" 
          onClick={props.numbers} 
          value="1"
        >
          1
        </button>
        <button 
          id="two" 
          onClick={props.numbers} 
          value="2"
        >
          2
        </button>
        <button 
          id="three" 
          onClick={props.numbers} 
          value="3"
        >
          3
        </button>
        <button 
          id="minus" 
          onClick={props.operators} 
          value="-"
        >
          -
        </button>
        <button 
          id="four" 
          onClick={props.numbers} 
          value="4"
        >
          4
        </button>
          <button 
          id="five" 
          onClick={props.numbers} 
          value="5"
        >
          5
        </button>
        <button 
          id="six" 
          onClick={props.numbers} 
          value="6"
        >
          6
        </button>
        <button 
          id="multiply" 
          onClick={props.operators} 
          value="*"
        >
          *
        </button>
        <button 
          id="seven" 
          onClick={props.numbers} 
          value="7"
        >
          7
        </button>
        <button 
          id="eight" 
          onClick={props.numbers} 
          value="8"
        >
          8
        </button>
        <button 
          id="nine" 
          onClick={props.pnumberBtn} 
          value="9"
        >
          9
        </button>
        <button 
          id="divide" 
          onClick={props.operators} 
          value="/"
        >
          /
        </button>
        <button 
        id="zero"
        className="col-2"
        onClick={props.numbers} 
        value="0">
          0
        </button>
        <button 
          id="dot" 
          onClick={props.decimals} 
          value="."
        >
          .
        </button>
        <button 
          id="equal" 
          onClick={props.equal} 
          value="="
        >
          =
        </button>
      </div>          
    )
}




ReactDOM.render(<App />, document.getElementById("root"))