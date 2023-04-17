import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/22.png";
import projImg2 from "../assets/img/33.png";
import projImg3 from "../assets/img/44.png";
import projImg4 from "../assets/img/background-img1.png";
import projImg5 from "../assets/img/background-img2.png";
import projImg6 from "../assets/img/background-img3.png";
import projImg7 from "../assets/img/12.jpg";
import projImg8 from "../assets/img/oimg2.png";
import projImg9 from "../assets/img/oimg3.png";
import projImg10 from "../assets/img/10.jpg";
import projImg11 from "../assets/img/11.png";
import projImg12 from "../assets/img/14.png";
import projImg13 from "../assets/img/Landing22.png";
import projImg14 from "../assets/img/Affilate33.png";
import projImg15 from "../assets/img/Rewards44.png";
import projImg16 from "../assets/img/Free Coins55.png";
import projImg17 from "../assets/img/Profile66.png";
import projImg18 from "../assets/img/div77.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
      <section className="project" id="project">
        <Container>
          <Row>
            <Col xs={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                      <h2>Projects</h2>
                      <p>Welcome to my portfolio, where visual elements take center stage. As a designer and creative professional, I've curated a collection of my best work which is presented in a minimalist design that emphasizes the pieces themselves. Each case study highlights my process and approach to challenges, providing a window into both my skills and mindset. Whether you're an employer or potential client, I hope that my portfolio will make an impact and demonstrate what I can bring to your team or project.</p>
                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                          <Tab.Pane eventKey="first">
                            <Row>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg1} alt="Project 1" />
                              </Col>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg2} alt="Project 2" />
                              </Col>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg3} alt="Project 3" />
                              </Col>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg4} alt="Project 4" />
                              </Col>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg5} alt="Project 5" />
                              </Col>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg6} alt="Project 6" />
                              </Col>
                            </Row>

                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <Row>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg7} alt="Project 7" />
                              </Col>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg8} alt="Project 8" />
                              </Col>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg9} alt="Project 9" />
                              </Col>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg10} alt="Project 10" />
                              </Col>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg11} alt="Project 11" />
                              </Col>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg12} alt="Project 12" />
                              </Col>
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <Row>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg13} alt="Project 13" />
                              </Col>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg14} alt="Project 14" />
                              </Col>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg15} alt="Project 15" />
                              </Col>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg16} alt="Project 16" />
                              </Col>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg17} alt="Project 17" />
                              </Col>
                              <Col xs={12} md={6} lg={4} className="project-img custom-gutter">
                                <img src={projImg18} alt="Project 18" />
                              </Col>
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
  )
}
