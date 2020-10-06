import React from "react";
import "./CSS/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12345"
          title="1984 (Signet Classics) by George Orwell"
          price={6.04}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41AlkLLW2gL._SX277_BO1,204,203,200_.jpg"
        />
        <Product
          id="11234"
          title="Love Real Food: More Than 100 Feel-Good Vegetarian Favorites to Delight the Senses and Nourish the Body: A Cookbook"
          price={12.55}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/A16VN49ZV1L.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="11111"
          title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
          price={64.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg"
        />
        <Product
          id="12555"
          title="Left and Right Wireless Pro Controller Compatible with Nintendo Switch Gyro Axis Gaming Gamepad Joypad Non-Original - PAWHITS"
          price={33.35}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61Zat2LZBlL._AC_SL1110_.jpg"
        />
        <Product
          id="12333"
          title="Gaming Headset - Combatwing Xbox Headset 7.1 Surround Sound PC Headsets with Noise Canceling Mic Best Gaming Headphones"
          price={24.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71HFFgckuFL._AC_SL1267_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12222"
          title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA port),Black"
          price={89.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
