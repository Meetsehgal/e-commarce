import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "../slider/slider.css";
import { store } from "../cartContext";
class Slider extends React.Component {
  static contextType = store;
  componentDidMount() {
    const store = this.context;
  }
  render() {
    return (
      <>
        {/* { console.log(this.context.api)} */}
        <Container fluid>
          {/* <div className="row"> */}
            {/* <div className="col-1 "></div> */}
            <div className="col-12 slider-images">
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="https://tse4.mm.bing.net/th?id=OIP.rixDHGQGZHAjV3HEq4G-kQHaD4&pid=Api&P=0"
                    alt="First slide"
                  ></img>
                  <Carousel.Caption>
                    <h3>Don't miss amazing deals</h3>
                    <p>
                      Sign up for daily news letter
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="https://appreciategoods.com/wp-content/uploads/2017/01/Sunflower-Seeds-2.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Big discount on </h3>
                    <p>
                      Save up to 50% off on your first order
                    </p>
                  </Carousel.Caption>
                </Carousel.Item> */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://tse4.mm.bing.net/th?id=OIP.-BJN0kR9xXtTMXlCCoPQHAHaE8&pid=Api&P=0"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Big discount </h3>
                    <p>
                      Save up to 50% off on your first order
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          {/* </div> */}
        </Container>
      </>
    );
  }
}
export default Slider;
