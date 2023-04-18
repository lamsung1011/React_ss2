import './Nav.scss';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (

        <div className="topnav">
            <NavLink activeClassName="active" to="/" exact>Covid</NavLink>
            <NavLink activeClassName="active" to="/timer">Timer App</NavLink>
            <NavLink activeClassName="active" to="todo">Todos App</NavLink>
            <NavLink activeClassName="active" to="/blog">Blog App</NavLink>
            <NavLink activeClassName="active" to="/secret">Secret App</NavLink>
        </div>

    )
}

export default Nav;