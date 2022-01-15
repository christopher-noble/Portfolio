import React, { CSSProperties, useState } from 'react';
import { Button, Card, Stack } from 'react-bootstrap';
import { Left } from 'react-bootstrap/lib/Media';
import data from '../config/workData';
import Fade from "react-reveal/Fade"
import { useSpring, animated } from 'react-spring'

const stackStyles: CSSProperties = {
    width: '100%',
    height: '100%',
}
const heading1Styles : CSSProperties = {
    marginTop: '10vh',
    marginBottom: '10vh',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 60,
  }

  const substackStyles : CSSProperties = {
      height: 'auto',
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
  }

  const imgStyles : CSSProperties = {
    height: '100%',
    width: '100%',
    objectFit: 'fill',
  }

  const subcontentStyles : CSSProperties = {
    textDecoration: 'none',
    color: 'white', 
    paddingTop: '35%',
    background: 'rgba(0, 0, 0, 0.7)', 
  }

  const textStyles : CSSProperties = {
      marginTop: 30,
  }

  const buttonStyles : CSSProperties = {
      backgroundColor: 'black',
      border: 'none',
      borderRadius: 1,
      marginTop: 30,
  }

  const cardStyles : CSSProperties = {
    width: '28rem', 
    height: 'auto',
    margin: 'auto',
  }

  const btnImgStyles: CSSProperties = {
    width: 34,
    paddingLeft: 12,
    paddingRight: 0,
    paddingBottom: 2,
}

const Work : React.FC = () =>
{

    const [isMouseInsideCovidImage, setIsMouseInsideCovidImage] = useState(false);
    const [isMouseInsideBlackpurlImage, setIsMouseInsideBlackpurlImage] = useState(false);
    const [isMouseInsideBooksImage, setIsMouseInsideBooksImage] = useState(false);

    const covidImgAnimate = useSpring({ opacity: isMouseInsideCovidImage ? 1 : 0 })
    const blackpurlImgAnimate = useSpring({ opacity: isMouseInsideBlackpurlImage ? 1 : 0 })
    const booksImgAnimate = useSpring({ opacity: isMouseInsideBooksImage ? 1 : 0 })

    const covidMouseEnter : any = () => 
    {
        setIsMouseInsideCovidImage(true);
    }
    const covidMouseLeave : any = () => 
    {
        setIsMouseInsideCovidImage(false);
    }
    const blackpurlMouseEnter : any = () => 
    {
        setIsMouseInsideBlackpurlImage(true);
    }
    const blackpurlMouseLeave : any = () => 
    {
        setIsMouseInsideBlackpurlImage(false);
    }
    const booksMouseEnter : any = () => 
    {
        setIsMouseInsideBooksImage(true);
    }
    const booksMouseLeave : any = () => 
    {
        setIsMouseInsideBooksImage(false);
    }

    return(
        <Stack style={stackStyles}>
            <p style={heading1Styles}>Work</p>
            <Stack direction="horizontal" gap={5} style={substackStyles}>
                <Card style={cardStyles} >
                    <Card.Img src="covid.jpg" alt="Covid App" style={imgStyles}/>
                    <animated.div style={covidImgAnimate}>
                        <Card.ImgOverlay className="covid" style={subcontentStyles} onMouseEnter={covidMouseEnter} onMouseLeave={covidMouseLeave}>
                                <Fade bottom when={isMouseInsideCovidImage} cascade>
                                <Card.Title>Covid Tracker</Card.Title>
                                <Card.Text style={textStyles}>
                                    This CLI app fetches data from covid19api.com and provides up-to-date 
                                    statistics on a global scale. Parameters sort results on date, countries, 
                                    cases active, recovered, and deaths. 
                                </Card.Text>
                                <Button target="_blank" href="https://github.com/christopher-noble/Covid-Tracker" style={buttonStyles}>
                                    View Code
                                    <img style={btnImgStyles} src="github-white-background.png"></img>
                                </Button>
                            </Fade>
                        </Card.ImgOverlay>
                    </animated.div>
                </Card>
                <Card style={cardStyles}>
                        <Card.Img src="knowledgebase.jpg" alt="Covid App" style={imgStyles}/>
                        <animated.div style={blackpurlImgAnimate}>
                            <Card.ImgOverlay className="blackpurl" style={subcontentStyles} onMouseEnter={blackpurlMouseEnter} onMouseLeave={blackpurlMouseLeave}>
                            <Fade bottom when={isMouseInsideBlackpurlImage} cascade>
                                <Card.Title>Blackpurl Support</Card.Title>
                                <Card.Text style={textStyles}>
                                    Using FreshDesk’s liquid templating framework, 
                                    I published an all-new user interface for Blackpurl’s support center. 
                                </Card.Text>
                                <Button target="_blank" href="https://support.blackpurl.com/support/home" style={buttonStyles}>
                                    Explore
                                </Button>
                            </Fade>
                            </Card.ImgOverlay>
                        </animated.div>
                </Card>
                <Card style={cardStyles}>
                    <Card.Img src="books.jpg" alt="Covid App" style={imgStyles}/>
                    <animated.div style={booksImgAnimate}>
                        <Card.ImgOverlay className="books" style={subcontentStyles} onMouseEnter={booksMouseEnter} onMouseLeave={booksMouseLeave}>
                            <Fade bottom when={isMouseInsideBooksImage} cascade>
                                <Card.Title>Books Plus</Card.Title>
                                <Card.Text style={textStyles}>
                                    Written in Java, this CLI app takes in various book data files, 
                                    sorts and displays to custom user requests for book, purchase, 
                                    or customer information, including cumulative pricing.
                                </Card.Text>
                                <Button target="_blank" href="https://github.com/christopher-noble/BooksPlus" style={buttonStyles}>
                                    View Code
                                    <img style={btnImgStyles} src="github-white-background.png"></img>
                                </Button>
                            </Fade>
                        </Card.ImgOverlay>
                    </animated.div>
                </Card>
            </Stack>
        </Stack>
    )
}

export default Work;