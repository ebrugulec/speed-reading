import React, {Component} from 'react'

class RememberNumber extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentNumber: 0,
            isShow: false,
            score: 0,
            speed: 800,
            firstRange: 10000,
            lastRange: 90000,
            isRight: false,
            value: '',
            isWrong: false,
            displaySpeed:500

        }
    }

    generateNumber = () => {
        this.setState({
            isRight: false,
            isWrong: false
        })
        var firstRange = this.state.firstRange
        var lastRange = this.state.lastRange
        var val = Math.floor(firstRange + Math.random() * lastRange);
        var speed = this.state.speed
        this.setState({
            currentNumber: val,
            isShow: true,
        })
        setTimeout(
            function() {
                this.setState({
                    isShow: false,
                });
            }
            .bind(this),
            speed
        );
    }

    handleInputValue=(e)=>{
        var value = e.target.value
        this.setState({
            value: value
        })
    }

    displayNumber = () => {
        var number = this.state.currentNumber
        return (
            <div>{number}</div>
        )
    }

    _handleKeyPress = (e) =>{
        if (e.key === 'Enter') {
            this.setState({value: ''})
            var enteredNumber = parseInt(e.target.value)
            var currentNumber = this.state.currentNumber
            var score = this.state.score+1
            var speed = this.state.speed
            var firstRange = String(this.state.firstRange)
            var lastRange = String(this.state.lastRange)
            if (enteredNumber === currentNumber){
                var newFirstRange = Number(firstRange+'0')
                var newLastRange = Number(lastRange+'0')
                this.setState({
                    score: score,
                    speed: speed-40,
                    displaySpeed: this.state.displaySpeed+40,
                    firstRange: newFirstRange,
                    lastRange: newLastRange,
                    isRight: true,
                })
                setTimeout(this.generateNumber, 700)
            }else{
                var newFirstRange = Number(firstRange.slice(0, -1));
                var newLastRange = Number(lastRange.slice(0, -1));
                if(firstRange >= 1000 && lastRange <= 9000){
                    if(speed <= 1000)
                    {
                        this.setState({
                            speed: speed+40,
                            displaySpeed: this.state.displaySpeed-40,
                        })
                    }
                }else{
                    if(speed <= 1000)
                    {
                        this.setState({
                            displaySpeed: this.state.displaySpeed-40,
                        })
                    }
                    this.setState({
                        firstRange: newFirstRange,
                        lastRange: newLastRange
                    })
                }
                this.setState({
                    isWrong: true
                })
                setTimeout(this.generateNumber, 700)
            }
        }
    }

    componentDidMount(){
        setTimeout(
            function() {
                this.generateNumber()
            }
            .bind(this),
            3000
        );
    }
    render(){
        var number = this.state.currentNumber
        var digitNum = this.state.currentNumber.toString().length
        var blankChracter = '_ '
        var repeat = blankChracter.repeat(digitNum)
        const speed = this.state.displaySpeed
        return(
            <div className={"row"}>
                <div className={"row s6"}>
                    <span>Find the right number.</span>
                </div>
                <div>
                    { !this.state.isShow &&
                            repeat
                    }
                    { this.state.isShow &&
                        number
                    }
                </div>
                <div>
                    <br/>
                    <input
                        value={this.state.value}
                        type="text"
                        autoFocus={true}
                        style={{width: '150px'}}
                        onKeyPress={this._handleKeyPress}
                        onChange={this.handleInputValue}
                    />

                    {
                        this.state.isRight &&
                        <span>✓</span>
                    }

                    {
                        this.state.isWrong &&
                        <span>✗</span>
                    }
                </div>
                Speed: {speed}
            </div>
        )
    }
}

export default RememberNumber;