import React from "react";

const Home = () => {
  return (
    <>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSOr3Gtyc1I0nMDKUVwOlzHx7wwbheAs2zH0pZVKtLNhTuua1add1Aka2x9n1brZkKMF_KyTcNx7C8&usqp=CAc" alt="Phone" />
        </div>
        <div className="text-wrapper item">
          <span>Redmi-</span>
          <span>Price: Rs -13500.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
           
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
