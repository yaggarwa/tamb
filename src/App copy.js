import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import audioSource1 from '../data/audio-numbers/1.wav';
import audioSource2 from '../data/audio-numbers/2.wav'
import audioSource3 from '../data/audio-numbers/3.wav'
import audioSource4 from '../data/audio-numbers/4.wav'
import audioSource5 from '../data/audio-numbers/5.wav'
import audioSource6 from '../data/audio-numbers/6.wav'
import audioSource7 from '../data/audio-numbers/7.wav'
import audioSource8 from '../data/audio-numbers/8.wav'
import audioSource9 from '../data/audio-numbers/9.wav'
import audioSource10 from '../data/audio-numbers/10.wav'
import audioSource11 from '../data/audio-numbers/11.wav'
import audioSource12 from '../data/audio-numbers/12.wav'
import audioSource13 from '../data/audio-numbers/13.wav'
import audioSource14 from '../data/audio-numbers/14.wav'
import audioSource15 from '../data/audio-numbers/15.wav'
import audioSource16 from '../data/audio-numbers/16.wav'
import audioSource17 from '../data/audio-numbers/17.wav'
import audioSource18 from '../data/audio-numbers/18.wav'
import audioSource19 from '../data/audio-numbers/19.wav'
import audioSource20 from '../data/audio-numbers/20.wav'
import audioSource21 from '../data/audio-numbers/21.wav'
import audioSource22 from '../data/audio-numbers/22.wav'
import audioSource23 from '../data/audio-numbers/23.wav'
import audioSource24 from '../data/audio-numbers/24.wav'
import audioSource25 from '../data/audio-numbers/25.wav'
import audioSource26 from '../data/audio-numbers/26.wav'
import audioSource27 from '../data/audio-numbers/27.wav'
import audioSource28 from '../data/audio-numbers/28.wav'
import audioSource29 from '../data/audio-numbers/29.wav'
import audioSource30 from '../data/audio-numbers/30.wav'
import audioSource31 from '../data/audio-numbers/31.wav'
import audioSource32 from '../data/audio-numbers/32.wav'
import audioSource33 from '../data/audio-numbers/33.wav'
import audioSource34 from '../data/audio-numbers/34.wav'
import audioSource35 from '../data/audio-numbers/35.wav'
import audioSource36 from '../data/audio-numbers/36.wav'
import audioSource37 from '../data/audio-numbers/37.wav'
import audioSource38 from '../data/audio-numbers/38.wav'
import audioSource39 from '../data/audio-numbers/39.wav'
import audioSource40 from '../data/audio-numbers/40.wav'
import audioSource41 from '../data/audio-numbers/41.wav'
import audioSource42 from '../data/audio-numbers/42.wav'
import audioSource43 from '../data/audio-numbers/43.wav'
import audioSource44 from '../data/audio-numbers/44.wav'
import audioSource45 from '../data/audio-numbers/45.wav'
import audioSource46 from '../data/audio-numbers/46.wav'
import audioSource47 from '../data/audio-numbers/47.wav'
import audioSource48 from '../data/audio-numbers/48.wav'
import audioSource49 from '../data/audio-numbers/49.wav'
import audioSource50 from '../data/audio-numbers/50.wav'
import audioSource51 from '../data/audio-numbers/51.wav'
import audioSource52 from '../data/audio-numbers/52.wav'
import audioSource53 from '../data/audio-numbers/53.wav'
import audioSource54 from '../data/audio-numbers/54.wav'
import audioSource55 from '../data/audio-numbers/55.wav'
import audioSource56 from '../data/audio-numbers/56.wav'
import audioSource57 from '../data/audio-numbers/57.wav'
import audioSource58 from '../data/audio-numbers/58.wav'
import audioSource59 from '../data/audio-numbers/59.wav'
import audioSource60 from '../data/audio-numbers/60.wav'
import audioSource61 from '../data/audio-numbers/61.wav'
import audioSource62 from '../data/audio-numbers/62.wav'
import audioSource63 from '../data/audio-numbers/63.wav'
import audioSource64 from '../data/audio-numbers/64.wav'
import audioSource65 from '../data/audio-numbers/65.wav'
import audioSource66 from '../data/audio-numbers/66.wav'
import audioSource67 from '../data/audio-numbers/67.wav'
import audioSource68 from '../data/audio-numbers/68.wav'
import audioSource69 from '../data/audio-numbers/69.wav'
import audioSource70 from '../data/audio-numbers/70.wav'
import audioSource71 from '../data/audio-numbers/71.wav'
import audioSource72 from '../data/audio-numbers/72.wav'
import audioSource73 from '../data/audio-numbers/73.wav'
import audioSource74 from '../data/audio-numbers/74.wav'
import audioSource75 from '../data/audio-numbers/75.wav'
import audioSource76 from '../data/audio-numbers/76.wav'
import audioSource77 from '../data/audio-numbers/77.wav'
import audioSource78 from '../data/audio-numbers/78.wav'
import audioSource79 from '../data/audio-numbers/79.wav'
import audioSource80 from '../data/audio-numbers/80.wav'
import audioSource81 from '../data/audio-numbers/81.wav'
import audioSource82 from '../data/audio-numbers/82.wav'
import audioSource83 from '../data/audio-numbers/83.wav'
import audioSource84 from '../data/audio-numbers/84.wav'
import audioSource85 from '../data/audio-numbers/85.wav'
import audioSource86 from '../data/audio-numbers/86.wav'
import audioSource87 from '../data/audio-numbers/87.wav'
import audioSource88 from '../data/audio-numbers/88.wav'
import audioSource89 from '../data/audio-numbers/89.wav'
import audioSource90 from '../data/audio-numbers/90.wav'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    var currNum = 100;
    var numGrid = [];
    var numGridState = [];
    for (let i = 1; i < 91; i++) {
      var tempNG = { num: i };
      var tmepNGS = { value: false }
      numGrid.push(tempNG);
      numGridState.push(tmepNGS);
    }
    this.state = ({
      currNum: currNum,
      numGrid: numGrid,
      numGridState: numGridState,
      banner: "Let's Start a new Game"
    });

  }
  genRandonNumber() {
    if (this.state.numGrid.length > 0) {
      var rangeup = this.state.numGrid.length;
      var randomNum = Math.floor(Math.random() * rangeup) + 1;
      var numGridState = this.state.numGridState;
      var currNum = this.state.numGrid[randomNum - 1].num;
      numGridState[currNum - 1].value = true;
      var numGrid = this.state.numGrid;
      numGrid.splice(randomNum - 1, 1);

      this.setState({
        currNum: currNum,
        numGrid: numGrid,
        numGridState: numGridState,
        banner: "Current Number - " + currNum,
      });
      this.playSound();
    } else {
      alert("This Game is Over. Click OK to start a new Game!!!");
      this.resetBoard();
    }
  }
  playSound() {
    if (this.state.currNum !== 0) {
      var audioEl = document.getElementsByClassName("audio-element")[0];
      audioEl.load();
      audioEl.play();
    }
  }
  resetBoard() {
    var currNum = 100;
    var numGrid = [];
    var numGridState = [];
    for (let i = 1; i < 91; i++) {
      var tempNG = { num: i };
      var tmepNGS = { value: false }
      numGrid.push(tempNG);
      numGridState.push(tmepNGS);
    }
    this.setState({
      currNum: currNum,
      numGrid: numGrid,
      numGridState: numGridState,
      banner: "Let's Start a new Game",
    });
  }
  render() {
    console.log(this.state);
    var numGrid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
      61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
      81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
    return (
      <React.Fragment>
        <Grid container spacing={3} flexgrow={1} style={{padding:5}} alignContent={'flex-start'}>
          <Grid container item lg={10} spacing={2}  justify='center'>
            <br />
            <Grid item lg={12} >
              <Paper elevation={2} style={{height:80}}  textalign={'center'}>
                <Typography variant="h2" align={'center'} >
                  {this.state.banner}
                </Typography>
              </Paper>
            </Grid>
            <Grid container item xs={12} direction={'row'} justify={'center'} spacing={2}>

              {
                numGrid.map((value) =>
                  <Grid item key={value}>
                    <Button variant="contained" color={this.state.numGridState[value - 1].value === false ? "primary" : "secondary"}
                      style={{ height: 37, width: 85 }}>
                      <Typography variant="h5" align={'center'} >
                        {value}
                      </Typography>
                    </Button>
                  </Grid>
                )
              }

            </Grid>
          </Grid>
          <Grid container item lg={2} spacing={2} direction={'row'} alignContent={'flex-start'} >
            <Grid item lg={12}>
              <Paper elevation={0} style={{ padding: 1 }} hidden={false}>
                <Typography variant="h2" align={'center'} color={'textPrimary'} gutterBottom>  &nbsp;
                </Typography>
              </Paper>
            </Grid>
            <Grid item lg={12}>
              <Button variant="contained" onClick={() => this.genRandonNumber()}
                style={{ height: 50, width: 100 }}>
                New Number</Button>
            </Grid>
            <Grid item lg={12}>
              <Button variant="contained" onClick={() => this.resetBoard()}
                style={{ height: 50, width: 100 }}>
                Reset Board</Button>
            </Grid>
          </Grid>
        </Grid>
        {
          {
            1: <audio className="audio-element"> <source src={audioSource1} type="audio/wav"></source> </audio>,
            2: <audio className="audio-element"> <source src={audioSource2} type="audio/wav"></source> </audio>,
            3: <audio className="audio-element"> <source src={audioSource3} type="audio/wav"></source> </audio>,
            4: <audio className="audio-element"> <source src={audioSource4} type="audio/wav"></source> </audio>,
            5: <audio className="audio-element"> <source src={audioSource5} type="audio/wav"></source> </audio>,
            6: <audio className="audio-element"> <source src={audioSource6} type="audio/wav"></source> </audio>,
            7: <audio className="audio-element"> <source src={audioSource7} type="audio/wav"></source> </audio>,
            8: <audio className="audio-element"> <source src={audioSource8} type="audio/wav"></source> </audio>,
            9: <audio className="audio-element"> <source src={audioSource9} type="audio/wav"></source> </audio>,
            10: <audio className="audio-element"> <source src={audioSource10} type="audio/wav"></source> </audio>,
            11: <audio className="audio-element"> <source src={audioSource11} type="audio/wav"></source> </audio>,
            12: <audio className="audio-element"> <source src={audioSource12} type="audio/wav"></source> </audio>,
            13: <audio className="audio-element"> <source src={audioSource13} type="audio/wav"></source> </audio>,
            14: <audio className="audio-element"> <source src={audioSource14} type="audio/wav"></source> </audio>,
            15: <audio className="audio-element"> <source src={audioSource15} type="audio/wav"></source> </audio>,
            16: <audio className="audio-element"> <source src={audioSource16} type="audio/wav"></source> </audio>,
            17: <audio className="audio-element"> <source src={audioSource17} type="audio/wav"></source> </audio>,
            18: <audio className="audio-element"> <source src={audioSource18} type="audio/wav"></source> </audio>,
            19: <audio className="audio-element"> <source src={audioSource19} type="audio/wav"></source> </audio>,
            20: <audio className="audio-element"> <source src={audioSource20} type="audio/wav"></source> </audio>,
            21: <audio className="audio-element"> <source src={audioSource21} type="audio/wav"></source> </audio>,
            22: <audio className="audio-element"> <source src={audioSource22} type="audio/wav"></source> </audio>,
            23: <audio className="audio-element"> <source src={audioSource23} type="audio/wav"></source> </audio>,
            24: <audio className="audio-element"> <source src={audioSource24} type="audio/wav"></source> </audio>,
            25: <audio className="audio-element"> <source src={audioSource25} type="audio/wav"></source> </audio>,
            26: <audio className="audio-element"> <source src={audioSource26} type="audio/wav"></source> </audio>,
            27: <audio className="audio-element"> <source src={audioSource27} type="audio/wav"></source> </audio>,
            28: <audio className="audio-element"> <source src={audioSource28} type="audio/wav"></source> </audio>,
            29: <audio className="audio-element"> <source src={audioSource29} type="audio/wav"></source> </audio>,
            30: <audio className="audio-element"> <source src={audioSource30} type="audio/wav"></source> </audio>,
            31: <audio className="audio-element"> <source src={audioSource31} type="audio/wav"></source> </audio>,
            32: <audio className="audio-element"> <source src={audioSource32} type="audio/wav"></source> </audio>,
            33: <audio className="audio-element"> <source src={audioSource33} type="audio/wav"></source> </audio>,
            34: <audio className="audio-element"> <source src={audioSource34} type="audio/wav"></source> </audio>,
            35: <audio className="audio-element"> <source src={audioSource35} type="audio/wav"></source> </audio>,
            36: <audio className="audio-element"> <source src={audioSource36} type="audio/wav"></source> </audio>,
            37: <audio className="audio-element"> <source src={audioSource37} type="audio/wav"></source> </audio>,
            38: <audio className="audio-element"> <source src={audioSource38} type="audio/wav"></source> </audio>,
            39: <audio className="audio-element"> <source src={audioSource39} type="audio/wav"></source> </audio>,
            40: <audio className="audio-element"> <source src={audioSource40} type="audio/wav"></source> </audio>,
            41: <audio className="audio-element"> <source src={audioSource41} type="audio/wav"></source> </audio>,
            42: <audio className="audio-element"> <source src={audioSource42} type="audio/wav"></source> </audio>,
            43: <audio className="audio-element"> <source src={audioSource43} type="audio/wav"></source> </audio>,
            44: <audio className="audio-element"> <source src={audioSource44} type="audio/wav"></source> </audio>,
            45: <audio className="audio-element"> <source src={audioSource45} type="audio/wav"></source> </audio>,
            46: <audio className="audio-element"> <source src={audioSource46} type="audio/wav"></source> </audio>,
            47: <audio className="audio-element"> <source src={audioSource47} type="audio/wav"></source> </audio>,
            48: <audio className="audio-element"> <source src={audioSource48} type="audio/wav"></source> </audio>,
            49: <audio className="audio-element"> <source src={audioSource49} type="audio/wav"></source> </audio>,
            50: <audio className="audio-element"> <source src={audioSource50} type="audio/wav"></source> </audio>,
            51: <audio className="audio-element"> <source src={audioSource51} type="audio/wav"></source> </audio>,
            52: <audio className="audio-element"> <source src={audioSource52} type="audio/wav"></source> </audio>,
            53: <audio className="audio-element"> <source src={audioSource53} type="audio/wav"></source> </audio>,
            54: <audio className="audio-element"> <source src={audioSource54} type="audio/wav"></source> </audio>,
            55: <audio className="audio-element"> <source src={audioSource55} type="audio/wav"></source> </audio>,
            56: <audio className="audio-element"> <source src={audioSource56} type="audio/wav"></source> </audio>,
            57: <audio className="audio-element"> <source src={audioSource57} type="audio/wav"></source> </audio>,
            58: <audio className="audio-element"> <source src={audioSource58} type="audio/wav"></source> </audio>,
            59: <audio className="audio-element"> <source src={audioSource59} type="audio/wav"></source> </audio>,
            60: <audio className="audio-element"> <source src={audioSource60} type="audio/wav"></source> </audio>,
            61: <audio className="audio-element"> <source src={audioSource61} type="audio/wav"></source> </audio>,
            62: <audio className="audio-element"> <source src={audioSource62} type="audio/wav"></source> </audio>,
            63: <audio className="audio-element"> <source src={audioSource63} type="audio/wav"></source> </audio>,
            64: <audio className="audio-element"> <source src={audioSource64} type="audio/wav"></source> </audio>,
            65: <audio className="audio-element"> <source src={audioSource65} type="audio/wav"></source> </audio>,
            66: <audio className="audio-element"> <source src={audioSource66} type="audio/wav"></source> </audio>,
            67: <audio className="audio-element"> <source src={audioSource67} type="audio/wav"></source> </audio>,
            68: <audio className="audio-element"> <source src={audioSource68} type="audio/wav"></source> </audio>,
            69: <audio className="audio-element"> <source src={audioSource69} type="audio/wav"></source> </audio>,
            70: <audio className="audio-element"> <source src={audioSource70} type="audio/wav"></source> </audio>,
            71: <audio className="audio-element"> <source src={audioSource71} type="audio/wav"></source> </audio>,
            72: <audio className="audio-element"> <source src={audioSource72} type="audio/wav"></source> </audio>,
            73: <audio className="audio-element"> <source src={audioSource73} type="audio/wav"></source> </audio>,
            74: <audio className="audio-element"> <source src={audioSource74} type="audio/wav"></source> </audio>,
            75: <audio className="audio-element"> <source src={audioSource75} type="audio/wav"></source> </audio>,
            76: <audio className="audio-element"> <source src={audioSource76} type="audio/wav"></source> </audio>,
            77: <audio className="audio-element"> <source src={audioSource77} type="audio/wav"></source> </audio>,
            78: <audio className="audio-element"> <source src={audioSource78} type="audio/wav"></source> </audio>,
            79: <audio className="audio-element"> <source src={audioSource79} type="audio/wav"></source> </audio>,
            80: <audio className="audio-element"> <source src={audioSource80} type="audio/wav"></source> </audio>,
            81: <audio className="audio-element"> <source src={audioSource81} type="audio/wav"></source> </audio>,
            82: <audio className="audio-element"> <source src={audioSource82} type="audio/wav"></source> </audio>,
            83: <audio className="audio-element"> <source src={audioSource83} type="audio/wav"></source> </audio>,
            84: <audio className="audio-element"> <source src={audioSource84} type="audio/wav"></source> </audio>,
            85: <audio className="audio-element"> <source src={audioSource85} type="audio/wav"></source> </audio>,
            86: <audio className="audio-element"> <source src={audioSource86} type="audio/wav"></source> </audio>,
            87: <audio className="audio-element"> <source src={audioSource87} type="audio/wav"></source> </audio>,
            88: <audio className="audio-element"> <source src={audioSource88} type="audio/wav"></source> </audio>,
            89: <audio className="audio-element"> <source src={audioSource89} type="audio/wav"></source> </audio>,
            90: <audio className="audio-element"> <source src={audioSource90} type="audio/wav"></source> </audio>
          }[this.state.currNum] || <audio className="audio-element"> <source src={audioSource1} type="audio/wav"></source> </audio>
        }
      </React.Fragment >
    );
  }
}
export default App;