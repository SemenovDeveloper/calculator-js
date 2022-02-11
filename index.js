const initialState = {
  formula: "",
  currentValue: "",
  perviousValue: "",
};

const isOperator = /[*\/+-]/;
const endsWithOperator = /[*\/+-]$/;

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
  }

  numbers(e) {    
    const currentValue = this.state.currentValue;
    const value = e.target.value;
    
    if (currentValue.length < 19) {
      if(currentValue.startsWith("0") && !currentValue.startsWith("0.")){
        this.setState({
          currentValue: value,
        });
      } else {
        this.setState({
          currentValue: currentValue + value,
        })
      }
    }
  }

  decimals() {
    const currentValue = this.state.currentValue;
    const dot = "."
    if(!currentValue.includes(dot)){
      this.setState({
        currentValue: currentValue + dot
      })
    }
  }

  minusPrefix() {   
    const currentValue = this.state.currentValue; 
    if(currentValue.startsWith("-")){
      this.setState({
        currentValue: currentValue.slice(1, currentValue.length)
      })
    } else if(currentValue !== "0") {
      this.setState({
        currentValue: "-" + currentValue
      })
    }
  }

  deleteNumber() {
    const currentValue = this.state.currentValue
    this.setState({
      currentValue: currentValue.slice(0, currentValue.length-1)
    })
  }
  
  clearInput() {
    this.setState(initialState);
  }  

  operators(e) {
    const bank = this.state.perviousValue; 
    const input = this.state.currentValue;
    const operator = e.target.value;
    const formula = this.state.formula;
    const expression = bank ? (bank + operator + input).replace(/--/, "+").replace(isOperator, operator) : input;
    console.log(input, bank, formula, expression);
  // if(endsWithOperator.test(bank)) {
  //   this.setState({
  //     formula: bank.replace(endsWithOperator, operator),
  //     perviousValue: bank.replace(endsWithOperator, operator),
  //   })
  // } else if(input==)

    if(!endsWithOperator.test(bank)){
      const result = eval(expression).toString();    
      this.setState({
        formula: result + operator, 
        perviousValue: result + operator,
        currentValue: ""
      })
    } else if(input !== "") {
      const result = eval(expression).toString()
      this.setState({
        formula: result + operator, 
        perviousValue: result + operator,
        currentValue: ""
      })
    } else {      
      this.setState({
        formula: bank.replace(endsWithOperator, operator),
        perviousValue: bank.replace(endsWithOperator, operator),
      })
    }
  }

  equal() {
    const input = this.state.currentValue;
    const bank = this.state.perviousValue;
    const formula = this.state.formula;
    const expression = (bank + input).replace(/--/, "+");
    if(isOperator.test(bank)){
      const result = String(eval(expression));
      this.setState({
        formula: expression + "=" + result,
        perviousValue: result + bank[bank.length-1],
      })
    } else {
      this.setState ({
        formula: input + "=",
        perviousValue: input,
      })
    }
  }
  render() {
    return (
      <div id="container">
        <h1>Calculator</h1>
        <div id="display">          
          f: {this.state.formula}
          <br/>
          b: {this.state.perviousValue}
          <br/>
          i: {this.state.currentValue}
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
        onClick={props.numbers} 
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