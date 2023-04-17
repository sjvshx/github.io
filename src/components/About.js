import React from 'react';
import Carousel from 'react-multi-carousel';
import me from '../assets/img/me.png';
import Image2 from '../assets/img/Image2.jpg';
import Image3 from '../assets/img/Image3.jpg';
import colorSharp from '../assets/img/color-sharp.png';
import pdfResume from '../assets/documents/linjingcen CV.pdf';

// 定义自定义导航点的组件
const CustomDot = ({ onMove, index, active }) => {
    return (
        <button
            style={{
                backgroundColor: active ? 'orange' : 'grey',
                width: active ? '20px' : '10px',
                height: active ? '20px' : '10px',
                borderRadius: 50,
                margin: '0 10px',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
            }}
            onClick={() => onMove(index)}
        />
    );
};

// 定义 About 组件
export const About = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const downloadResume = () => {
        const element = document.createElement('a');
        element.setAttribute('href', pdfResume);
        element.setAttribute('download', 'resume.pdf');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <section className="About" id="About">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                        <div className="About-bx wow zoomIn">
                            <h2>About</h2>
                            <p className="about-info">
                                Hobbies: play games, learn new things, eat delicious food and travel
                                <br />
                                fullName: jingcen Lin
                                <br />
                                phone: +86 139 5973 1982
                                <br />
                                Email: xintong836114@163.com
                                <br />
                                Setting: 1998.09.13
                                <br />
                                region: China
                                <br />
                                language: Chinese, English
                            </p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme About-slider"
                            >
                                <div className="carousel-container">
                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}
                                        dotListClass="custom-dot-list-style"
                                        customDot={<CustomDot />}
                                    >
                                        <div className="item">
                                            <img src={me} alt="Image 1" />
                                        </div>
                                        {/* ... */}
                                    </Carousel>

                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}
                                        dotListClass="custom-dot-list-style"
                                        customDot={<CustomDot />}
                                    >
                                        <div className="item">
                                            <img src={Image2} alt="Image 2" />
                                        </div>
                                        {/* ... */}
                                    </Carousel>

                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}
                                        dotListClass="custom-dot-list-style"
                                        customDot={<CustomDot />}
                                    >
                                        <div className="item">
                                            <img src={Image3} alt="Image 3" />
                                        </div>
                                        {/* ... */}
                                    </Carousel>
                                </div>
                            </Carousel>
                            <button className="btn download-btn" onClick={downloadResume}>
                                <span className="download-icon"></span>
                                <span className="download-label">Download My CV</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="background-image-left"
                src={colorSharp}
                alt="background"
            />
        </section>
    );
};
