import React from "react";
import "../categories/categories.css";
import { Card, Col, Row } from "react-bootstrap";
import { store } from "../cartContext";
import Seeds from "./seedsSubcat/seetSubcat";
import { Link } from "react-router-dom";
class Categories extends React.Component {
  static contextType = store;
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const store = this.context;
    const response = fetch(
      "https://api.greensworthnuts.com/GetFeaturedProduct"
    );
    response
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          Dataisloaded: true,
          data: Object.values(json.data),
        });
        this.context.setApi(json.data);
      });
  }

  render() {
    const { Dataisloaded } = this.state;
    if (!Dataisloaded) {
      return (
        <div>
          <h1></h1>
        </div>
      );
    } else {
      return (
        <>
          <h2 className="heading">Featured Categories</h2>
          <div className="Featured-categories-card" data-aos="zoom-in" data-aos-duration="1000">
            <Row>
              <Col lg={3}>
                {this.state.data.slice(0, 1).map((data, i) => {
                  return (
                    <>
                      {/* seedSubcat */}
                      {/* <button > */}
                      <Link to="/seeds">
                        <Card className="bg-dark text-white">
                          <Card.Img
                            src={data.variant_list.split(",")[7].split("~")[3]}
                            alt="Card image"
                          />
                          <Card.ImgOverlay>
                            <Card.Title>{data.fld_subcategoryname}</Card.Title>
                            <Card.Text></Card.Text>
                            <Card.Text></Card.Text>
                          </Card.ImgOverlay>
                        </Card>
                      </Link>
                      {/* </button> */}
                    </>
                  );
                })}
              </Col>
            {/* </Row> */}

            {/* nutsSubcat */}
            {/* <Row> */}
            <Col lg={3}>
            {this.state.data.slice(3, 4).map((data, i) => {
              return (
                <>
                  <Link to="/nuts">
                    <Card className="bg-dark text-white">
                      <Card.Img
                        src={data.variant_list.split(",")[7].split("~")[3]}
                        alt="Card image"
                      />
                      <Card.ImgOverlay>
                        <Card.Title>{data.fld_subcategoryname}</Card.Title>
                        <Card.Text></Card.Text>
                        <Card.Text></Card.Text>
                      </Card.ImgOverlay>
                    </Card>
                  </Link>
                </>
              );
            })}
            </Col>
            {/* </Row> */}
            {/* comboSubcat */}
            {/* <Row> */}
            <Col lg={3}>
            {this.state.data.slice(9, 10).map((data, i) => {
              return (
                <>
                  <Link to="/combos">
                    <Card className="bg-dark text-white">
                      <Card.Img
                        src={data.variant_list.split(",")[7].split("~")[0]}
                        alt="Card image"
                      />
                      <Card.ImgOverlay>
                        <Card.Title>{data.fld_subcategoryname}</Card.Title>
                        <Card.Text></Card.Text>
                        <Card.Text></Card.Text>
                      </Card.ImgOverlay>
                    </Card>
                  </Link>
                </>
              );
            })}
            </Col>
            {/* </Row> */}
            {/* seedSubcat */}
            {/* <Row> */}
            <Col lg={3}>
            {this.state.data.slice(0, 1).map((data, i) => {
              return (
                <>
                  <Link to="/seeds">
                    <Card className="bg-dark text-white">
                      <Card.Img
                        src={data.variant_list.split(",")[7].split("~")[2]}
                        alt="Card image"
                      />
                      <Card.ImgOverlay>
                        <Card.Title>{data.fld_subcategoryname}</Card.Title>
                        <Card.Text></Card.Text>
                        <Card.Text></Card.Text>
                      </Card.ImgOverlay>
                    </Card>
                  </Link>
                </>
              );
            })}
            </Col>
            {/* </Row> */}
            {/* comboSubcat */}
            {/* <Row> */}
            {/* <Col lg={2}>
            {this.state.data.slice(7, 8).map((data, i) => {
              return (
                <>
                  <Link to="/combos">
                    <Card className="bg-dark text-white">
                      <Card.Img
                        src={data.variant_list.split(",")[7].split("~")[0]}
                        alt="Card image"
                      />
                      <Card.ImgOverlay>
                        <Card.Title>{data.fld_subcategoryname}</Card.Title>
                        <Card.Text></Card.Text>
                        <Card.Text></Card.Text>
                      </Card.ImgOverlay>
                    </Card>
                  </Link>
                </>
              );
            })}
            </Col> */}
             {/* nutsSubcat */}
            {/* <Row> */}
            {/* <Col lg={2}>
            {this.state.data.slice(3, 4).map((data, i) => {
              return (
                <>
                  <Link to="/nuts">
                    <Card className="bg-dark text-white">
                      <Card.Img
                        src={data.variant_list.split(",")[7].split("~")[3]}
                        alt="Card image"
                      />
                      <Card.ImgOverlay>
                        <Card.Title>{data.fld_subcategoryname}</Card.Title>
                        <Card.Text></Card.Text>
                        <Card.Text></Card.Text>
                      </Card.ImgOverlay>
                    </Card>
                  </Link>
                </>
              );
            })}
            </Col> */}
            </Row>
          </div>
          {/* <Seeds/> */}
        </>
      );
    }
  }
}
export default Categories;
