import { useContext } from 'react'
import { PizzasContext } from '../context/PizzasContext'
import { Link } from 'react-router-dom'

const Pedido = () => {
  const { carrito, incrementar, decrementar } = useContext(PizzasContext)
  const total = carrito.reduce(
    (acumulador, valorActual) => acumulador + valorActual.price * valorActual.count, 0
  )

  return (
    <div className='container my-5'>
      <div className='row shadow body-tertiary rounde p-3'>
        <h3>Detalle pedido</h3>
        {carrito.map((product, index) => (
          <div key={product.id} className='d-flex flex-column flex-md-row '>
            <div className='col-6 p-3 d-flex gap-5 align-items-center'>
              <img src={product.img} width={200} />
              <p className='text-capitalize'>{product.name}</p>
            </div>
            <div className='col-6 p-3 d-flex justify-content-center align-items-center gap-2'>
              <p>${product.price} </p>
              <button
                className='btn btn-success'
                onClick={() => incrementar(index)}
              >
                +
              </button>
              <p>{product.count} </p>
              <button
                className='btn btn-danger'
                onClick={() => decrementar(index)}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='row mt-5'>
        <h3>Total: ${total} </h3>
        <Link to='/'>
          <button
            className='btn btn-success'
          >Regresar
          </button>
        </Link>
      </div>
    </div>

  )
}

export default Pedido
