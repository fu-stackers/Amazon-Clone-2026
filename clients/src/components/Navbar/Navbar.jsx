import React from "react";
import amazonnavlogo from "../../assets/amazon_PNG25.png";
import nav from "./Navbar.module.css";
import americaflag from "../../assets/america.jpg";
import ethpiopia from "../../assets/Ethiopia.jpg";
function Navbar() {
  return (
    <nav>
      <div className={nav.nav_box}>
        <div className={nav.logo_box}>
          <a href="/">
            <img src={amazonnavlogo} alt="" />
          </a>

          <div className={nav.delivery}>
            <div>loca</div>
            <div className={nav.delivery_location}>
              <span>Deliver to</span>
              <p>Ethiopia</p>
            </div>
          </div>
        </div>

        <div className={nav.input_box}>
          <select name="" id="">
            <option value="ALL">ALL</option>
            <option value="half">half</option>
          </select>
          <input type="text" placeholder="search products" />
          {/* icos */}
        </div>

        <div className={nav.select_box}>
          <div className={nav.flag}>
            <img src={americaflag} alt="" />
            <select name="" id="">
              <option value="">EN</option>
              <option value="">AM</option>
            </select>
          </div>
          <a href="" className={nav.signin}>
            <p className={nav.small_text}>hello ,sign in</p>
            <p>Account & Lists</p>
          </a>
          <a href="" className={nav.order}>
            <p className={nav.small_text}>returns </p>
            <p>&Orders</p>
          </a>
          <a href="" className={nav.order_count}>
            <span>0</span>
            {/* icon */}
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
