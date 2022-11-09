import React from "react";
import { store } from "../../cartContext";
import { Card,Button } from "react-bootstrap";
class Nuts extends React.Component {
  static contextType = store;

  componentDidMount() {
    const store = this.context;
  }
  render() {
    // console.log(this.context.api);
    return (
      <>
        <div className="Featured-categories-card">
        {this.context.api.slice(3, 4).map((data) => {
          return (
            <Card style={{ width: '18rem' }}>
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
        </div>
      </>
    );
  }
}
export default Nuts;
