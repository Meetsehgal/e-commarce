import React from "react";
import { store } from "../../cartContext";
import { Card ,Button} from "react-bootstrap";

class Seeds extends React.Component {
  static contextType = store;

  componentDidMount() {
    const store = this.context;
  }
  render() {
    // console.log(this.context.api);
    return (
      <>
      <div className="Featured-categories-card">
        {this.context.api.slice(0, 3).map((data) => {
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
            // <CardGroup>
            //   <Card>
            //     <Card.Img
            //       variant="top"
            //       src={data.variant_list.split(",")[7].split("~")[0]}
            //     />
            //     <Card.Body>
            //       <Card.Title>Card title</Card.Title>
            //       <Card.Text>
            //         This is a wider card with supporting text below as a natural
            //         lead-in to additional content. This content is a little bit
            //         longer.
            //       </Card.Text>
            //     </Card.Body>
            //     <Card.Footer>
            //       <small className="text-muted">Last updated 3 mins ago</small>
            //     </Card.Footer>
            //   </Card>
            // </CardGroup>
          );
        })}
        </div>
      </>
    );
  }
}
export default Seeds;
