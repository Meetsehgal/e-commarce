import React from "react";

import { Link } from "react-router-dom";
import "../nav/nav.css";
import { Navbar, Nav, Offcanvas, Container, Badge } from "react-bootstrap";
import { Button, NavDropdown, Form } from "react-bootstrap";
import { store } from "../cartContext";
import Slider from "../slider/slider";
// import { useContext } from "react";
import {
  faCartArrowDown,
  faHeart,
  faIdCard,
  faPowerOff,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Cart from "../cart/cart";
// import { Route, Link, BrowserRouter as Router,NavLink } from "react-router-dom";
class Main extends React.Component {
  static contextType = store;
  constructor(props) {
    super(props);
    this.state = {
      features: ["meet", "manmeet", "sehgal"],
    };
  }
  componentDidMount() {
    const store = this.context;

    // console.log(store);
  }

  handleLogout = () => {
    localStorage.removeItem("Credentials");
    window.location.href = "/";
  };

  render() {
    // console.log(this.context.act);
    const handleClose = () => this.context.setShow(false);
    const handleShow = () => this.context.setShow(true);
    const handleClose1 = () => this.context.setShow1(false);
    const handleShow1 = () => this.context.setShow1(true);
    return (
      <>
        {/* <div className="backgrou"></div> */}
        {/* <div className="preview_head"> */}
        {/* <img
            src="https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg"
            className="preview_header_log"
            alt=""
          />
          <button className="preview_header_button">Buy now</button> */}
        {/* </div> */}

        {/* <img
          src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-rectangle.png"
          class="child-img"
          alt=""
        />
        <img
          src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-layer-red.png"
          className="child1-image"
          alt=""
        ></img> */}

        <div className="main">
          <Navbar expand="false" className="mb-3">
            <Container fluid>
              {/* <div className="row bg-dark"> */}

              {/* <Navbar.Offcanvas
                id={`offcanvasNavbar1-expand`}
                aria-labelledby={`offcanvasNavbarLabel`}
              > */}
              <Offcanvas show={this.context.show1} onHide={handleClose1}>
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                  <Nav className="justify-content-end">
                    <Nav.Link href="/">home</Nav.Link>
                    <Nav.Link href="#action2">shopify themes</Nav.Link>
                    <Nav.Link href="">shopify module</Nav.Link>
                    <Nav.Link href="">services</Nav.Link>
                    <Nav.Link href="">showcase</Nav.Link>
                    <Nav.Link href="">blog</Nav.Link>
                    <Nav.Link href="">support</Nav.Link>
                    <Nav.Link href="">demo</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Offcanvas>
              {/* </Navbar.Offcanvas> */}
            </Container>
          </Navbar>

          {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
          <Navbar expand="lg" className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#" className="order-2 order-lg-1">
                <div className="imag  ps-4">
                  <img
                    src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/ella-logo-retina.png"
                    alt=""
                  ></img>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand`}
                className="order-1"
              />
              <Navbar.Offcanvas
                className="order-lg-2"
                id={`offcanvasNavbar-expand`}
                aria-labelledby={`offcanvasNavbarLabel-expand`}
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand`}
                  ></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="  flex-grow-1 pe-3">
                    {/* second div */}

                    {/* <div className="col-1"> */}

                    {/* </div> */}

                    {/* third div */}

                    {/* <div className="col-6 text-start"> */}
                    <Nav className="mx-auto justify-content-end meet">
                      <Link
                        to="/"
                        onClick={() => {
                          this.context.setAct("home");
                        }}
                        className={this.context.act == "home" ? "link-nav" : ""}
                      >
                        home
                      </Link>
                      <Link
                        to="/home"
                        onClick={() => {
                          this.context.setAct("page-layout");
                        }}
                        className={
                          this.context.act == "page-layout" ? "link-nav" : ""
                        }
                      >
                        Page layout
                      </Link>
                      <Link
                        to=""
                        onClick={() => {
                          this.context.setAct("Features");
                        }}
                        className={
                          this.context.act == "Features" ? "link-nav" : ""
                        }
                      >
                        <div type="submit" className="nav-login  ">
                          <div class="dropdown-content">
                            {this.state.features.map((data) => {
                              return <div className="user-hover">{data}</div>;
                            })}
                          </div>
                          Features
                        </div>
                        
                      </Link>
                      <Link
                        to=""
                        onClick={() => {
                          this.context.setAct("Performance");
                        }}
                        className={
                          this.context.act == "Performance" ? "link-nav" : ""
                        }
                      >
                        <div type="submit" className="nav-login  ">
                          <div class="dropdown-content">
                            {this.state.features.map((data) => {
                              return <div className="user-hover">{data}</div>;
                            })}
                          </div>
                          Performance
                        </div>
                        
                      </Link>
                      <Link
                        to="/cart"
                        onClick={() => {
                          this.context.setAct("all-products");
                        }}
                        className={
                          this.context.act == "all-products" ? "link-nav" : ""
                        }
                      >
                        All products
                      </Link>
                      {/* <Nav.Link href="">blog</Nav.Link>
                    <Nav.Link href="">support</Nav.Link>
                    <Nav.Link href="">demo</Nav.Link> */}
                    </Nav>
                    {/* <div className="links"> */}

                    {/* <Link
                    to="/home"
                    
                  >
                    
                  </Link>
                  <Link
                    to="/home"
                    
                  >
                    
                  </Link>
                  <Link
                    to="/home"
                    
                  >
                    
                  </Link>
                  <Link
                    to="/home"
                   
                  >
                    
                  </Link>
                </div> */}
                    {/* </div> */}

                    {/* <div className="col-4 "> */}
                    <div className="butt">
                      <button
                        className="btnn"
                        type="submit"
                        onClick={handleShow}
                      >
                        Cart
                        <Badge>{this.context.count}</Badge>
                      </button>

                      {/* {console.log(this.context.add)} */}
                      {localStorage.getItem("Credentials") === null ? (
                        <Link to="/Login">
                          <button type="submit" className="btn-outline-warning">
                            Login
                          </button>
                        </Link>
                      ) : (
                        <button type="submit" className="nav-login  ">
                          <FontAwesomeIcon icon={faUser} />
                          <div class="dropdown-content">
                            <button className="user-hover">
                              <FontAwesomeIcon icon={faUserAlt} />
                              profile
                            </button>
                            <button className="user-hover">
                              <FontAwesomeIcon icon={faHeart} />
                              wishlist
                            </button>
                            <button className="user-hover">
                              <FontAwesomeIcon icon={faIdCard} />
                              orders
                            </button>
                            <button
                              className="user-hover"
                              onClick={this.handleLogout}
                            >
                              <FontAwesomeIcon icon={faPowerOff} />
                              logout
                            </button>
                            {/* <ul>
                    <li>my profile</li>
                    <li>orders</li>
                    <li>wishlist</li>
                    <li>logout</li>

                  </ul> */}
                          </div>
                        </button>
                      )}
                    </div>

                    {/* </div> */}
                    {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  </Nav>
                  {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              <div className="nav-icons order-3">
                <button
                  className="nav-cart-icon"
                  type="submit"
                  onClick={handleShow}
                >
                  <FontAwesomeIcon icon={faCartArrowDown} />
                  {this.context.count}
                </button>

                {/* {console.log(this.context.add)} */}
                <Link to="/Login">
                  <button type="submit" className="nav-login-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                </Link>
              </div>
            </Container>
          </Navbar>
          {/* ))} */}
        </div>
      </>
    );
  }
}
export default Main;
