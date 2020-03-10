
import React, {Component} from 'react'
import Hexgrid from './Hexgrid'

class FoamModel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timer: null,
      active: [0,0],
      grid: [],
      trail: [],
      turns: 0,
      trailEntropyLog: [0],
      gridEntropy: 0
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
          for (var k = 0; k < 7; k++) {
            grid[i][j][k] = Math.random()
            sum += grid[i][j][k]
          }
          for (var k = 0; k < 7; k++) {
            grid[i][j][k] = grid[i][j][k]/sum
            gridEntropy += grid[i][j][k] * Math.log(grid[i][j][k])
          }
        }
      }
      this.setState({grid, trail, gridEntropy})
    }

    this.jump = () => {
      const {active, grid, trail, turns, gridEntropy, trailEntropyLog} = this.state
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
        for (var i = 0; i < trail.length; i++) {
          for (var j = 0; j < trail[i].length; j++) {
            trailEntropy += trail[i][j] > 0 ? trail[i][j]/turns * Math.log(trail[i][j]/turns) : 0
          }
        }
        console.log(trailEntropy, trailEntropy - trailEntropyLog[trailEntropyLog.length-1]);
        this.setState({trailEntropyLog: trailEntropyLog.concat(trailEntropy)})
      }
      this.setState({active: newActive, trail, turns: turns + 1})
    }

  }

  componentDidMount() {
    const {size} = this.props
    this.setgrid(size)
    this.setState({
      timer: setInterval(() => this.jump(), 50)
    })

  }

  componentWillUnmount() {
    this.state.timer()

  }

  render () {
    const {active, grid, trail, turns} = this.state
    return <Hexgrid
        width={800}
        height={800}
        size={7}
        active={active}
        grid={grid}
        trail={trail}
        turns={turns}
      />
  }
}


export default FoamModel;
