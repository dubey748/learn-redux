import React from 'react'

function Home(props) {
   /*  console.log("props", props) */
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="data:image/png;base64,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" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Redmi-Note 10
                    </span>
                    <span>
                        Price: 12500.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                        <button className='remove-cart-btn' 
                    onClick={
                        ()=>{props.removeToCartHandler({})}
                        }>
                        Remove from Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home