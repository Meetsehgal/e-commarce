import React from "react";
import { store } from "../cartContext";
import { Offcanvas, Badge } from "react-bootstrap";
import "../cartbutton/cartbutton.css";
class Cartbutton extends React.Component {
  static contextType = store;
  constructor(props){
    super(props);
    this.state={
      inCartItems:JSON.parse(localStorage.getItem('user-cart')) == null? []: JSON.parse(localStorage.getItem('user-cart')),
      Quantity:0,
      leng:[],
    }
    console.log(this.state.leng);
  }
  componentWillUnmount(){
    // localStorage.removeItem('user-cart')
    localStorage.setItem('user-cart',JSON.stringify(this.state.inCartItems))

  }

  render() {
    
    const handleClose = () => this.context.setShow(false);
    const handleShow = () => this.context.setShow(true);
    let sum=0;
    let Delivery=10;
    const display= JSON.parse(localStorage.getItem('user-cart')) == null? []: JSON.parse(localStorage.getItem('user-cart'))
    // console.log(display);
    return (
      <>
      {/* if(this.context.count.length===0){Delivery} */}
      {this.context.setCount(display.length)}
        <Offcanvas
          show={this.context.show}
          onHide={handleClose}
          className="mb-1"
          placement="end"
        >
          {/* this.context.add can also used for diasply data from cart route */}
          {display.map((data) => {
            return (
              <>
                {/* {console.log(data.fld_variantname)} */}
                <div className="cart_items">
                  <div className="item_image">
                    <img
                      alt=""
                      className="item_image"
                      src={data.variant_list.split(",")[7].split("~")[0]}
                      
                    ></img>
                  </div>
                  <div className="item_name">
                    <h6>{data.fld_variantname}</h6>

                    <span>{data.variant_list.split(",")[0].split("-")[0]}</span>
                    <b>
                      $
                      {
                        data.variant_list
                          .split(",")[0]
                          .split("-")[1]
                          .split("$")[0]
                      }
                    </b>
                  </div>

                  <div className="item_quantity">
                    <button
                      onClick={() => {
                              this.setState({
                                Quantity:data.Quantity+1,
                              })
                        let value= JSON.parse(localStorage.getItem('user-cart'))
                        // console.log(value.fld_productid);
                        const existProduct= value.find(
                          (item) =>
                            item.fld_productid === data.fld_productid
                        );
                        if(existProduct){
                          console.log(value);
                          this.setState({
                            Quantity:data.Quantity+1,
                          })
                        localStorage.setItem('user-cart',JSON.stringify([
                          ...value.filter(
                            (val) =>
                              val.fld_productid !=
                              data.fld_productid
                          ),
                          {...data,Quantity:data.Quantity+1}]))
                          }
                        // let value =display.find((item) =>item.fld_productid === data.fld_productid)
                        
                        // if(value){
                        //   localStorage.setItem('user-cart',JSON.stringify([...display.filter((val)=>val.fld_productid!= value.fld_productid),
                        //   { ...data, Quantity: value.Quantity+1}]))
                        // }



                        // const updateCart = this.context.add.map((val) => {
                          
                        //   if (val.fld_productid == data.fld_productid) {

                                


                        //     {this.context.setAdd(data.Quantity++)}
                            // return { ...this.context.setAdd(data.Quantity++ };
                            // return { ...val, Quantity: val.Quantity + 1 };
                        //   } else {
                        //     return val;
                        //   }
                          
                        // });
                        // this.context.setAdd(updateCart)

                        // console.log(updateCart);
                      
                        // {this.context.setAdd(data.Quantity++)}
                        // const upadateCart = this.context.add.filter(
                        //   (val) => val.fld_productid != data.fld_productid
                        // );
                        // upadateCart.push({
                        //   ...data,
                        //   Quantity: data.Quantity + 1,
                        // });

                        // console.log(upadateCart);

                        // this.context.add.map((data, i) => {
                        //   // console.log(data.fld_productid);
                        //   let existproduct = this.context.add.find(
                        //     (item) => item.fld_productid === data.fld_productid
                        //   );
                        //   if (existproduct) {
                        //     console.log(data);
                        //   }
                        // });
                      }}
                    >
                      +
                    </button>
                    <input type="text" value={data.Quantity}></input>
                    <button onClick={ ()=>{
this.setState({
  Quantity:data.Quantity-1,
})

let value= JSON.parse(localStorage.getItem('user-cart'))
console.log(value.fld_productid);
const existProduct= value.find(
  (item) =>
    item.fld_productid === data.fld_productid
);

// if(existProduct.Quantity===0){
//  localStorage.setItem('user-cart', value.filter(
//     (val) =>
//       val.fld_productid !=
//       data.fld_productid
//   ))
// }
if(existProduct){
  
localStorage.setItem('user-cart',JSON.stringify([
  ...value.filter(
    (val) =>
      val.fld_productid !=
      data.fld_productid
  ),
  {...data,Quantity:data.Quantity-1}]))
  }
  if(data.Quantity===1){
    localStorage.setItem('user-cart',JSON.stringify([
      ...value.filter(
        (val) =>
          val.fld_productid !=
          data.fld_productid
      )
      ]))
  }



                      // this.context.add.map((val) => {
                      //     if (data.fld_productid === 1) {
                      //       return { ...val, Quantity: val.Quantity + 1 };
                      //     } else {
                      //       return val;
                      //     }
                      //   });

                      // //   console.log(updateCart);
                      //   {this.context.setAdd(data.Quantity--)}
                      }}
                        
                        >-</button>
                  </div>
                </div>
              </>
            );
          })}
          <div className="Grand_total">
            
              <h5>Price Details</h5>
            
            <ul>
              
            
            <li>
              <span>MRP({this.context.count} items)</span>
            </li>
            <li>
              <span>Delivery Fee</span>
            </li>
            <li>
              <span>Total Amount</span>
            </li>
            </ul>
            
            
            <ul>
            {display.map((data,i)=>{
              
              sum+= Number((data.variant_list
              .split(",")[0]
              .split("-")[1]
              .split("$")[0])*data.Quantity)
              // console.log(sum);
            })}
            
            <li>
              <span><b>${sum}</b></span>
            </li>
            <li>
              
              <span>${Delivery}</span>
            </li>
            <li>
              <span><h6>${Number(Delivery+sum)}</h6></span>
            </li>
            </ul>
          </div>
          <button className="place-order-button">Place Order</button>
        </Offcanvas>
      </>
    );
  }
}
export default Cartbutton;
