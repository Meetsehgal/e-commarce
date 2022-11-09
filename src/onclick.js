this.setState({
    fld_productid:data.fld_productid,
  
  })
  if (this.state.fld_productid === data.fld_productid) {
    console.log("working");
  this.setState(
    {
      InCartItem:{
        PRODUCT_ID: data.fld_productid,
        VARIENT_NAME: data.fld_variantname,
        PRICE: data.variant_list
          .split(",")[0]
          .split("-")[1]
          .split("$")[0],
        Quantity: this.state.Quantity + 1,
      }
    },
    () =>
      console.log(
        this.state.InCartItem
      )
  );
      }else{
        
        console.log("not working");
        this.setState(
          {
            InCartItem:{
              PRODUCT_ID: data.fld_productid,
              VARIENT_NAME: data.fld_variantname,
              PRICE: data.variant_list
                .split(",")[0]
                .split("-")[1]
                .split("$")[0],
              QUANTITY: this.state.Quantity,
            }
          },
          () =>
            console.log(
              this.state.InCartItem 
            )
        );
      }
      // {this.state.InCartItem.forEach(()=>{
      //   this.state.InCartItem.filter(
      //     PRODUCT_ID =>{
      //       if(PRODUCT_ID === data.fld_productid){
      //         this.setState({
      //           QUANTITY:this.state.Quantity+1,                                        })
      //       }
            
      //     } )
      // })}
      {
       const prduct= this.state.InCartItem.find( function(productid){
          return productid.PRODUCT_ID == this.state.fld_productid
        })
      
      console.log(prduct);}
  // localStorage.setItem(
  //   "Credentials",
  //   JSON.stringify([
  //     {
  //       PRODUCT_ID: data.fld_productid,
  //       VARIENT_NAME: data.fld_variantname,
  //       PRICE: data.variant_list
  //         .split(",")[0]
  //         .split("-")[1]
  //         .split("$")[0],
  //       QUANTITY: 1,
  //     },

  //   ])

  // );
  // console.log(data.fld_productid);

  // if (
  //   this.state.fld_productid ==data.fld_productid) {
   
    
  //   console.log(this.state.Quantity);
  //   this.setState(
  //     {
  //       Quantity: this.state.Quantity + 1,
  //     },
  //     () => {
  //       localStorage.setItem(
  //         "Credentials",
  //         JSON.stringify([
  //           {
  //             PRODUCT_ID: data.fld_productid,
  //             VARIENT_NAME: data.fld_variantname,
  //             PRICE: data.variant_list
  //               .split(",")[0]
  //               .split("-")[1]
  //               .split("$")[0],
  //             QUANTITY: this.state.Quantity,
  //           },
  //         ])
  //       );
  //     }
  //   );

  //   console.log(data.fld_productid);
  // } else {
  //   console.log("Not Working");
  //   this.setState(
  //     {
  //       Quantity: 1,
  //     },
  //   localStorage.setItem(
  //     "Credentials",
  //     JSON.stringify([
  //       {
  //         PRODUCT_ID: data.fld_productid,
  //         VARIENT_NAME: data.fld_variantname,
  //         PRICE: data.variant_list
  //           .split(",")[0]
  //           .split("-")[1]
  //           .split("$")[0],
  //         QUANTITY: 1,
  //       },
  //     ])
  //   ));
    
  // }