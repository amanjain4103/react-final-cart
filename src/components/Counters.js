import React from "react";
import Counter from "./Counter.js";

class Counters extends React.Component {

    inc = (counter) => {
        console.log(counter);
    }


    render() {

        const {counterValues} = this.props;

        return (
            <div className="container-fluid">
                
                <ul className="list-group list-group-flush">

                    {counterValues.map((counter,index) => {
                        return <li key={index} className="list-group-item">
                            <Counter  
                                counter={counter}
                                incrementMe={this.props.incrementThisCounter}
                                decrementMe={this.props.decremnetThisCounter}
                                resetMe={this.props.resetThisCounter}
                            />
                        </li>
                    })}
                
                </ul>
                
                
                
            </div>
        )
    }
}

export default Counters;