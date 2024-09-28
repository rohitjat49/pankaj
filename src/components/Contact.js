// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Contact = () => {
//   const [firstname,setfirstname]=useState('');
//   const [lastname,setlastname]=useState('');
//   const [email,setemail]=useState('');
//   const [number,setnumber]=useState('');
//   const[message,setmessage]=useState('');
  
// const handlefnText=(evt)=>{
//   setfirstname(evt.target.value);
// };
// const handlelnText=(evt)=>{
//   setlastname(evt.target.value);
// };
// const handleemailText=(evt)=>{
//   setemail(evt.target.value);
// };
// const handlenumberText=(evt)=>{
//   setnumber(evt.target.value);
// };
// const handlemessageText=(evt)=>{
//   setmessage(evt.target.value);
// };

// const handleSubmit = (event) => {
//   event.preventDefault(); // Prevent default form submission behavior
//   var obj = {
//     firstname: firstname,
//     lastname: lastname,
//     email: email,
//     number: number,
//     message: message
//   };
// fetch("http://localhost:5000/Get",{
//   method:"POST",
//   headers:{
//     "Content-Type":"application/json"
//   },
//   body:JSON.stringify(obj)
// })
// .then(response=>response.json())
// .then(data=>{
//   alert("Data submitted successfully");
// }).catch((error)=>{
// console.error("Error",error);
// });
// };

 
//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
//               }
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                 <h2>Get In Touch</h2>
//                 <form onSubmit={handleSubmit}>
//                   <Row>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="text"  placeholder="First Name" onChange={handlefnText}/>
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="text"  placeholder="Last Name" onChange={handlelnText}/>
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="email"  placeholder="Email Address" onChange={handleemailText} />
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="tel" placeholder="Phone No." onChange={handlenumberText}/>
//                     </Col>
//                     <Col size={12} className="px-1">
//                       <textarea rows="6" placeholder="Message" onChange={handlemessageText}></textarea>
//                       <button type="submit" onClick={handleSubmit}>Submit</button>
//                     </Col>
                  
//                   </Row>
//                 </form>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }




import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  
  const handleFirstNameChange = (evt) => {
    setFirstname(evt.target.value);
  };

  const handleLastNameChange = (evt) => {
    setLastname(evt.target.value);
  };

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handleNumberChange = (evt) => {
    setNumber(evt.target.value);
  };

  const handleMessageChange = (evt) => {
    setMessage(evt.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    var obj = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      number: number,
      message: message
    };
    fetch("https://portfolio-255n.onrender.com/Get",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(data => {
      alert("Data submitted successfully");
      // Refresh page after submission
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error", error);
    });
  };
 
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="First Name" value={firstname} onChange={handleFirstNameChange} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="Last Name" value={lastname} onChange={handleLastNameChange} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Email Address" value={email} onChange={handleEmailChange} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" placeholder="Phone No." value={number} onChange={handleNumberChange} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" placeholder="Message" value={message} onChange={handleMessageChange}></textarea>
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                      </Col>
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
