import {useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
function Navbar() {
    const [openNav, setOpenNav]= useState(false)
    const [closeNav, setCloseNav]= useState(false)
    function OpenNav(){
        setOpenNav(prevState=>!prevState)
    }
function CloseNav(){
    setCloseNav(prevState=> !prevState)
}
  return (
    <div>
    <button id="bars"  onClick={OpenNav} className='btn'>open Nav</button>
      <nav className='navbar navbar-md bg-primary    isopenNav? openNav: setOpenNav'>
      <button id="bars" onClick={()=>setCloseNav(true)}>XClose</button>
      <ul>
      <Link to="/"><li>Home</li></Link>
    <Link to="/UseState"><li>useState</li></Link>
    <Link to="/UseEffect"><li>useEffect</li></Link>
    <Link to="/UseContext"><li>useContext</li></Link>
    <Link to="/UseCallback"><li>useCallback</li></Link>
    <Link to="/UseMemo"><li>useMemo</li></Link>
    <Link to="/UseRef"><li>useRef</li></Link>
    <Link to="/UseTransition"><li>useTransition</li></Link>
    <Link to="/UseReducer"><li>useReducer</li></Link>
      </ul>
      
      </nav>
    </div>
  )
}

export default Navbar
