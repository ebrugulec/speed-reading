import React, {Component} from 'react'
import Modal from 'react-modal';
import {Motion, spring} from 'react-motion';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      width: '55%',
      height: '45%',
      transform             : 'translate(-64%, -35%)'
    }
};
const WORDS = ['abandon',
    'ability',
    'able',
    'abortion',
    'about',
    'above',
    'abroad',
    'absence',
    'absolute',
    'absolutely',
    'absorb',
    'abuse',
    'academic',
    'accept',
    'access',
    'accident',
    'accompany',
    'accomplish',
    'according',
    'account',
    'accurate',
    'accuse',
    'achieve',
    'achievement',
    'acid',
    'acknowledge',
    'acquire',
    'across',
    'act',
    'action',
    'active',
    'activist',
    'activity',
    'actor',
    'actress',
]
class RememberWord extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalIsOpen: false,
            displayWords: ['___', '___', '___', '___', '___', '___', '___', '___', '___', ],
            indexNum: 1,
            startNumber: 0,
            endNumber: 15,
            displayWordCount: 15,
            wordBoxIndex: 0,
            randomWords: [],
            currentWord: '',
            isRight: false,
            speed: 300,
            digitCount :0,
            underlines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20,21,22,23,24,25],
            location_x: 0,
            location_y: 0,
            wordDisplay: false,
            indexCount: 1,
            isWrong: false,
            randomNum: 0,
            displaySpeed: 500
        }
        this.intervalId=0;
    }

    handleChangeWord = () =>{
        var startNum = this.state.startNumber+1
        var endNum = this.state.endNumber
        var wordBoxIndex = this.state.wordBoxIndex
        const speed = this.state.speed
        if(startNum <= endNum){
            var indexNum = this.state.indexNum
            var newWords = this.state.displayWords.fill('___', 0)
            var displayWordCount = this.state.displayWordCount
            newWords[indexNum] = WORDS[wordBoxIndex]
            var digitCount = this.state.digitCount
            if(indexNum <= digitCount){
                this.setState({
                    indexNum: indexNum+1,
                    displayWords: newWords,
                    displayWordCount: displayWordCount-1,
                    startNumber: startNum,
                    wordBoxIndex: wordBoxIndex+1
                })
                setTimeout(this.handleChangeWord, speed)
            }else{
                this.setState({
                    indexNum: 0,
                    wordBoxIndex: wordBoxIndex+1
                })
                setTimeout(this.handleChangeWord, speed)
            }
        }
        else{
            var index = wordBoxIndex-1
            this.setState({
                modalIsOpen: true,
                currentWord: WORDS[index]
            });
        }
    }

    afterOpenModal = () => {
        // this.subtitle.style.color = '#f00';
        var randomWords = []
        var randomWord = ''
        for(var i=0; i<6; i++){
            randomWord = Math.floor(Math.random()*20)
            randomWords[i] = WORDS[randomWord]
        }
        var randomIndex = Math.floor(Math.random()*6)
        randomWords[randomIndex] = this.state.currentWord
        this.setState({
            randomWords: randomWords,
        })

    }

    handleWordClick(word){
        const speed = this.state.speed
        const displaySpeed = this.state.displaySpeed
        if(this.state.currentWord === word){
            if(speed >= 5){
                this.setState({
                    isRight: true,
                    speed: speed-20,
                    displaySpeed: displaySpeed+20
                })
            }
        }
        else(
            this.setState({
                isWrong: true,
                speed: speed+20,
                displaySpeed: displaySpeed-20
            })
        )
        var digitCount = Math.floor(Math.random() * 5)
        this.setState({
            startNumber: 0,
            endNumber: 11,
            digitCount: digitCount
        })
        setTimeout(
            function() {
                this.setState({
                    isRight: false,
                    modalIsOpen: false,
                    isWrong: false
                });
            }
            .bind(this),
            300
        );
        setTimeout(this.startRandomWords, 500)
    }

    generateRandom = (min, max) => {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        return (num === 0 || num === 1) ? this.generateRandom(min, max) : num;
    }

    startRandomWords=()=>{
        this.setState({
            digitCount: 9,
            currentWord: WORDS[0],
            location_x: 208,
            location_y: 201,
            indexNum: 1,
            randomNum: this.randomIndexWordNum()
        })

        this.intervalId = setInterval(this.handleDisplayWord, this.state.speed)
    }

    componentDidMount(){
        this.startRandomWords()
    }

    randomIndexWordNum=()=>{
        return Math.floor(Math.random()*25)
    }

    handleDisplayWord = () => {
        const location_x = this.state.location_x
        const location_y = this.state.location_y
        const indexNum = this.state.indexNum
        var randomNum = this.state.randomNum

        if(indexNum === randomNum){
            clearInterval(this.intervalId)
            this.setState({
                modalIsOpen: true
            })
        }else{
            if(randomNum===0){
                clearInterval(this.intervalId)
                this.setState({
                    modalIsOpen: true
                })
            }
            if((indexNum%5) === 0){
                this.setState({
                    location_x: 208,
                    indexNum: indexNum+1,
                    location_y: location_y+22,
                    currentWord: WORDS[indexNum]
                })
            }else{
                this.setState({
                    location_x: location_x+130,
                    indexNum: indexNum+1,
                    currentWord: WORDS[indexNum]
                })
            }
            if(indexNum === 25){
                this.setState({
                    location_x: 190,
                    location_y: 50,
                })
            }
        }
    }
    render(){
        const randomWords = this.state.randomWords
        var isRight = this.state.isRight
        var isWrong = this.state.isWrong
        const location_x = this.state.location_x
        const location_y = this.state.location_y
        const displaySpeed = this.state.displaySpeed
        return(
            <div className={"row"}>
                <div className={"row s6"}>
                    <span>Remember the right word.</span>
                </div>
                <div className="col">
                {
                    this.state.underlines.map( (underline, i) =>{
                        return(
                            <span><span>____________________</span><span> </span>
                            {((i+1) % 5) === 0 &&
                                    <br/>
                            }
                            </span>
                        )
                    })
                }
                <span  style={{padding: '20px', left:location_x+"px", top:location_y+"px", position:'absolute'}}>
                    {this.state.currentWord}
                </span>

                <div>
                    Speed: {displaySpeed}
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    style={customStyles}
                    contentLabel="Example Modal">
                    {
                        randomWords.map((word, i) =>(
                            <span>
                                <button
                                    className={"remember-word-margin-button waves-effect waves-light btn deep-purple lighten-2"}
                                    value={word}
                                    onClick={() => this.handleWordClick(word)}>
                                    {word}
                                </button>
                                {((i+1) % 3) === 0 &&
                                    <br/>
                                }
                            </span>
                        ))
                    }
                    {
                        isRight &&
                        <span>✓</span>
                    }

                    {
                        isWrong &&
                        <span>✗</span>
                    }
                </Modal>
                {/* {
                    displayWords.map((word, i) => (
                        <span>
                            <span>{word +' '}</span>
                            {((i+1) % 5) === 0 &&
                                <br/>
                            }
                        </span>
                    ))
                } */}
                </div>
            </div>
        )
    }
}

Modal.setAppElement('#root');

export default RememberWord;