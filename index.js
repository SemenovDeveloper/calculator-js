const initialState = {
  formula: "",
  input: "",
};
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
    const {input, formula} = this.state;
    const value = e.target.value;    
    if (input.length < 19) {
      if(input.startsWith("0") && !input.startsWith("0.")){
        this.setState({
          input: value,
          formula: formula + value,
        });
      } else {
        this.setState({
          input: input + value,
          formula: formula + value
        })
      }
    }
  }

  decimals() {
    const {input, formula} = this.state;
    const dot = ".";
    if(!input.includes(dot)){
      this.setState({
        input: input + dot,
        formula: formula + dot
      })
    }
  }

  minusPrefix() {   
    const {input, formula} = this.state;
    if(input.startsWith("-")){
      this.setState({
        input: input.slice(1, input.length),
        formula: formula.slice(0, formula.length - input.length) + input.slice(1, input.length)
      })
    } else if(input !== "0") {
      this.setState({
        input: "-" + input,
        formula: formula.slice(0, formula.length - input.length) + "-" + input
      })
    }
  }

  deleteNumber() {
    const {input, formula} = this.state;
    this.setState({
      input: input.slice(0, input.length-1),
      formula: formula.slice(0, formula.length-1)
    })
  }
  
  clearInput() {
    this.setState(initialState);
  }  

  operators(e) {
    const operator = e.target.value;
    const formula = this.state.formula.replace(/--/, "+");
    if (!endsWithOperator.test(formula)) {
      this.setState ({
        formula: String(eval(formula)) + operator,
        input: "0"
      })
    } else {
      this.setState({
        formula: formula.replace(endsWithOperator, operator)
      })
    }
  }

  equal() {
    const formula = this.state.formula.replace(/--/, "+");
    console.log(formula);
    if (!endsWithOperator.test(formula)){
      this.setState({
        formula: String(eval(formula)),
        input: "0"    
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
          i: {this.state.input}
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
        className="all-clear" 
        onClick={props.clearInput}
      >
        AC
      </button>
      <button 
        className="c" 
        onClick={props.deleteNumber}
      >
        C
      </button>
      <button 
        className="operator"
        onClick={props.minusPrefix}
      >
        +/-
      </button>
      <button 
        className="operetor"
        onClick={props.operators} 
        value="+"
      >
        +
      </button>
      <button 
        className="number"
        onClick={props.numbers} 
        value="1"
      >
        1
      </button>
      <button 
        className="number"
        onClick={props.numbers} 
        value="2"
      >
        2
      </button>
      <button 
        className="number" 
        onClick={props.numbers} 
        value="3"
      >
        3
      </button>
      <button 
        className="operator"
        onClick={props.operators} 
        value="-"
      >
        -
      </button>
      <button 
        className="number" 
        onClick={props.numbers} 
        value="4"
      >
        4
      </button>
        <button 
        className="number"
        onClick={props.numbers} 
        value="5"
      >
        5
      </button>
      <button 
        className="number"
        onClick={props.numbers} 
        value="6"
      >
        6
      </button>
      <button 
        className="operator"
        onClick={props.operators} 
        value="*"
      >
        *
      </button>
      <button 
        className="number"
        onClick={props.numbers} 
        value="7"
      >
        7
      </button>
      <button 
        className="number"
        onClick={props.numbers} 
        value="8"
      >
        8
      </button>
      <button 
        className="number"
        onClick={props.numbers} 
        value="9"
      >
        9
      </button>
      <button 
        className="operator" 
        onClick={props.operators} 
        value="/"
      >
        /
      </button>
      <button       
        className="zero"
        onClick={props.numbers} 
        value="0"
      >
        0
      </button>
      <button 
        className="number" 
        onClick={props.decimals} 
        value="."
      >
        .
      </button>
      <button 
        className="operator"
        onClick={props.equal} 
        value="="
      >
        =
      </button>
    </div>          
  )
}




ReactDOM.render(<App />, document.getElementById("root"))