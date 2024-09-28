// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import img4  from "../assets/img/project-img4.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const projects = [
//     {
      
//         title: "Water For All",
//         description: <span dangerouslySetInnerHTML={{ __html: "Check out the project <a href='https://water-beige.vercel.app/' target='_blank'>HERE</a>." }} />,
//         imgUrl: img4,
      
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: img4,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>Each work of my projects is a unique endeavor, 
//                   where I have transformed new ideas into reality. 
//                   The essence of my efforts is to develop innovative 
//                   solutions that solve problems and make people's lives better. 
//                   My aim is not only to impress supporters but also to inspire 
//                   them and show them new thoughts and perspectives. Each project is a unique story, 
//                   a unique puzzle, and I present it as a reflection of my experiences and knowledge.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Projects</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Resume</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="section">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }





// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import resume1 from "../assets/img/resume1.png";
// import resume2 from "../assets/img/resume2.png";
// import img4 from "../assets/img/project-img4.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const projects = [
//     {
//       title: "Water For All",
//       description: <span dangerouslySetInnerHTML={{ __html: "Check out the project <a href='https://water-beige.vercel.app/' target='_blank'>HERE</a>." }} />,
//       imgUrl: img4,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: img4,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                   <h2>Projects</h2>
//                   <p>Each work of my projects is a unique endeavor,
//                     where I have transformed new ideas into reality.
//                     The essence of my efforts is to develop innovative
//                     solutions that solve problems and make people's lives better.
//                     My aim is not only to impress supporters but also to inspire
//                     them and show them new thoughts and perspectives. Each project is a unique story,
//                     a unique puzzle, and I present it as a reflection of my experiences and knowledge.</p>
//                   <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                     <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                       <Nav.Item>
//                         <Nav.Link eventKey="first">Projects</Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link eventKey="second">Tab</Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link eventKey="third">Resume</Nav.Link>
//                       </Nav.Item>
//                     </Nav>
//                     <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                       <Tab.Pane eventKey="first">
//                         <Row>
//                           {projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                               />
//                             )
//                           })}
//                         </Row>
//                       </Tab.Pane>
//                       <Tab.Pane eventKey="second">
//                         <p>Content for Tab </p>
//                       </Tab.Pane>
//                       <Tab.Pane eventKey="third">
//                       <img src={resume2} alt="Resume" style={{ width: '60%', height: '10%', marginLeft: '200px' }} />
//                       <img src={resume1} alt="Resume" style={{ width: '60%', height: '10%', marginLeft: '200px' }} />
//                     </Tab.Pane>
//                     </Tab.Content>
//                   </Tab.Container>
//                 </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2} alt="background"></img>
//     </section>
//   )
// }




import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import resume1 from "../assets/img/resume1.png";
import resume2 from "../assets/img/resume2.png";
import img4 from "../assets/img/project-img4.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Water For All",
      description: <span dangerouslySetInnerHTML={{ __html: "Check out the project <a href='https://water-beige.vercel.app/' target='_blank'>HERE</a>." }} />,
      imgUrl: img4,
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
      imgUrl: img4,
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
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Each work of my projects is a unique endeavor,
                    where I have transformed new ideas into reality.
                    The essence of my efforts is to develop innovative
                    solutions that solve problems and make people's lives better.
                    My aim is not only to impress supporters but also to inspire
                    them and show them new thoughts and perspectives. Each project is a unique story,
                    a unique puzzle, and I present it as a reflection of my experiences and knowledge.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Resume</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Content for Tab</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="d-flex justify-content-center">
                          <img src={resume2} alt="Resume" style={{ maxWidth: '100%', height: '360px' }} />
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                          <img src={resume1} alt="Resume" style={{ maxWidth: '100%', height: '10px' }} />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}
