
import React, {Component} from 'react'

class EntropyGraph extends Component {

  constructor(props) {
    super(props);

    this.getshape = trailEntropyLog => {
      const {width, height} = this.props
      let pointsArray = [[0,height]]
      let min = 0
      min = trailEntropyLog.reduce(val => min > val ? val : min, 0)
      for (var i = 0; i < trailEntropyLog.length; i++) {
        pointsArray.concat([height - trailEntropyLog[i]/min * -1, width / 100 * i])
      }
      return pointsArray.map(point => point.join(',')).join(' ')
    }
  }

  render () {
    const {trailEntropyLog, width, height} = this.props
    return <div>
          <svg id="entropGraph"
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <polygon points={this.getshape(trailEntropyLog)} style={styles.entropyGraph} />
          </svg>
        </div>
  }
}

export default EntropyGraph

const styles={
  entropyGraph: {
    fill: 'purple'
  }
}
