import React, {Component} from 'react'
import {Motion, spring} from 'react-motion';

class FirstExercise extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scroll: false,
            vertical: true,
            horizontal: true,
            location_x: 0,
            location_y: 0,
            speed: 450
        };
        this.intervaXId=0;
        this.intervaYId=0;
    };

    handleScrollY=()=>{
        var location_x = this.state.location_x
        var location_y = this.state.location_y
        var vertical = this.state.vertical

        if(location_x === 590){
            this.setState({
                location_y: 0
            })
            clearInterval(this.intervalYId)
        }else{
            if(vertical){
                this.setState({
                    location_x: location_x+5,
                    location_y: 530,
                    scroll: true,
                    vertical: false
                })
            }else{
                this.setState({
                    location_y: 0,
                    scroll: false,
                    vertical: true
                })
            }
        }
    }

    handleScrollX=()=>{
        var location_x = this.state.location_x
        var location_y = this.state.location_y
        var horizontal = this.state.horizontal

        if(location_y === 520){
            this.setState({
                location_x: 0
            })
            clearInterval(this.intervalXId)
            this.intervalYId = setInterval(this.handleScrollY, 270)
        }else{
            if(horizontal){
                this.setState({
                    location_x: 600,
                    location_y: location_y+5,
                    scroll: true,
                    horizontal: false
                })
            }else{
                this.setState({
                    location_x: 0,
                    scroll: false,
                    horizontal: true
                })
            }
        }
    };

    componentDidMount(){
        setTimeout(this.startBall, 1000)
    }

    startBall=()=>{
        this.intervalXId = setInterval(this.handleScrollX, 270)
    }

    handleSpeedUp=()=>{
        var speed = this.state.speed
        this.setState({
            speed: speed+10
        })
    }

    handleSlowDown=()=>{
        var speed = this.state.speed
        this.setState({
            speed: speed-10
        })
    }

  render() {
    const location_x = this.state.location_x
    const location_y = this.state.location_y
    return (
        <div className={"row"}>
            <div className={"row s6"}><span>Follow the ball.</span></div>
            <Motion style={{x: spring(this.state.scroll ? 600 : 0)}}>
                {({x}) =>
                <div className="demo0">
                    <div className="demo0-block" style={{
                        WebkitTransform: `translate3d(${location_x+'px'}, ${location_y+'px'}, 0)`,
                        transform: `translate3d(${location_x+'px'}, ${location_y+'px'}, 0)`,
                    }} />
                    </div>
                    }
            </Motion>
        </div>
    );
  };
}

export default FirstExercise;