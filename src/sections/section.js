import React from "react";
import { Container } from "react-bootstrap";
import { store } from "../cartContext";
import './section.css';
class Section extends React.Component{
    static contextType = store;
    componentDidMount(){
        const store = this.context;
    }
render(){
    return(
        <>
        <h2 className="heading">Product Details</h2>

        <div className="section-data">
            <div>
                
                {this.context.api.slice(0,1).map((data)=>{
                    return(
                        <>
                        <Container fluid>
                        <div className="row">
                        <div className="col-lg-6"> Pumpkin seeds are a potent source of many nutrients, offering High levels of essential vitamins and minerals in a small serving, Whereas sunflower seeds are popular in trial mix in multi-grain bread and nutrition bars, as well as for snacking. Chia seeds may be small, but they're incredibly rich in nutrients.
Chia seeds are versatile and can be used in many recipes at last in Balck
Raisin are tiny, wrinkled and filled with juice and flavor. Black Raisin is a sweet, healthy snack that can be also used in many dessert preparations.</div>
                        <img className="img-section col-6"src={data.variant_list.split(",")[7].split("~")[0]}></img>
                        </div>
                </Container>

                        </>
                    )
                        
                    
                })}
            </div>
            <div>
                {this.context.api.slice(1,2).map((data)=>{
                    return(
                        <>
                        <Container fluid>
                        <div className="row">
                            <div className="img-section col-6">
                        <img src={data.variant_list.split(",")[7].split("~")[0]}></img>
                        </div>
                        <div className="col-lg-6">  Chia seeds may be small, but they're incredibly rich in nutrients.
Chia seeds are versatile and can be used in many recipes at last in Balck
Raisin are tiny, wrinkled and filled with juice and flavor. Black Raisin is a sweet, healthy snack that can be also used in many dessert preparations.</div>
                        </div>
                        </Container>
                        </>
                    )
                        
                    
                })}
            </div>
        </div>
        </>
    )
}
}
export default Section;