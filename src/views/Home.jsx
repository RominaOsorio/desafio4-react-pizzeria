import { useNavigate } from 'react-router-dom'
import { PizzasContext } from '../context/PizzasContext.jsx'
import { useContext } from 'react'

const Home = () => {
  const { pizzas } = useContext(PizzasContext)
  const navigate = useNavigate()

  return (
    <>
      <div className='hero text-center pt-5'>
        <h1 className='pt-5'>Pizzeria Mamma Mia</h1>
        <h3 className='pt-3'>
          ¡Tenemos todas las pizzas que podras encontrar!
        </h3>
      </div>
      <div className='container'>
        <div className='row mt-5 mb-5'>
          {pizzas &&
            pizzas.map((pizza) => (
              <div key={pizza.id} className='col-md-4'>
                <div className='card mt-5'>
                  <img
                    src={pizza.img}
                    className='card-img-top'
                    alt={pizza.name}
                  />
                  <div className='card-body p-5 pt-3'>
                    <h3 className='card-title '>{pizza.name}</h3>
                    <h5 className='card-text text-decoration-underline'>Ingredientes</h5>
                    <ul>
                      {pizza.ingredients.map((ingredient, index) => (
                        <li className='text-capitalize' key={index}>
                          <i className='fa-solid fa-pizza-slice' />{' '}
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                    <p className='card-text fw-bold'>Precio: ${pizza.price}</p>
                    <a
                      onClick={() => navigate(`/pizza/${pizza.id}`)}
                      className='btn btn-primary'
                    >
                      Ver Más
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Home
