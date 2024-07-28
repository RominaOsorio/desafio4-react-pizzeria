import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='imagen' src='src/assets/img/pizza0.jpeg' alt='' />
        <Carousel.Caption>
          <h2>¡Pizzería Mamma Mia!</h2>
          <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='imagen' src='src/assets/img/pizza1.jpeg' alt='' />
        <Carousel.Caption>
          <h2>¡Pizzería Mamma Mia!</h2>
          <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='imagen' src='src/assets/img/pizza2.jpeg' alt='' />
        <Carousel.Caption>
          <h2>¡Pizzería Mamma Mia!</h2>
          <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
