import React, {Component} from 'react'

class FindDifferentNumber extends Component {
    constructor(props){
        super(props)
        this.state = {
            buttonOneShow: false,
            buttonTwoShow: false,
            buttonThreeShow: false,
            buttonFourShow: false,
            whichButtonVisible: 0
        }
        this.intervalName = 'first'
    }

    handleStart = () => {
        setInterval(this.handleChangeButton, 6000);
    }

    handleChangeButton = () => {
        // var whichButtonVisible = this.state.whichButtonVisible
        this.setState({
            buttonOneShow: true,
            buttonTwoShow: false,
            buttonThreeShow: false,
            buttonFourShow: false
        })
        // setTimeout(
        //     function(){
        //         console.log("one")
        //         this.setState({
        //             buttonOneShow: true,
        //             buttonTwoShow: false,
        //             buttonThreeShow: false,
        //             buttonFourShow: false
        //         })
        //     }
        // .bind(this),
        // 500)
        setTimeout(
            function(){

                this.setState({
                    buttonOneShow: false,
                    buttonFourShow: true,
                    buttonTwoShow: false,
            buttonThreeShow: false,
                })
            }
        .bind(this), 1000)
        setTimeout(
            function(){
                this.setState({
                    buttonOneShow: true,
                    buttonTwoShow: false,
                    buttonThreeShow: true,
                    buttonFourShow: false,
                })
            }
        .bind(this), 1500)
        setTimeout(
            function(){
                this.setState({
                    buttonThreeShow: false,
                    buttonTwoShow: true,
                    buttonOneShow: false
                })
            }
        .bind(this), 2000)
        // switch(whichButtonVisible){
        //     case 0:
        //     console.log("swtich içi içi")
        //     setTimeout(
        //         function() {
        //             this.setState({
        //                 buttonOneShow: true,
        //                 whichButtonVisible: 1,
        //                 buttonFourShow: false,

        //             })
        //         }
        //         .bind(this),
        //         300
        //     );
        //     setTimeout(
        //         function() {
        //             this.setState({
        //                 buttonFourShow: true,
        //                 whichButtonVisible: 1,
        //                 buttonOneShow: false,

        //             })
        //         }
        //         .bind(this),
        //         700
        //     );
        //     case 1:
        //     case 2:
        //     case 3:
        //     case 4:
        //     case 5:
        //     case 6:
        // }

    }
    componentDidMount(){
        this.handleStart()
    }
    render(){
        var buttonTwoShow= this.state.buttonOneShow
        var buttonOneShow= this.state.buttonTwoShow
        var buttonThreeShow= this.state.buttonThreeShow
        var buttonFourShow= this.state.buttonFourShow
        return(
            <div>
                {
                    buttonOneShow &&
                    <div style={{marginTop: 5}}>
                    <button>One</button>
                    </div>
                }
                {
                    buttonTwoShow &&
                    <div style={{marginTop: 15}}>
                    <button>Two</button>
                    </div>
                }
                {
                    buttonThreeShow &&
                            <div style={{marginTop: 25}}>
                    <button>Three</button>
                    </div >
                }
                {
                    buttonFourShow &&
                            <div style={{marginTop: 35}}>
                    <button>Four</button>
                    </div>
                }
            </div>
        )
    }
}

export default FindDifferentNumber;