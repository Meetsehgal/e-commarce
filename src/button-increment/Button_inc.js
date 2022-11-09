import React from "react";
import { store } from "../cartContext";
class ButttonInc extends React.Component{
static contextType=store;
    constructor(props){
        super(props);

    }
    handleinc=()=>{
        // console.log(this.context.add.fld_productid );
        this.context.add.map((data,i)=>{
            // console.log(data.fld_productid);
            let existproduct = this.context.add.find(
                (item) => item.fld_productid === data.fld_productid
              )
              if(existproduct){
                console.log();
                
              }
        })
        
        //   if (existproduct) {
        //     this.setState({
        //       InCartItem: [
        //         ...this.state.InCartItem.filter(
        //           (val) =>
        //             val.fld_productid !=
        //             existproduct.fld_productid
        //         ),
        //         {
        //           ...existproduct,
        //           Quantity: existproduct.Quantity + 1,
        //         },
        //       ],
        //     });
        //   } else {
            
        //     this.setState({
        //       InCartItem: [
        //         ...this.state.InCartItem,
        //         { ...data, Quantity: 1 },
        //       ],
        //     });
        //   }
          
          
        //   // console.log(existproduct);
        // }
    }
    render(){
        
        return(
            <>
            {console.log(this.context.add)}
            {/* <button onClick={this.handleinc}>button</button> */}
            {/* {console.log(this.context.add.fld_productid)} */}
            </>
        )
    }
}
export default ButttonInc;