(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,a){},26:function(t,e,a){t.exports=a(50)},50:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(20),c=a.n(s),l=a(2),o=a(3),i=a(5),u=a(4),d=a(6),h=(a(13),a(8)),m=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).generateNumber=function(){a.setState({isRight:!1,isWrong:!1});var t=a.state.firstRange,e=a.state.lastRange,n=Math.floor(t+Math.random()*e),r=a.state.speed;a.setState({currentNumber:n,isShow:!0}),setTimeout(function(){this.setState({isShow:!1})}.bind(Object(h.a)(Object(h.a)(a))),r)},a.handleInputValue=function(t){var e=t.target.value;a.setState({value:e})},a.displayNumber=function(){var t=a.state.currentNumber;return r.a.createElement("div",null,t)},a._handleKeyPress=function(t){if("Enter"===t.key){a.setState({value:""});var e=parseInt(t.target.value),n=a.state.currentNumber,r=a.state.score+1,s=a.state.speed,c=String(a.state.firstRange),l=String(a.state.lastRange);if(e===n){var o=Number(c+"0"),i=Number(l+"0");a.setState({score:r,speed:s-40,displaySpeed:a.state.displaySpeed+40,firstRange:o,lastRange:i,isRight:!0}),setTimeout(a.generateNumber,700)}else{o=Number(c.slice(0,-1)),i=Number(l.slice(0,-1));c>=1e3&&l<=9e3?s<=1e3&&a.setState({speed:s+40,displaySpeed:a.state.displaySpeed-40}):(s<=1e3&&a.setState({displaySpeed:a.state.displaySpeed-40}),a.setState({firstRange:o,lastRange:i})),a.setState({isWrong:!0}),setTimeout(a.generateNumber,700)}}},a.state={currentNumber:0,isShow:!1,score:0,speed:800,firstRange:1e4,lastRange:9e4,isRight:!1,value:"",isWrong:!1,displaySpeed:500},a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){setTimeout(function(){this.generateNumber()}.bind(this),3e3)}},{key:"render",value:function(){var t=this.state.currentNumber,e=this.state.currentNumber.toString().length,a="_ ".repeat(e),n=this.state.displaySpeed;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row s6"},r.a.createElement("span",null,"Find the right number.")),r.a.createElement("div",null,!this.state.isShow&&a,this.state.isShow&&t),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("input",{value:this.state.value,type:"text",autoFocus:!0,style:{width:"150px"},onKeyPress:this._handleKeyPress,onChange:this.handleInputValue}),this.state.isRight&&r.a.createElement("span",null,"\u2713"),this.state.isWrong&&r.a.createElement("span",null,"\u2717")),"Speed: ",n)}}]),e}(r.a.Component),p=a(9),v=a.n(p),b=a(11),f={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",width:"55%",height:"45%",transform:"translate(-64%, -35%)"}},g=["abandon","ability","able","abortion","about","above","abroad","absence","absolute","absolutely","absorb","abuse","academic","accept","access","accident","accompany","accomplish","according","account","accurate","accuse","achieve","achievement","acid","acknowledge","acquire","across","act","action","active","activist","activity","actor","actress"],E=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).handleChangeWord=function(){var t=a.state.startNumber+1,e=a.state.endNumber,n=a.state.wordBoxIndex,r=a.state.speed;if(t<=e){var s=a.state.indexNum,c=a.state.displayWords.fill("___",0),l=a.state.displayWordCount;c[s]=g[n],s<=a.state.digitCount?(a.setState({indexNum:s+1,displayWords:c,displayWordCount:l-1,startNumber:t,wordBoxIndex:n+1}),setTimeout(a.handleChangeWord,r)):(a.setState({indexNum:0,wordBoxIndex:n+1}),setTimeout(a.handleChangeWord,r))}else{var o=n-1;a.setState({modalIsOpen:!0,currentWord:g[o]})}},a.afterOpenModal=function(){for(var t=[],e="",n=0;n<6;n++)e=Math.floor(20*Math.random()),t[n]=g[e];t[Math.floor(6*Math.random())]=a.state.currentWord,a.setState({randomWords:t})},a.generateRandom=function(t,e){var n=Math.floor(Math.random()*(e-t+1))+t;return 0===n||1===n?a.generateRandom(t,e):n},a.startRandomWords=function(){a.setState({digitCount:9,currentWord:g[0],location_x:208,location_y:201,indexNum:1,randomNum:a.randomIndexWordNum()}),a.intervalId=setInterval(a.handleDisplayWord,a.state.speed)},a.randomIndexWordNum=function(){return Math.floor(25*Math.random())},a.handleDisplayWord=function(){var t=a.state.location_x,e=a.state.location_y,n=a.state.indexNum,r=a.state.randomNum;n===r?(clearInterval(a.intervalId),a.setState({modalIsOpen:!0})):(0===r&&(clearInterval(a.intervalId),a.setState({modalIsOpen:!0})),n%5===0?a.setState({location_x:208,indexNum:n+1,location_y:e+22,currentWord:g[n]}):a.setState({location_x:t+130,indexNum:n+1,currentWord:g[n]}),25===n&&a.setState({location_x:190,location_y:50}))},a.state={modalIsOpen:!1,displayWords:["___","___","___","___","___","___","___","___","___"],indexNum:1,startNumber:0,endNumber:15,displayWordCount:15,wordBoxIndex:0,randomWords:[],currentWord:"",isRight:!1,speed:300,digitCount:0,underlines:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],location_x:0,location_y:0,wordDisplay:!1,indexCount:1,isWrong:!1,randomNum:0,displaySpeed:500},a.intervalId=0,a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"handleWordClick",value:function(t){var e=this.state.speed,a=this.state.displaySpeed;this.state.currentWord===t?e>=5&&this.setState({isRight:!0,speed:e-20,displaySpeed:a+20}):this.setState({isWrong:!0,speed:e+20,displaySpeed:a-20});var n=Math.floor(5*Math.random());this.setState({startNumber:0,endNumber:11,digitCount:n}),setTimeout(function(){this.setState({isRight:!1,modalIsOpen:!1,isWrong:!1})}.bind(this),300),setTimeout(this.startRandomWords,500)}},{key:"componentDidMount",value:function(){this.startRandomWords()}},{key:"render",value:function(){var t=this,e=this.state.randomWords,a=this.state.isRight,n=this.state.isWrong,s=this.state.location_x,c=this.state.location_y,l=this.state.displaySpeed;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row s6"},r.a.createElement("span",null,"Remember the right word.")),r.a.createElement("div",{className:"col"},this.state.underlines.map(function(t,e){return r.a.createElement("span",null,r.a.createElement("span",null,"____________________"),r.a.createElement("span",null," "),(e+1)%5===0&&r.a.createElement("br",null))}),r.a.createElement("span",{style:{padding:"20px",left:s+"px",top:c+"px",position:"absolute"}},this.state.currentWord),r.a.createElement("div",null,"Speed: ",l),r.a.createElement(v.a,{isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,style:f,contentLabel:"Example Modal"},e.map(function(e,a){return r.a.createElement("span",null,r.a.createElement("button",{className:"remember-word-margin-button waves-effect waves-light btn deep-purple lighten-2",value:e,onClick:function(){return t.handleWordClick(e)}},e),(a+1)%3===0&&r.a.createElement("br",null))}),a&&r.a.createElement("span",null,"\u2713"),n&&r.a.createElement("span",null,"\u2717"))))}}]),e}(r.a.Component);v.a.setAppElement("#root");var y=E,S=a(1),_=a.n(S),C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",N=function(t){var e=t.character,a=t.id;return r.a.createElement("span",null,r.a.createElement("button",{className:"waves-effect waves-light btn red lighten-2 order-number-buttons"},e),(a+1)%5===0&&r.a.createElement("br",null))},k=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).handleChangeCharacter=function(){var t,e,n,r,s=Math.floor(10*Math.random());switch(t=a._randomCharacter(),e=a._randomCharacter(),n=a._randomCharacter(),r=a._randomCharacter(),s){case 0:a.setState({data:_()(a.state.data,{0:{character:{$set:t}},24:{character:{$set:r}}})});case 1:a.setState({data:_()(a.state.data,{0:{character:{$set:t}}})});case 2:a.setState({data:_()(a.state.data,{4:{character:{$set:e}}})});case 3:a.setState({data:_()(a.state.data,{20:{character:{$set:n}}})});case 4:a.setState({data:_()(a.state.data,{0:{character:{$set:t}},20:{character:{$set:n}}})});case 5:a.setState({data:_()(a.state.data,{24:{character:{$set:r}}})});case 6:a.setState({data:_()(a.state.data,{0:{character:{$set:e}},4:{character:{$set:n}},20:{character:{$set:r}},24:{character:{$set:t}}})});case 7:a.setState({data:_()(a.state.data,{4:{character:{$set:e}},20:{character:{$set:n}}})});case 8:a.setState({data:_()(a.state.data,{4:{character:{$set:e}},24:{character:{$set:r}}})});case 9:a.setState({data:_()(a.state.data,{20:{character:{$set:n}},24:{character:{$set:r}}})})}},a.state={data:[{character:"A"}],workCount:0,mistake:0},a.intervalID=0,a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentWillMount",value:function(){for(var t,e=0,a=[];e<25;e++)t=12===e?{id:12,character:"."}:{id:e,character:C.charAt(Math.floor(Math.random()*C.length))},a.push(t);this.setState({data:a})}},{key:"componentDidMount",value:function(){this.intervalID=setInterval(this.handleChangeCharacter,900)}},{key:"_randomCharacter",value:function(){return C.charAt(Math.floor(Math.random()*C.length))}},{key:"render",value:function(){var t=this.state.data.map(function(t){return r.a.createElement(N,Object.assign({key:t.id},t))});return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row s6"},r.a.createElement("span",null,"Look at the center point and follow the changes.")),r.a.createElement("div",{className:"body"},t))}}]),e}(r.a.Component),w="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",O={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",width:"30%",height:"30%",transform:"translate(-50%, -50%)"}},M=function(t){var e=t.character,a=t.id;return r.a.createElement("span",null,r.a.createElement("button",{className:"waves-effect waves-light btn green order-number-buttons"},e),(a+1)%5===0&&r.a.createElement("br",null))},x=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).startChangeFunction=function(){for(var t,e=0,n=[];e<25;e++)t=12===e?{id:12,character:"."}:{id:e,character:w.charAt(Math.floor(Math.random()*w.length))},n.push(t);a.setState({data:n}),a.intervalID=setInterval(a.handleChangeCharacter,750)},a.againStart=function(){a.setState({modalIsOpen:!1,mistake:0,playCount:0,buttonMistake:0}),a.startChangeFunction()},a.handleChangeCharacter=function(){var t,e,n=Math.floor(10*Math.random());t=a._randomCharacter(),e=a._randomCharacter();var r=a.state.mistake+1,s=a.state.playCount;if(20===s)clearInterval(a.intervalID),a.setState({modalIsOpen:!0});else switch(n){case 0:return a.setState({data:_()(a.state.data,{24:{character:{$set:t}},0:{character:{$set:e}},4:{character:{$set:e}},20:{character:{$set:e}}}),mistake:r});case 1:return a.setState({data:_()(a.state.data,{0:{character:{$set:t}},24:{character:{$set:e}},4:{character:{$set:e}},20:{character:{$set:e}}}),mistake:r});case 2:return a.setState({data:_()(a.state.data,{4:{character:{$set:t}},24:{character:{$set:e}},0:{character:{$set:e}},20:{character:{$set:e}}}),mistake:r});case 3:return a.setState({data:_()(a.state.data,{20:{character:{$set:t}},4:{character:{$set:e}},24:{character:{$set:e}},0:{character:{$set:e}}}),mistake:r});default:a.setState({data:_()(a.state.data,{20:{character:{$set:t}},4:{character:{$set:t}},24:{character:{$set:t}},0:{character:{$set:t}}})})}a.setState({playCount:s+1})},a.handleMistake=function(){var t=a.state.buttonMistake+1;a.setState({buttonMistake:t})},a.afterOpenModal=function(){},a.state={data:[{character:"A"}],workCount:0,mistake:0,playCount:0,buttonMistake:0,modalIsOpen:!1},a.intervalID=0,a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){this.startChangeFunction()}},{key:"_randomCharacter",value:function(){return w.charAt(Math.floor(Math.random()*w.length))}},{key:"render",value:function(){var t=this.state.data.map(function(t){return r.a.createElement(M,Object.assign({key:t.id},t))}),e=this.state.buttonMistake,a=this.state.mistake;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row"},r.a.createElement("span",null,"Look at the center point, find the changed letters and press button.")),r.a.createElement("div",null,t),r.a.createElement("div",{className:"col s8",style:{marginTop:"10px",marginLeft:"65px"}},r.a.createElement("button",{className:"waves-effect waves-light btn orange lighten-1",onClick:this.handleMistake},"Mistake")),r.a.createElement(v.a,{isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,style:O,contentLabel:"Example Modal"},"Mistakes you found: ",e,r.a.createElement("br",null),"Real mistakes: ",a,r.a.createElement("br",null),r.a.createElement("button",{className:"waves-effect waves-light btn green lighten-2",onClick:this.againStart},"Again")))}}]),e}(r.a.Component),I=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).handleScrollY=function(){var t=a.state.location_x,e=(a.state.location_y,a.state.vertical);590===t?(a.setState({location_y:0}),clearInterval(a.intervalYId)):e?a.setState({location_x:t+5,location_y:530,scroll:!0,vertical:!1}):a.setState({location_y:0,scroll:!1,vertical:!0})},a.handleScrollX=function(){a.state.location_x;var t=a.state.location_y,e=a.state.horizontal;520===t?(a.setState({location_x:0}),clearInterval(a.intervalXId),a.intervalYId=setInterval(a.handleScrollY,270)):e?a.setState({location_x:600,location_y:t+5,scroll:!0,horizontal:!1}):a.setState({location_x:0,scroll:!1,horizontal:!0})},a.startBall=function(){a.intervalXId=setInterval(a.handleScrollX,270)},a.handleSpeedUp=function(){var t=a.state.speed;a.setState({speed:t+10})},a.handleSlowDown=function(){var t=a.state.speed;a.setState({speed:t-10})},a.state={scroll:!1,vertical:!0,horizontal:!0,location_x:0,location_y:0,speed:450},a.intervaXId=0,a.intervaYId=0,a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){setTimeout(this.startBall,1e3)}},{key:"render",value:function(){var t=this.state.location_x,e=this.state.location_y;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row s6"},r.a.createElement("span",null,"Follow the ball.")),r.a.createElement(b.Motion,{style:{x:Object(b.spring)(this.state.scroll?600:0)}},function(a){a.x;return r.a.createElement("div",{className:"demo0"},r.a.createElement("div",{className:"demo0-block",style:{WebkitTransform:"translate3d(".concat(t+"px",", ").concat(e+"px",", 0)"),transform:"translate3d(".concat(t+"px",", ").concat(e+"px",", 0)")}}))}))}}]),e}(n.Component),j=function(t){return Math.floor(t/60)+":"+("0"+t%60).slice(-2)},W=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).state={secondsElapsed:0,laps:[],lastClearedIncrementer:null},a.incrementer=null,a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"handleStartClick",value:function(){var t=this;this.incrementer=setInterval(function(){return t.setState({secondsElapsed:t.state.secondsElapsed+1})},1e3)}},{key:"handleStopClick",value:function(){clearInterval(this.incrementer),this.setState({lastClearedIncrementer:this.incrementer})}},{key:"handleResetClick",value:function(){clearInterval(this.incrementer),this.setState({secondsElapsed:0,laps:[]})}},{key:"handleLabClick",value:function(){this.setState({laps:this.state.laps.concat([this.state.secondsElapsed])})}},{key:"componentDidMount",value:function(){var t=this;!0===this.props.start&&(this.incrementer=setInterval(function(){return t.setState({secondsElapsed:t.state.secondsElapsed+1})},1e3))}},{key:"render",value:function(){return!1===this.props.start&&clearInterval(this.incrementer),r.a.createElement("div",{className:"stopwatch"},r.a.createElement("h5",{className:"stopwatch-timer"},j(this.state.secondsElapsed)),0!==this.state.secondsElapsed&&this.incrementer===this.state.lastClearedIncrementer?r.a.createElement($,{onClick:this.handleResetClick.bind(this)},"reset"):null,r.a.createElement("ul",{className:"stopwatch-laps"},this.state.laps.map(function(t,e){return r.a.createElement("li",{className:"stopwatch-lap"},r.a.createElement("strong",null,e+1),"/ ",j(t))})))}}]),e}(r.a.Component),$=function(t){return r.a.createElement("button",Object.assign({type:"button"},t,{className:"btn "+t.className}))},R=W,D=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).state={numbers:[],currentNumber:1,ismounted:!0},a._ismounted=!1,a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"handleNumberClick",value:function(t){var e=this.state.currentNumber;t===e&&(this.setState({currentNumber:e+1}),25===e&&this.setState({ismounted:!1,currentNumber:""}))}},{key:"componentWillMount",value:function(){for(var t=[];t.length<25;){var e=Math.floor(25*Math.random())+1;-1===t.indexOf(e)&&t.push(e)}this.setState({numbers:t})}},{key:"componentDidMount",value:function(){this.startStopWatch(),this.setState({ismounted:!0})}},{key:"startStopWatch",value:function(){if(this._ismounted)return r.a.createElement(R,null)}},{key:"componentWillUnmount",value:function(){this._ismounted=!1}},{key:"render",value:function(){var t=this,e=this.state.numbers,a=this.state.currentNumber;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row s6"},r.a.createElement("span",null,"Sort numbers")),r.a.createElement("div",null,e.map(function(e,a){return r.a.createElement("span",{key:a},r.a.createElement("button",{variant:"outlined",color:"secondary",className:"waves-effect waves-light btn deep-purple lighten-2 order-number-buttons",value:e,onClick:function(){return t.handleNumberClick(e)}},e),(a+1)%5===0&&r.a.createElement("br",null))}),"Next Number: ",a,r.a.createElement(R,{start:this.state.ismounted})))}}]),e}(n.Component),B=function(t){var e=t.button,a=t.handleButton;return r.a.createElement("button",{className:"waves-effect waves-light btn",value:e,onClick:a},e)},L=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).handleButton=function(t){t.preventDefault();var e=t.target.value;a.setState({selected:e}),a.renderComponents(e)},a.renderComponents=function(t){switch(t){case"1":return a.button=r.a.createElement(I,null);case"2":return a.button=r.a.createElement(D,null);case"3":return a.button=r.a.createElement(k,null);case"4":return a.button=r.a.createElement(x,null);case"5":return a.button=r.a.createElement(m,null);case"6":return a.button=r.a.createElement(y,null);default:return a.button=r.a.createElement(I,null)}},a.state={buttons:[1,2,3,4,5,6],selected:0},a.button="",a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){return this.button=r.a.createElement(I,null)}},{key:"render",value:function(){var t=this,e=this.state.buttons.map(function(e,a){return r.a.createElement(B,{key:e.id,handleButton:t.handleButton,button:e})});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s8"},r.a.createElement("h3",null,"Haleluya"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},e),r.a.createElement("div",{className:"row"},this.button,!this.button&&r.a.createElement(I,null)),r.a.createElement("a",{href:"https://www.github.com/ebrugulec/speed_reading",target:"_blank",className:"github-corner","aria-label":"View source on GitHub"},r.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},"aria-hidden":"true"},r.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),r.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),r.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"}))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.b6440fb9.chunk.js.map