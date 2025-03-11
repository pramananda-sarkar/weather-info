import React from 'react'
import LeftSide from '../components/weather/LeftSide'
import RightSide from '../components/weather/RightSide'
import Graph from '../components/weather/Graph'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <div>
            <LeftSide temperature={0} wind={0} humidity={0} pressure={0}  />
            <RightSide />
        </div>
        <Graph />
    </div>
  )
}

export default page