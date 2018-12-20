import React, {Component} from 'react'
import '../App.scss';
import update from 'react-addons-update';

/*
  Row component written as a simple function:
  https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components

  Any components that do not have state should be written this way,
  see: https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
*/
const POSSIBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const Row = ({character, id}) => (
    <span>
      <button className={"waves-effect waves-light btn red lighten-2 order-number-buttons"}>{character}</button>
      {
        ((id+1) % 5) === 0 &&
        <br/>
      }
    </span>
  );

class FindMistakeWords extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    data: [
        {character: 'A'},
    ],
    workCount: 0,
    mistake: 0
    };

    this.intervalID =0;
}

componentWillMount(){
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
}

componentDidMount(){
    this.intervalID = setInterval(this.handleChangeCharacter, 900)
}

_randomCharacter (){
    return POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length))
}

handleChangeCharacter=()=>{
    var randomNum = Math.floor(Math.random()*10)
    var new1, new2, new3, new4;
    new1 = this._randomCharacter()
    new2 = this._randomCharacter()
    new3 = this._randomCharacter()
    new4 = this._randomCharacter()

    switch(randomNum){
        case 0:
            this.setState(
                {
                    data: update(this.state.data, {
                        0: {character: {$set: new1}},
                        24: {character: {$set: new4}}
                    }),
                }
            )
        case 1:
            this.setState(
                {
                    data: update(this.state.data, {
                        0: {character: {$set: new1}},
                    }),
                }
            )
        case 2:
            this.setState(
                {
                    data: update(this.state.data, {
                        4: {character: {$set: new2}},
                    }),
                }
            )
        case 3:
            this.setState(
                {
                    data: update(this.state.data, {
                        20: {character: {$set: new3}},
                    }),
                }
            )
        case 4:
            this.setState(
                {
                    data: update(this.state.data, {
                        0: {character: {$set: new1}},
                        20: {character: {$set: new3}}
                    }),
                }
            )
        case 5:
            this.setState(
                {
                    data: update(this.state.data, {
                        24: {character: {$set: new4}},
                    }),
                }
            )
        case 6:
            this.setState(
                {
                    data: update(this.state.data, {
                        0: {character: {$set: new2}},
                        4: {character: {$set: new3}},
                        20: {character: {$set: new4}},
                        24: {character: {$set: new1}},
                    })
                }
            )
        case 7:
            this.setState(
                {
                    data: update(this.state.data, {
                        4: {character: {$set: new2}},
                        20: {character: {$set: new3}}
                    }),
                }
            )
        case 8:
            this.setState(
                {
                    data: update(this.state.data, {
                        4: {character: {$set: new2}},
                        24: {character: {$set: new4}}
                    }),
                }
            )
        case 9:
            this.setState(
                {
                    data: update(this.state.data, {
                        20: {character: {$set: new3}},
                        24: {character: {$set: new4}}
                    }),
                }
            )
    }
}



    render() {
        const rows = this.state.data.map( (rowData) => <Row key={rowData.id} {...rowData} />);

        return (
        <div className={"row"}>
            <div className={"row s6"}><span>Look at the center point and follow the changes.</span></div>
            <div className="body">
                {rows}
            </div>
        </div>
        );
    }
}

export default FindMistakeWords;