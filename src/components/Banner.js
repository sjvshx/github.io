import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "3D Designer", "Web Designer", "UI Designer" ];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <span className="tagline">Welcome to my Portfolio</span>
                      <h1>{`大家好，我是林璟岑`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "3D 设计师", "视觉设计师", "UI 设计师" ]'> <span className="wrap">{text}</span></span></h1>

                      <p className="banner-text">Hello! I am a highly motivated designer with 3 years of experience in the industry. My passion for design has always been fueled by a dedication to producing top-quality work that exceeds expectations. Throughout my career, I have taken an end-to-end approach to design, consistently delivering exceptional results from product analysis through to implementation.
                        I stay up-to-date with the latest design trends and apply those insights to improve my craft, ensuring that each project I undertake is innovative and perfectly aligned with current market demands. Demonstrating a strong sense of product awareness and an innate ability to analyze complex ideas with precision, I'm able to create designs that are both aesthetically pleasing and highly functional.
                        My proficiency in designing for multiple platforms according to their specific guidelines has earned me a reputation as a versatile designer. I believe that my sharp eye for detail, high standards, and unwavering commitment to quality make me an asset to any team or project.</p>

                      <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                    </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img src={headerImg} alt="header-img"/>
                    </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
  )
}
