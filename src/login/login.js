import React from "react";
import { Link } from "react-router-dom";
import { store } from "../cartContext";
import Newaccount from "../create-new-account/create-new-account";
import "../login/login.css";
import Notiflix from "notiflix";

// import Nav from './nav';

class Login extends React.Component {
  static contextType = store;
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      pass: "",
    };
  }
  componentDidMount() {
    const store = this.context;
  }
  consoleUsername = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ pass: event.target.value, name: event.target.value });
    console.log(this.state);
    localStorage.setItem("Credentials", JSON.stringify(this.state));
    window.location.href = "/";

    // this.props.history.push('/home/');
    // Nav();
  };

  render() {
    const handleClose = () => this.context.setModal(false);
    const handleShow = () => this.context.setModal(true);
    return (
      <div className="login-main">
        <div className="login">
          <div className="loginform">
            <form onSubmit={this.handleSubmit}>
              <h1>LOGIN</h1>
              <div className="section">
                <input
                  type="text"
                  placeholder="Enter User Name"
                  name="username"
                  minLength={5}
                  required
                  onChange={(e) => {
                    this.setState({
                      name: e.target.value,
                    });
                  }}
                ></input>

                <input
                  type="password"
                  placeholder="Enter Password"
                  name="pass"
                  minLength={6}
                  onChange={(e) => {
                    this.setState({
                      pass: e.target.value,
                    });
                  }}
                  required
                ></input>
                {console.log(this.state)}

                <button
                  type="submit"
                  className="create-account-button"
                  onClick={(event) => {
                    if (this.state.name != ""  ) {
                      if(this.state.pass != ""){
                        if(this.state.pass.length != 6){
                      this.handleSubmit();
                        }else{
                          Notiflix.Notify.failure("Password");
                        }
                    } else {
                      Notiflix.Notify.failure("Please enter password");
                    }
                  }else{
                    Notiflix.Notify.failure("Please enter name");
                  }
                  }}
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="or">
              <h6> or</h6>
            </div>
            <div>
              <button
                type="submit"
                className="create-account-button"
                onClick={handleShow}
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
        <Newaccount />
      </div>
    );
  }
}

export default Login;
