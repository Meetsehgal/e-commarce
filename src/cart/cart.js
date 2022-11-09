import React, { createContext, useState } from "react";
// import { MDBDataTable } from "mdbreact";
import "./cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { store } from "../cartContext";
import POPUP from "../popup/popup";

class Cart extends React.Component {
  static contextType = store;
  itemData;
  constructor(props) {
    super(props);
    this.state = {
      fld_variantname: null,
      fld_categoryname: null,
      fld_subcategoryname: null,
      data: [],
      fld_productid: null,
      Quantity: 1,
      price: null,
      InCartItem: [],
    };
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
          data: Object.values(json.data),
          Dataisloaded: true,
        });
        // this.context.setApi(json.data);
        // console.log(JSON.stringify(json.data));
      });
    this.itemData = localStorage.getItem(
      "items",
      JSON.stringify(this.state.fld_productid)
    );
  }
  decrementfunction = (data) => {
    let existproduct = this.state.InCartItem.filter(
      (item) => item.fld_productid === data.fld_productid
    );

    if (existproduct) {
      if (existproduct[0].Quantity === 1) {
        this.setState({
          InCartItem: [
            ...this.state.InCartItem.filter(
              (item) => item.fld_productid !== data.fld_productid
            ),
          ],
        });
      } else {
        let exist = this.state.InCartItem.find(
          (item) => item.fld_productid === data.fld_productid
        );
        console.log(this.state.InCartItem, "else");
        this.setState({
          InCartItem: [
            ...this.state.InCartItem.filter(
              (val) => val.fld_productid != exist.fld_productid
            ),
            {
              ...exist,
              Quantity: exist.Quantity - 1,
            },
          ],
        });
      }
    }
  };
  incrementfunction = (data) => {
    let existproduct = this.state.InCartItem.find(
      (item) => item.fld_productid === data.fld_productid
    );
    // console.log(data.fld_productid);
    if (existproduct) {
      this.setState({
        InCartItem: [
          ...this.state.InCartItem.filter(
            (val) => val.fld_productid != existproduct.fld_productid
          ),
          {
            ...existproduct,
            Quantity: existproduct.Quantity + 1,
          },
        ],
      });
    } else {
      this.setState({
        InCartItem: [...this.state.InCartItem, { ...data, Quantity: 1 }],
      });
    }

    // console.log(existproduct);
  };

  render() {
    console.log(this.context.api);
    const data = {
      columns: [
        {
          label: "VARIENT_NAME",
          field: "VARIENT_NAME",
        },
        {
          label: "CATEGORY_NAME",
          field: "CATEGORY_NAME",
        },
        {
          label: "SUBCATEGORY_NAME",
          field: "SUBCATEGORY_NAME",
        },
        {
          label: "CATEGORY_ID",
          field: "CATEGORY_ID",
        },
        {
          label: "SUBCATEGORY_ID",
          field: "SUBCATEGORY_ID",
        },
        {
          label: "PRODUCT_ID",
          field: "PRODUCT_ID",
        },
        {
          label: "VARIENT_LIST",
          field: "VARIENT_LIST",
        },
      ],
      rows:
        this.state.data != null ? (
          this.state.data.map((data) => {
            return {
              VARIENT_NAME: data.fld_variantname,
              CATEGORY_NAME: data.fld_categoryname,
              SUBCATEGORY_NAME: data.fld_subcategoryname,
              VARIENT_LIST: (
                <img
                  alt=""
                  src={data.variant_list.split(",")[7].split("~")[0]}
                ></img>
              ),
              // PRODUCT_ID: data.variant_list.split(",")[0],
              // ADD:(<button type="" onClick={(e)=>{
              //   this.setState({
              //     fld_productid: data,
              //     fld_categoryid:data.fld_categoryid,
              //   }
              //   )
              //   this.props.fld_categoryid =parseInt(this.props.fld_categoryid)+1;
              // }}></button>)
            };
          })
        ) : (
          <tr>no data</tr>
        ),
    };

    const { Dataisloaded } = this.state;
    // const minus = this.state.Quantity > 1;
    if (!Dataisloaded) {
      return (
        <div>
          <h1>Pleses wait some time.... </h1>
        </div>
      );
    } else {
      return (
        <>
          {/* <POPUP/> */}
          <div className="containe">
            {/* {this.context.count} */}
            <div className="Appp">
              {this.state.data !== null ? (
                this.state.data.map((data, i) => {
                  return (
                    <div className="cart-items">
                      <div className="image">
                        <img
                          alt=""
                          className="hover1"
                          src={data.variant_list.split(",")[7].split("~")[0]}
                        ></img>
                        <img
                          alt=""
                          className="hover2"
                          src={data.variant_list.split(",")[7].split("~")[3]}
                        ></img>
                        {/* Fav Button */}
                        <button className="Wishlist-button">
                          <FontAwesomeIcon icon={faHeart} color="" />
                        </button>
                        {/* Add Button */}
                        <button
                          onClick={() => this.incrementfunction(data)}
                          className="Add-button"
                        >
                          <FontAwesomeIcon icon={faPlus} color="" />
                        </button>
                        {/* {console.log(this.state.InCartItem)} */}
                        <button
                          onClick={
                            () => this.decrementfunction(data)
                            // console.log(data.fld_productid);

                            // this.state.InCartItem.filter((item) => item.fld_productid === data.fld_productid)[0]["Quantity"] =
                            // this.state.InCartItem.filter((item) => item.fld_productid === data.fld_productid)[0]["Quantity"] - 1;

                            // this.setState.InCartItem[ this.state.InCartItem.filter((item) => item.fld_productid === data.fld_productid)[0]["Quantity"]]
                            // localStorage.setItem("user-cart", JSON.stringify(localStorageData));
                            // setcount(localStorageData.filter((item) => item.id === id)[0]["Quantity"]);
                            // when quantity is zero then item will remove from localstorage because quantity is not in minus.
                            // if (
                            // localStorageData.filter((item) => item.id === id)[0]["Quantity"] === 0
                            // ) {
                            // removeSingle(id);
                            // }

                            // this.setState({fld_productid:data.fld_productid})
                            // console.log(this.state.fld_productid);
                            // let existproduct = this.state.InCartItem.find(
                            //   (item) =>

                            //     // item.fld_productid === data.fld_productid && item.Quantity>1
                            //     item.fld_productid === data.fld_productid
                            // );

                            // if (
                            //  existproduct
                            // ) {
                            //   console.log("working");
                            //   this.setState({
                            //     InCartItem: [
                            //       ...this.state.InCartItem.filter(
                            //         (val) =>
                            //           val.fld_productid !=
                            //           existproduct.fld_productid
                            //       ),
                            //       // {
                            //       //   ...existproduct,
                            //       //   Quantity: existproduct[0].Quantity - 1,
                            //       // },
                            //     ],
                            //   });
                            // }else{
                            //   console.log(this.state.fld_productid);
                            //   // if(this.state.fld_productid===data.fld_productid){
                            //   let min= this.state.InCartItem.find(
                            //     (item)=>item.fld_productid===data.fld_productid
                            //   );
                            //   if(min){
                            //     console.log("ubibvbdik");
                            //   this.setState({
                            //     InCartItem:[
                            //      ...this.state.InCartItem.filter(
                            //       (val)=> val.Quantity!=1
                            //      ),

                            //     ]
                            //   })}
                            //   console.log(this.state.InCartItem);

                            // }
                          }
                          className="subtract-button"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>

                        {/* {this.context.setCount(this.state.InCartItem.length)} */}
                        {this.context.setAdd(this.state.InCartItem)}
                        {/* {this.context.setIncrement(this.incrementfunction)} */}
                        {/* {console.log(this.state.InCartItem.length)} */}
                        {/* {JSON.stringify(this.state.InCartItem.fld_productid)} */}
                      </div>
                      <div className="item_content">
                        <h4>{data.fld_variantname}</h4>
                        <div className="item_details">
                          <div>
                            {data.variant_list.split(",")[0].split("-")[0]}
                          </div>
                          <div>
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
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <tr>no data</tr>
              )}
            </div>
          </div>

          {/* <MDBDataTable striped bordered hover data={data} />; */}
        </>
      );
    }
  }
}
export default Cart;
