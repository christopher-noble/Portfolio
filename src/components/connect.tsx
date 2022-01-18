import React, { CSSProperties, useState } from 'react'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'

import data from '../data/connectData';
import "../styles/connectStyles.css";
import { useMediaQuery } from 'react-responsive';

const buttonStyles: CSSProperties = {
  marginTop: 50,
  width: '100%',
  color: 'white',
}

const textStyles: CSSProperties = {
  fontSize: '80%',
  width: '500%',
  height: '100%',
  marginTop: -9,
  marginLeft: -20
}

const smallScreenStyles: CSSProperties = {

}

const ConnectWithMe : React.FC = () => 
{
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const [open, set] = useState(false)

  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: 'black' },
    to: {
      size: open ? '60%' : '20%',
      background: open ? 'white' : 'black',
    },
  })

  const transApi = useSpringRef()
  const linkTransition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])

  return (
    <div style={buttonStyles} className="wrapper">
      
      <animated.div
        style={{ ...rest, width: size, height: size, position: 'relative' }}
        className="container"
        onClick={() => set(open => !open)}>
        {linkTransition((style, item) => (
          <animated.img
            className="item"
            src={item.img} 
            style={{...style}}
            onClick={() => window.open(item.url)}
          />
        ))}
        {
          !open ? <p style={textStyles}>CONNECT WITH ME</p> : ''
        }
          
      </animated.div>
    </div>
  )
}

export default ConnectWithMe;
