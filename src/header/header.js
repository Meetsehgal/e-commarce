import React from "react";

import { Link } from "react-router-dom";
import "../header/header.css";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";
import { store } from "../cartContext";
import Slider from "../slider/slider";
// import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown} from "@fortawesome/free-solid-svg-icons";
import Categories from "../categories/categories";
import HomeCards from "../homepageCards/homepageCards";
import Footer from "../footer/footer";
import Parlex from "../parlex/parlex";
import Section from "../sections/section";

// import Cart from "../cart/cart";
// import { Route, Link, BrowserRouter as Router,NavLink } from "react-router-dom";
class Header extends React.Component {
  static contextType = store;
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const store = this.context;
  }

  handleSubmit = () => {};

  render() {
    return (
      <>
        <div className="background"></div>
        {/* <div className="preview_header">
          <img
            src="https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg"
            className="preview_header_logo"
            alt=""
          />
          <button className="preview_header_button">Buy now</button>
        </div> */}

        <img 
          src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-rectangle.png"
          class="child-img"
          alt=""
        />
        <img 
          src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-layer-red.png"
          className="child1-image"
          alt=""
        ></img>

        {/* <div className="main">
          <Navbar expand="false" className="mb-3">
            <Container fluid> */}
              
              {/* <div className="col-1">
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
              </div> */}
              {/* <Navbar.Offcanvas
                id={`offcanvasNavbar-expand`}
                aria-labelledby={`offcanvasNavbarLabel`}
              >
                <Offcanvas.Header
                  closeButton
                  className="justify-content"
                ></Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end">
                    <Nav.Link href="#action1">home</Nav.Link>
                    <Nav.Link href="#action2">shopify themes</Nav.Link>
                    <Nav.Link href="">shopify module</Nav.Link>
                    <Nav.Link href="">services</Nav.Link>
                    <Nav.Link href="">showcase</Nav.Link>
                    <Nav.Link href="">blog</Nav.Link>
                    <Nav.Link href="">support</Nav.Link>
                    <Nav.Link href="">demo</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas> */}

              {/* second div */}

              {/* <div className="col-1">
                <div className="imag text-start">
                  <img
                    src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/ella-logo-retina.png"
                    alt=""
                  ></img>
                </div>
              </div> */}

              {/* third div */}

              {/* <div className="col-5 text-start">
                <div className="links">
                  <Link to="/home">home</Link>
                  <Link to="/home">Page layout</Link>
                  <Link to="/home">Features</Link>
                  <Link to="/home">Performance</Link>
                  <Link to="/home">Child theme</Link>
                </div>
                
              </div> */}

              {/* <div className="col-4 ">
                <div className="butt">
                  <button className="btn" type="submit">
                    Cart
                  </button>
                  <Link to="/Login">
                    <button type="submit" className="btn-outline-warning">
                      Login
                    </button>
                  </Link>
                </div>
              </div> */}
              {/* <div className="col-1"><button><FontAwesomeIcon icon={faCartArrowDown} />{this.context.count} </button></div> */}
              
            {/* </Container>
          </Navbar>
        </div> */}
        <Slider/>
        <Categories/>
        {/* <div>biubaebflrnksgln</div> */}
        <HomeCards/>
        <Section/>
        <Parlex/>
        <Footer/>
        
      </>
    );
  }
}
export default Header;
