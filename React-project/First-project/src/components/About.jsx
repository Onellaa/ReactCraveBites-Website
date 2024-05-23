import StreetFood from "../assets/streetFood.jpeg";
import Chef from "../assets/Chef-pana.png";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="top">{/* <h1>About</h1> */}</div>
      <div className="bottom"></div>
      <p className="txt">
        <p className="para1">Welcome to CraveBites! </p>
        <br /> At CraveBites, we bring the vibrant flavors of street food right
        to your table. Our passion for delicious, freshly made food drives us to
        serve the best pizzas and burgers in town. Whether you’re in the mood
        for a classic Pepperoni Pizza or a mouth-watering Sausage Pizza, we’ve
        got something for every craving.
        <p className="para2">
          <br />
          Why Choose Us?
        </p>
        <div className="list">
          <br />
          <li>
            Customizable Orders: We believe in giving you the freedom to create
            your perfect meal. Customize your pizzas and burgers with a variety
            of toppings and ingredients to suit your taste.
          </li>
          <li>
            Fresh Ingredients: We use only the freshest, highest-quality
            ingredients to ensure every bite is packed with flavor.
          </li>
          <li>
            Friendly Service: Our team is dedicated to providing you with a warm
            and welcoming experience every time you visit.
          </li>
        </div>
      </p>
    </div>
  );
}
