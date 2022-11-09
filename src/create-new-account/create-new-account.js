// import React from "react";
// class Newaccount extends React.Component{
//     constructor(props) {
//         super(props);
    
//         this.state = { name: " ", pass: " " };
//       }
//       consoleUsername = (event) => {
//         this.setState({ name: event.target.value });
//       };
    
//       handleSubmit = (event) => {
//         event.preventDefault();
    
//         this.setState({ pass: event.target.value, name: event.target.value });
//         console.log(this.state);
//         localStorage.setItem("Credentials", JSON.stringify(this.state));
//         window.location.href = "/";
    
//         // this.props.history.push('/home/');
//         // Nav();
//       };
    
//       render() {
//         return (
//           <div className="login-main">
//             <div className="login">
//               <div className="loginform">
//                 <form onSubmit={this.handleSubmit}>
//                   <h1>LOGIN</h1>
//                   <div className="section">
//                     <input
//                       type="text"
//                       placeholder="Enter User Name"
//                       name="username"
//                       onChange={(e) => {
//                         this.setState({
//                           name: e.target.value,
//                         });
//                       }}
//                     ></input>
    
//                     <input
//                       type="password"
//                       placeholder="Enter Password"
//                       name="pass"
//                       onChange={(e) => {
//                         this.setState({
//                           pass: e.target.value,
//                         });
//                       }}
//                     ></input>
    
//                     <button
//                       type="submit"
//                       className="create-account-button"
//                       onClick={this.handleSubmit}
//                     >
//                       Log In
//                     </button>
//                   </div>
//                 </form>
//                 <div className="or">
//                   <h6> or</h6>
//                 </div>
//                 <div>
//                   <button type="submit" className="create-account-button">
//                     Create new account
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       }
// }

//     export default Newaccount; 


import React from "react";
import { Button,Modal ,Form } from "react-bootstrap";
import { store } from "../cartContext";
import './create-new-account.css';
import Notiflix from "notiflix";
class Newaccount extends React.Component{
    static contextType = store;
  constructor(props) {
    super(props);
    this.state = { name: "",
                    lastname:"",
                     pass: "" ,
                     confirmpass:"",
                };
  }
  componentDidMount() {
    const store = this.context;

    // console.log(store);
  }
  handleSubmit = (event) => {
            event.preventDefault();
        
            this.setState({ pass: event.target.value, name: event.target.value});
            console.log(this.state);
            localStorage.setItem("Credentials", JSON.stringify(this.state));
            window.location.href = "/";
        
            // this.props.history.push('/home/');
            // Nav();
          };
    render(){
        const handleClose = () => this.context.setModal(false);
       
        return(
            <>
            

      <Modal show={this.context.modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h1>LOGIN</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="text" placeholder="First Name" onChange={(e) => {
                        this.setState({
                          name: e.target.value,
                        });
                      }}/>
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Last Name(Optional)" onChange={(e) => {
                    this.setState({
                      lastname: e.target.value,
                    });
                  }} />
              <Form.Label></Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com(Optional)"
                autoFocus
                onChange={(e) => {
                    this.setState({
                      email: e.target.value,
                    });
                  }}
              />
            {/* </Form.Group> */}
            <Form.Label></Form.Label>
            {/* <Form.Group
              className=""
              controlId="exampleForm.ControlTextarea1"
            > */}
                <Form.Label></Form.Label>
                
              <Form.Control type="password" placeholder="Enter Password" rows={1} onChange={(e) => {
                        this.setState({
                          confirmpass: e.target.value,
                        });
                      }} />
              <Form.Label></Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" rows={1} onChange={(e) => {
                        this.setState({
                          pass: e.target.value,
                        });
                      }}/>
                      
                      {/* {console.log(this.state.confirmpass)} */}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Log In
          </Button>
          {/* {console.log(this.state.firstname)} */}
          <Button variant="primary" onClick={ ()=>{
            if(this.state.name != ""   ){
                if(this.state.confirmpass != ""){
                    if(this.state.pass != ""){
                if(this.state.pass===this.state.confirmpass){
               localStorage.setItem("Credentials",JSON.stringify(this.state))
               window.location.href = "/";
                }else{
                    Notiflix.Notify.failure("Passwords should be same");
                }
            }else{
                Notiflix.Notify.failure("Please enter confirm password");
            }
            }else{
                Notiflix.Notify.failure("Please enter password");
            }
            }else{
                Notiflix.Notify.failure("Please enter name");
            }
            // if(this.state.firstname != "" ){
            //     this.handleSubmit();
            //     console.log(this.state);
            // }else{
            //     console.log(this.state);
            //     Notiflix.dots("please fill details");
            // }
          }}>
          Create new account
          </Button>
        </Modal.Footer>
      </Modal>
      {/* {console.log(this.state)} */}
            </>
        )
    }
}

    export default Newaccount; 


  

