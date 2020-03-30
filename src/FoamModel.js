
import React, {Component} from 'react'
import Hexgrid from './Hexgrid'
import EntropyGraph from './EntropyGraph'
import Slider from '@material-ui/core/Slider'

class FoamModel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timer: null,
      active: [this.props.size/2,this.props.size/2],
      grid: [],
      trail: [],
      turns: 0,
      trailEntropyLog: [0],
      gridEntropy: 0,
      bumpiness: 1,
      checkSlider: false,
      sliderTimer: null,
    };

    this.transitions = [
      [-1,-1],
      [0,-1],
      [0,1],
      [1,1],
      [1,0],
      [-1,0],
      [0,0]
    ]

    this.setgrid = (size) => {
      // Create an sizexsize grid. Each grid point has probabilities of jumping
      // into 1 of 6 adjacent hexes.
      const {bumpiness} = this.state
      let grid = []
      let trail = []
      let gridEntropy = 0
      for (var i = 0; i < size; i++) {
        grid[i] = []
        trail[i] = []
        for (var j = 0; j < size; j++) {
          grid[i][j] = []
          trail[i][j] = 0
          let sum = 0
          for (var k = 0; k < 6; k++) {
            grid[i][j][k] = Math.random() ** bumpiness
            sum += grid[i][j][k]
          }
          for (k = 0; k < 6; k++) {
            grid[i][j][k] = grid[i][j][k]/sum
            gridEntropy += grid[i][j][k] * Math.log(grid[i][j][k])
          }
        }
      }
      this.setState({grid, trail, gridEntropy})
    }

    this.checkSlider = () => {
      const {checkSlider, timer} = this.state
      const {size} = this.props
      if (!checkSlider) {
        return
      }
      clearInterval(timer)
      this.setState({
        active: [this.props.size/2,this.props.size/2],
        turns: 0,
        trailEntropyLog: [0],
        gridEntropy: 0,
        checkSlider: false
      })
      this.setgrid(size)
      this.setState({
        timer: setInterval(() => this.jump(), 50)
      })
    }

    this.jump = () => {
      const {active, grid, trail, turns, trailEntropyLog} = this.state
      const probs = grid[active[0]][active[1]]
      const dice = Math.random()
      let sum = 0
      let jump
      for (var i = 0; i < probs.length; i++) {
        sum += probs[i]
        if (sum > dice) {
          jump = i
          break
        }
      }
      const transition = this.transitions[jump]
      const l = grid.length
      const newActive = [(active[0] + transition[0] + l)%l, (active[1] + transition[1] + l)%l]
      trail[newActive[0]][newActive[1]] += 1
      if (turns%100 === 1) {
        let trailEntropy = 0
        for (i = 0; i < trail.length; i++) {
          for (var j = 0; j < trail[i].length; j++) {
            trailEntropy += trail[i][j] > 0 ? trail[i][j]/turns * Math.log(trail[i][j]/turns) : 0
          }
        }
        this.setState({trailEntropyLog: trailEntropyLog.concat(trailEntropy)})
      }
      this.setState({active: newActive, trail, turns: turns + 1})
    }

    this.handleSlider = (e, v) => {
      this.setState({
        bumpiness: v,
        checkSlider: true
      })
    }

  }

  componentDidMount() {
    const {size} = this.props
    this.setgrid(size)
    this.setState({
      timer: setInterval(() => this.jump(), 50),
      sliderTimer: setInterval(() => this.checkSlider(), 500)
    })

  }

  componentWillUnmount() {
    const {timer, sliderTimer} = this.state
    clearInterval(timer)
    clearInterval(sliderTimer)

  }

  render () {
    const {active, grid, trail, trailEntropyLog, turns, bumpiness} = this.state
    return <div>
      <div style={styles.header}>
      <h2>A Model Evolutionary System</h2>
      <div style={styles.headerText}>
        The purple hex traverses a landscape with randomly defined probabilities.<br/>
        The landscape can be made "flat" (probabilities are similar) or "bumpy" (probabilities diverge).
      </div>
      </div>
      <div style={styles.sliderContainer}>
        <div>
          Flat
        </div>
        <div style={styles.slider}>
          <Slider
            className='bumpinessSlider'
            value={bumpiness}
            aria-labelledby="Bumpiness"
            onChange={this.handleSlider}
            min={0}
            step={.1}
            max={10} />
        </div>
        <div>
          Bumpy
        </div>
      </div>
      <Hexgrid
        width={650}
        height={650}
        size={7}
        active={active}
        grid={grid}
        trail={trail}
        turns={turns} />
        {
          trailEntropyLog && <EntropyGraph
            width={800}
            height={100}
            trailEntropyLog={trailEntropyLog} />
        }
      </div>
  }
}


export default FoamModel;

const styles={
  header: {
    textAlign: "center",
    maxWidth: 650,
    margin: 40
  },
  headerText: {
    fontSize: 16
  },
  sliderContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  slider: {
    flex: 1,
    margin: 20
  }

}
