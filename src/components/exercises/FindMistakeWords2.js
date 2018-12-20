import React, {Component} from 'react'
import '../App.scss';
import update from 'react-addons-update';
import Modal from 'react-modal';

const POSSIBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      width: '30%',
      height: '30%',
      transform             : 'translate(-50%, -50%)'
    }
};

const Row = ({character, id}) => (
    <span>
      <button className={"waves-effect waves-light btn green order-number-buttons"}>{character}</button>
      {
        ((id+1) % 5) === 0 &&
        <br/>
      }
    </span>
  );
  /*
    Table component written as an ES6 class
  */
  class FindMistakeWords2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
          {character: 'A'},
        ],
        workCount: 0,
        mistake: 0,
        playCount: 0,
        buttonMistake: 0,
        modalIsOpen: false
      };

      this.intervalID =0;
    }

    componentDidMount(){
       this.startChangeFunction()
    }

    startChangeFunction=()=>{
        var i = 0
        var data = []
        var character_set
        for(i; i<25; i++){
            if(i === 12){
                character_set = {id: 12, character: '.'}
            }
            else{
                character_set = {id: i, character: POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length))}
            }
            data.push(character_set)
        }
        this.setState({
            data: data
        })
        this.intervalID = setInterval(this.handleChangeCharacter, 750)
    }

    againStart=()=>{
        this.setState({
            modalIsOpen: false,
            mistake: 0,
            playCount: 0,
            buttonMistake: 0
        })
        this.startChangeFunction()
    }

    _randomCharacter(){
        return POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length))
    }

    handleChangeCharacter=()=>{
        var randomNum = Math.floor(Math.random()*10)
        var new1, new2
        new1 = this._randomCharacter()
        new2 = this._randomCharacter()
        var mistake = this.state.mistake+1
        var playCount = this.state.playCount
        if(playCount === 20){
            clearInterval(this.intervalID)
            this.setState({
                modalIsOpen: true
            })
        }else{
            switch(randomNum){
                case 0:
                    return (this.setState(
                        {
                            data: update(this.state.data, {
                                24: {character: {$set: new1}},
                                0: {character: {$set: new2}},
                                4: {character: {$set: new2}},
                                20: {character: {$set: new2}},
                            }),
                            mistake: mistake
                        }
                    ))
                case 1:
                    return (this.setState(
                        {
                            data: update(this.state.data, {
                                0: {character: {$set: new1}},
                                24: {character: {$set: new2}},
                                4: {character: {$set: new2}},
                                20: {character: {$set: new2}},
                            }),
                            mistake: mistake
                        }
                    ))
                case 2:
                    return (this.setState(
                        {
                            data: update(this.state.data, {
                                4: {character: {$set: new1}},
                                24: {character: {$set: new2}},
                                0: {character: {$set: new2}},
                                20: {character: {$set: new2}},
                            }),
                            mistake: mistake
                        }
                    ))
                case 3:
                    return (this.setState(
                        {
                            data: update(this.state.data, {
                                20: {character: {$set: new1}},
                                4: {character: {$set: new2}},
                                24: {character: {$set: new2}},
                                0: {character: {$set: new2}},
                            }),
                            mistake: mistake
                        }
                    ))
                default:
                    this.setState(
                        {
                            data: update(this.state.data, {
                                20: {character: {$set: new1}},
                                4: {character: {$set: new1}},
                                24: {character: {$set: new1}},
                                0: {character: {$set: new1}},
                            }),
                        }
                    )
            }
        }
        this.setState({
            playCount: playCount+1
        })
    }

    handleMistake=()=>{
        var buttonMistake = this.state.buttonMistake+1
        this.setState({
            buttonMistake: buttonMistake
        })
    }

    afterOpenModal=()=>{

    }

    render() {
        const rows = this.state.data.map( (rowData) => <Row key={rowData.id} {...rowData} />);
        const foundMistakes = this.state.buttonMistake
        const mistakes = this.state.mistake
      return (
        <div className={"row"}>
            <div className={"row"}><span>Look at the center point, find the changed letters and press button.</span></div>
            <div>
                {rows}
            </div>
            <div className={"col s8"} style={{marginTop: '10px', marginLeft: '65px'}}>
                <button className={"waves-effect waves-light btn orange lighten-1"} onClick={this.handleMistake}>Mistake</button>
            </div>
            <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    style={customStyles}
                    contentLabel="Example Modal">
                    Mistakes you found: {foundMistakes}
                    <br/>
                    Real mistakes: {mistakes}
                    <br/>
                    <button className={"waves-effect waves-light btn green lighten-2"} onClick={this.againStart}>Again</button>
            </Modal>
        </div>
      );
    }
  }

export default FindMistakeWords2;