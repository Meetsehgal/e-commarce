import React from "react";
import { store } from "../../cartContext";
import { Card, Button} from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
class Combos extends React.Component {
  static contextType = store;

  componentDidMount() {
    const store = this.context;
  }
  render() {
    // console.log(this.context.api);
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
      <>
      <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  slidesToSlide={2}
  infinite={true}
  autoPlay={this.props.deviceType !== 'mobile' ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition='all .5'
  transitionDuration={500}
  containerClass='carousel-container'
  removeArrowOnDeviceType={['tablet', 'mobile']}
  deviceType={this.props.deviceType}
  dotListClass='custom-dot-list-style'
  itemClass='carousel-item-padding-40-px'
>
      {/* <div className="Featured-categories-card"> */}
        {this.context.api.slice(4, 10).map((data) => {
          return (
            <Card style={{ width: '19rem' }}>
            <Card.Img variant="top" src={data.variant_list.split(",")[7].split("~")[0]} />
            <Card.Body>
              
              <Card.Text>{data.fld_variantname}
              </Card.Text>
              {data.variant_list.split(",")[0].split("-")[0]}
              <Card.Title></Card.Title>
              <Card.Text>
              $
                                    {
                                      data.variant_list
                                        .split(",")[0]
                                        .split("-")[1]
                                        .split("$")[0]
                                    }
              </Card.Text>
              <Button variant="primary">Buy now</Button>
            </Card.Body>
          </Card>
         );
        })}
        {/* </div> */}
        </Carousel>
      </>
    );
  }
}
export default Combos;
