import React from "react";
import amazonnavlogo from "../../assets/amazon_PNG25.png";
function Navbar() {
  return (
    <nav>
      <div>
        <div>
          <img style={{ background: "black" }} src={amazonnavlogo} alt="" />
          <div className="deliverto">
            <div>{/* location logo */}</div>
            <div>
              <p>Deliver to</p>
              <h3>Ethiopia</h3>
            </div>
          </div>
        </div>
        <div>bye</div>
        <div>good</div>
      </div>
    </nav>
  );
}
export default Navbar;
