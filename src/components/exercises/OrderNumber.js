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
        }else if(number === 5){
            this.setState({ismounted: false})
        }
    }

    componentWillMount(){
        var arr = []
        while(arr.length < 5){
            var r = Math.floor(Math.random()*5) + 1;
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
        console.log(this._ismounted)
        return(
            <div>
                <StopWatch start={this.state.ismounted}/>
                Next Number: {currentNumber}
                <div>
                    {numbers.map((number, i) => (
                                <span key={i}>
                                    <button variant="outlined" color="secondary" value={number} onClick={() => this.handleNumberClick(number)}>
                                        {number}
                                    </button>
                                    {((i+1) % 5) === 0 &&
                                        <br/>
                                    }
                                </span>
                    ))}
                </div>
            </div>
        )
    }
}

export default OrderNumber;