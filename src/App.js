import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Counters from "./components/Counters";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      counterValues : [
        {"id":1, "productName":"Iphone", "value":0},
        {"id":2, "productName":"Ipad", "value":0},
        {"id":3, "productName":"Ipods", "value":0},
        {"id":4, "productName":"Iphone Charger", "value":0},
      ]
    }
  }

  incrementThisCounterValueBy1 = (counter) => {
    
    let newCounterValues = [...this.state.counterValues]
    const searchedIndexToBeUpdated = newCounterValues.indexOf(counter);
    newCounterValues[searchedIndexToBeUpdated].value +=1;
    this.setState({counterValues:[...newCounterValues]});
    
  }

  decrementThisCounterValueBy1 = (counter) => {

    let newCounterValues = [...this.state.counterValues]
    const searchedIndexToBeUpdated = newCounterValues.indexOf(counter);

    // decrement only if the number is more than zero or positive
    if(newCounterValues[searchedIndexToBeUpdated].value > 0) {
      newCounterValues[searchedIndexToBeUpdated].value -=1;
      this.setState({counterValues:[...newCounterValues]});  
    }

  }

  resetThisCounter = (counter) => {
    let newCounterValues = [...this.state.counterValues]
    const searchedIndexToBeUpdated = newCounterValues.indexOf(counter);
    newCounterValues[searchedIndexToBeUpdated].value =0;
    this.setState({counterValues:[...newCounterValues]});
  }

  render() {
    return (
      <div className="App">
        
        {/* Navbar */}
        <Navbar 
          noOfPositiveCounters={(this.state.counterValues.filter((counter)=>counter.value>=1)).length} 
        />
        
        {/* Counter container */}
        <Counters 
          counterValues={this.state.counterValues} 
          incrementThisCounter={this.incrementThisCounterValueBy1}
          decremnetThisCounter={this.decrementThisCounterValueBy1}
          resetThisCounter={this.resetThisCounter}
        />
      </div>
    );
  }
}

export default App;