import React from 'react'
import './ProductCard.css';

function ProductCard({products}) {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        textAlign:"center",
        fontFamily: "Arial",
    }

   
     


  return(
    <div className='container pt-5' style={{padding: "9rem 0"}}>
        <h2 className="common-heading" style={mystyle}>Our Services</h2>
        <div className='row show'>
            
                {products.map((currElem,ind)=>{
                    return(
                        <>
                            <div className="col-lg-4 mb-4" style={{padding: "2rem 0"}}>
                            <div className="card-deck card-data" key={currElem.id}>
                                <figure >
                                <img src={currElem.images} className="card-img-top" alt="imsges"/></figure>
                                <div className="card-body">
                                <h5 className="card-title">{currElem.title}</h5>
                                <p className="card-text">{currElem.description}</p>
                                </div>
                                
                            </div>
                            
                            </div>
                            
                        </>
                    )
                })}
               
           
            
        </div>
    </div>
  )  
  
}

export default ProductCard;
