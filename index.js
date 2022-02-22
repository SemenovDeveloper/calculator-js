const endsWithOperator = /[*\/+-]$/;

class App extends React.Component {
  constructor(props) {
    super(props); {
      this.state = {
        formula: "",
        input: "",
      };
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
     if (input === "0") {
        this.setState({
          input: value,
          formula: 
            value === "0" && input === "0"
              ? formula
              : formula.slice(0, formula.length-1) + value
        })
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
    if(!input.includes(dot) && formula){
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
    } else if(input !== "0" && input !== "") {
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
      formula: input.length >= 1
        ? formula.slice(0, formula.length-1)
        : formula
    })
  }
  
  clearInput() {
    this.setState({
      formula: "",
      input: "",
    })
  }

  operators(e) {
    const operator = e.target.value;
    const formula = this.state.formula.replace(/--/, "+");
    if(formula !== ""){
      if (!endsWithOperator.test(formula)) {
        this.setState ({
          formula: String(eval(formula)) + operator,
          input: ""
        })
      } else {
        this.setState({
          formula: formula.replace(endsWithOperator, operator)
        })
      }
    }
  }

  equal() {
    const formula = this.state.formula.replace(/--/, "+");
    if (!endsWithOperator.test(formula) && formula !== ""){
      this.setState({
        formula: String(eval(formula)),
        input: String(eval(formula))    
      })
    }
  }
  
  render() {
    return (
      <div id="container">
        <h1 className="header">Calculator</h1>
        <div id="display">
          <input id="formula-dis" defaultValue={this.state.formula} placeholder="0"></input>
          <input id="input-dis"defaultValue={this.state.input} placeholder="0"></input>
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
        <div className="footer"><a id="footer" target="_blank" href="https://github.com/SemenovDeveloper"><i className="fab fa-github-square"></i>by SemenovDeveloper</a></div>                
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
        id="delete"
        onClick={props.deleteNumber}
      >
        <i className="fa-solid fa-delete-left"></i>
      </button>
      <button 
        className="operator"
        onClick={props.minusPrefix}
      >
        <i className="fa-solid fa-plus-minus"></i>
      </button>
      <button 
        id="add"
        className="operator"
        onClick={props.operators} 
        value="+"
      >
        +
      </button>
      <button 
        id="one"
        className="number"
        onClick={props.numbers} 
        value="1"
      >
        1
      </button>
      <button 
        id="two"
        className="number"
        onClick={props.numbers} 
        value="2"
      >
        2
      </button>
      <button 
        id="three"
        className="number" 
        onClick={props.numbers} 
        value="3"
      >
        3
      </button>
      <button 
        id="subtract"
        className="operator"
        onClick={props.operators} 
        value="-"
      >
        -
      </button>
      <button 
        id="four"
        className="number" 
        onClick={props.numbers} 
        value="4"
      >
        4
      </button>
      <button 
        id="five"
        className="number"
        onClick={props.numbers} 
        value="5"
      >
        5
      </button>
      <button 
        id="six"
        className="number"
        onClick={props.numbers} 
        value="6"
      >
        6
      </button>
      <button 
        id="multiply"
        className="operator"
        onClick={props.operators} 
        value="*"
      >
        *
      </button>
      <button 
        id="seven"
        className="number"
        onClick={props.numbers} 
        value="7"
      >
        7
      </button>
      <button 
        id="eight"
        className="number"
        onClick={props.numbers} 
        value="8"
      >
        8
      </button>
      <button 
      id="nine"
        className="number"
        onClick={props.numbers} 
        value="9"
      >
        9
      </button>
      <button 
        id="divide"
        className="operator" 
        onClick={props.operators} 
        value="/"
      >
        /
      </button>
      <button       
        id="zero"
        className="number"
        onClick={props.numbers} 
        value="0"
      >
        0
      </button>
      <button
        id="decimal"
        className="number" 
        onClick={props.decimals} 
        value="."
      >
        .
      </button>
      <button          
        id="equals"
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