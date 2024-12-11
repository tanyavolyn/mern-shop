import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import { carousel } from "../data/carousel";

import '../App.css';


function Gallery (){

    const [bild, setBild] = useState(0);
    const {id, image} = carousel[bild];

 
    const previousBild = () =>{
        setBild((bild=>{
            bild--;
            if (bild<0){
                return carousel.length-1;
            }
            return bild;
        }))
    }

    const nextBild = () =>{
        setBild((bild=>{
            bild++;
            if(bild>carousel.length-1){
                bild=0;
            }
            return bild;
        }))
    }
return(
    <section className="galerycontainer" key={id}>


<img  className="galbild" src={image}  alt="Bild"/>


 

            <div className="btncontainer">
            <button className="btngal" onClick={previousBild}>Back</button>
        <Link  className="btngalshop" to="/shop">SHOP</Link>
        
            <button className="btngal" onClick={nextBild}>Next</button>
            </div>
        

    </section>
)
}

export default Gallery;