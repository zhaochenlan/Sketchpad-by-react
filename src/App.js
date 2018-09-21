import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curColor:"black"
    }
  }

  handleBlack(){
    this.setState({
      curColor:"black"
    })
  }

  handleRed(){
    this.setState({
      curColor:"red"
    })
  }

  handleYellow(){
    this.setState({
      curColor:"yellow"
    })
  }
  componentDidMount(){
    let that = this;
    var oC = document.getElementById('cav');
    var ctx = oC.getContext('2d');
    oC.onmousedown = function (evt) {
        var x = evt.pageX - oC.offsetLeft;
        var y = evt.pageY - oC.offsetTop;
        ctx.moveTo(x, y);
        oC.onmousemove = function (evt) {
            var x = evt.pageX - oC.offsetLeft;
            var y = evt.pageY - oC.offsetTop;
            ctx.lineTo(x, y);           
            ctx.strokeStyle = that.state.curColor;
            ctx.stroke();
            
        }
        oC.onmouseup = function () {
            oC.onmousemove = null;
            ctx.beginPath();
        }
    }
  }

  render() {    

    return (
      <div className="App">
      <div>
      <p>Chose your color:</p>
      <button onClick={()=>this.handleBlack()}>Black</button>
      <button onClick={()=>this.handleRed()}>Red</button>
      <button onClick={()=>this.handleYellow()}>Yellow</button>
      </div>
      <canvas id="cav" width="400" height="400" style={{background: "grey"}}></canvas>
      </div>
    );
  }
}

export default App;
