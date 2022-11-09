import React from "react";
import { store } from "../cartContext";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../homepageCards/homepageCards.css";
import { Navigate } from "react-router-dom";
class HomeCards extends React.Component {
  static contextType = store;
  constructor(props) {
    super(props);
   
  }

  componentDidMount() {
    const store = this.context;
    // this.context.setAdd(JSON.parse(localStorage.getItem("user-cart")))
  }
  
  render() {
  // const buttonRen= JSON.parse(localStorage.getItem("user-cart"));
    

    return (
      <>
      
        <h2 className="heading">Products</h2>

        <div className="cart_page">
          <div className="Homepage-cards">
            {this.context.api.map((data) => {
              
              return (
                <>
                  <Row>
                    <Col lg={12}>
                      <Card
                        style={{ width: "19rem" }}
                        data-aos="zoom-out"
                        data-aos-duration="1000"
                      >
                        <Card.Img className="card-image"
                          variant="top"
                          src={data.variant_list.split(",")[7].split("~")[0]}
                        />
                        <Card.Body>
                          <Card.Text className="card-heading">{data.fld_variantname}</Card.Text>
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
                            {}
                          {/* <Button
                            variant="primary"
                            onClick={(e) => {
                              e.preventDefault();
                              const items =
                                JSON.parse(localStorage.getItem("user-cart")) ==
                                null
                                  ? []
                                  : JSON.parse(
                                      localStorage.getItem("user-cart")
                                    );
                                    {console.log(existproduct.Quantity)}
                              let existproduct = items.find(
                                (item) =>
                                  item.fld_productid === data.fld_productid
                              );
                              // console.log(existproduct);
                              if (existproduct) {
                                // console.log("work");

                                localStorage.setItem(
                                  "user-cart",
                                  JSON.stringify([
                                    ...items.filter(
                                      (val) =>
                                        val.fld_productid !=
                                        existproduct.fld_productid
                                    ),
                                    { ...data, Quantity: existproduct.Quantity+1 },
                                  ])
                                );
                                
                              } else {
                                // console.log("not");
                                localStorage.setItem(
                                  "user-cart",
                                  JSON.stringify([
                                    ...items,
                                    { ...data, Quantity: 1 },
                                  ])
                                );
                                
                                
                              }
                             
                            }}
                          >
                            Buy now
                          </Button> */}







                          <Button
                            variant="primary"
                            onClick={(e) => {
                              e.preventDefault();
                              const items =
                                JSON.parse(localStorage.getItem("user-cart")) ==
                                null
                                  ? []
                                  : JSON.parse(
                                      localStorage.getItem("user-cart")
                                    );

                              let existproduct = items.find(
                                (item) =>
                                  item.fld_productid === data.fld_productid
                              );
                              console.log(existproduct);
                              if (existproduct) {
                                // console.log("work");

                                localStorage.setItem(
                                  "user-cart",
                                  JSON.stringify([
                                    ...items.filter(
                                      (val) =>
                                        val.fld_productid !=
                                        existproduct.fld_productid
                                    ),
                                    { ...data, Quantity: existproduct.Quantity+1 },
                                  ])
                                );
                               
                              } else {
                                // console.log("not");
                                localStorage.setItem(
                                  "user-cart",
                                  JSON.stringify([
                                    ...items,
                                    { ...data, Quantity: 1 },
                                  ])
                                );
                                
                              }
                             
                            }}
                          >
                            Buy now
                          </Button>




                          {/* <Button variant="primary">Add more</Button> */}
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </>
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
        </div>
      </>
    );
  }
}
export default HomeCards;
// class HomeCards extends React.Component {
//   static contextType = store;

//   componentDidMount() {
//     const store = this.context;
//   }

//   render() {
// const items = localStorage.getItem("user-cart")
//                         if(items){
//                           JSON.parse(localStorage.getItem("user-cart"));
//                         }
//                         else{
//                           return [];
//                         }

//                         console.log(items);
// const addToCart =(e) =>{
//   e.preventDefault();
//   this.context.setLocalStorageProduct(()=>{})
// }
// const adToCart =(data) =>{
//   data.preventDefault();
//   localStorage.setItem("user-cart",JSON.stringify(data))
//   this.context.setLocalStorageProduct(()=>{})
// }
// // console.log("manmeet");
// // console.log(this.context.api);
//     return (
//       <>
//  <h2 className="heading">Products</h2>

// <div className="cart_page">

//   <div className="Homepage-cards"  >

//     {this.context.api.map((data) => {
//       return (
//         <>
//         <Row>
//           <Col lg={12}>
//         <Card style={{ width: "19rem" }} data-aos="zoom-out" data-aos-duration="1000">
//           <Card.Img
//             variant="top"
//             src={data.variant_list.split(",")[7].split("~")[0]}
//           />
//           <Card.Body>
//             <Card.Text>{data.fld_variantname}</Card.Text>
//             {data.variant_list.split(",")[0].split("-")[0]}
//             <Card.Title></Card.Title>
//             <Card.Text >
//               $
//               {
//                 data.variant_list
//                   .split(",")[0]
//                   .split("-")[1]
//                   .split("$")[0]
//               }
//             </Card.Text>

//             <Button variant="primary"  onClick={ ()=>{
//               // const items = [localStorage.getItem("user-cart")]
//               // // if(items){
//               // //   JSON.parse(localStorage.getItem("user-cart"));
//               // // }
//               // // else{
//               // //   return [];
//               // // }
//               //   const newItems= [...items];
//               //   newItems[newItems.length-1]=1;
//               // //  localStorage.setItem("user-cart",JSON.stringify(data))
//               // JSON.parse(localStorage.getItem("user-cart"));
//               //  localStorage.setItem('user-cart', JSON.stringify([ ...items, data ]));
//                console.log(data);

//             }
//           }>Buy now</Button>
//           </Card.Body>
//         </Card>
//         </Col>
//         </Row>
//         </>
//         // <CardGroup>
//         //   <Card>
//         //     <Card.Img
//         //       variant="top"
//         //       src={data.variant_list.split(",")[7].split("~")[0]}
//         //     />
//         //     <Card.Body>
//         //       <Card.Title>Card title</Card.Title>
//         //       <Card.Text>
//         //         This is a wider card with supporting text below as a natural
//         //         lead-in to additional content. This content is a little bit
//         //         longer.
//         //       </Card.Text>
//         //     </Card.Body>
//         //     <Card.Footer>
//         //       <small className="text-muted">Last updated 3 mins ago</small>
//         //     </Card.Footer>
//         //   </Card>
//         // </CardGroup>
//       );
//     })}
//   </div>
// </div>
//       </>
//     );
//   }
// }
