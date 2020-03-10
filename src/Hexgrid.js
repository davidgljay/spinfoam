import React from 'react';
const {sin, cos, PI} = Math;

const hexCorners = (center, size) => {
  const points = [0, 1, 2, 3, 4, 5].reduce((text, i) => {
    var angle_deg = 60 * i
    var angle_rad = PI / 180 * angle_deg
    return text + ` ${center.x + size * cos(angle_rad)},${center.y + size * sin(angle_rad)}`
  }, '')
  return points
}

const getStyle = (i, j, active, trail) => {
  console.log(trail);
  if (i === active[0] && j === active[1]) {
    return {...styles.hexagon, ...styles.active}
  }
  else {
    return {...styles.hexagon, opacity: trail[i][j] * .01}
  }
}

const Hexgrid = (props) =>
{
  const {width, height, size, grid, active, trail} = props

  return (
    <div className="App">
      <header className="App-header">
      <svg id="visualization"
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        {
          grid.map(
            (n, i) => n.map((m, j) =>
              <polygon
                key={`${i},${j}`}
                points={hexCorners({x: size * (i+1) * 1.5, y: size * ((i%2 + 1) + (j+1) * 1.75)}, size)}
                style={getStyle(i,j, active, trail)}/>
            )
          )
        }

      </svg>
      </header>
    </div>
  );
}

export default Hexgrid;

const styles = {
  hexagon: {
    fill: 'lightgrey',
    stroke:'purple',
    strokeWidth:2
  },
  active: {
    fill: 'purple'
  }
};
