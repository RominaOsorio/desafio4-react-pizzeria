import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { PizzasContext } from '../context/PizzasContext'
import { FaShoppingCart } from 'react-icons/fa'

const Navigation = () => {
  const { carrito } = useContext(PizzasContext)
  const total = carrito.reduce(
    (acumulador, valorActual) => acumulador + valorActual.price * valorActual.count, 0
  )
  console.log(total)

  const handleMenu = ({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'

  return (
    <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
      <Container>
        <NavLink className={handleMenu} to='/'>
          <Navbar.Brand>Pizzeria Mamma Mia</Navbar.Brand>
        </NavLink>
        <Nav className='ms-auto'>
          <NavLink className={handleMenu} to='/carrito'> <FaShoppingCart />  $ {total} </NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
