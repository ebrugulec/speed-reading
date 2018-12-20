import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import StopWatch from './StopWatch';

class OrderNumber extends Component {
    constructor(props){
        super(props)
        this.state = {
            numbers: [],
            currentNumber: 1,
            ismounted: true
        }
        this._ismounted = false;
    }

    handleNumberClick(number) {
        let currentNumber = this.state.currentNumber
        if(number === currentNumber){
            this.setState({ currentNumber: currentNumber + 1 })
            if(currentNumber === 25){
                this.setState({
                    ismounted: false,
                    currentNumber: ''
                })
            }
        }
    }

    componentWillMount(){
        var arr = []
        while(arr.length < 25){
            var r = Math.floor(Math.random()*25) + 1;
            if(arr.indexOf(r) === -1) arr.push(r);
        }
        this.setState({numbers: arr})
    }

    componentDidMount(){
        this.startStopWatch()
        this.setState({ismounted: true})
    }

    startStopWatch(){
        if (this._ismounted) {
            return <StopWatch />
          }
    }

    componentWillUnmount() {
        this._ismounted = false;
    }

    render(){
        const numbers = this.state.numbers
        const currentNumber = this.state.currentNumber
        return(
            <div className={"row"}>
                <div className={"row s6"}><span>Sort numbers</span></div>
                <div>
                    {numbers.map((number, i) => (
                        <span key={i}>
                            <button variant="outlined" color="secondary" className={"waves-effect waves-light btn deep-purple lighten-2 order-number-buttons"} value={number} onClick={() => this.handleNumberClick(number)}>
                                {number}
                            </button>
                            {((i+1) % 5) === 0 &&
                                <br/>
                            }
                        </span>
                    ))}
                Next Number: {currentNumber}
                <StopWatch start={this.state.ismounted}/>
                </div>
            </div>
        )
    }
}

export default OrderNumber;