import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./assets/slider1.jpeg";
import ExampleCarouselImage2 from "./assets/slider2.jpeg";
import ExampleCarouselImage3 from "./assets/slider3.jpeg";
import ExampleCarouselImage4 from "./assets/slider4.png";
import ExampleCarouselImage5 from "./assets/slider5.jpeg";

function SliderPage() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage5}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>🌴Outdoor Dining Experience🌴</h3>
          <p>
            Relax and savor your meal in our inviting outdoor seating area.
            Enjoy the fresh air and delightful surroundings as you indulge in
            our flavorful street food.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>🍔🍕🌮Delicious Variety 🍔🍕🌮</h3>
          <p>
            Explore our diverse range of street food options, from savory
            delights to sweet treats. With something for everyone, you're sure
            to find your new favorite dish.😋
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>🕯️Cozy Ambiance🕯️</h3>
          <p>
            Experience our warm and inviting indoor dining area, adorned with
            soft lighting and rustic decor. Perfect for intimate gatherings or a
            quiet meal.🥂
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> 🎨Artistic Delights🎨</h3>
          <p>
            Immerse yourself in the creativity of our meals with this whimsical
            drawing. Each dish is a work of art, crafted with passion and
            flavor👨‍🍳
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> 🎉Vibrant Atmosphere🎉</h3>
          <p>
            Step into our lively indoor dining space, buzzing with energy and
            excitement. Enjoy the vibrant ambiance and indulge in our flavorful
            street food creations.🍝
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderPage;
