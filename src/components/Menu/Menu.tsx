import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiMovie } from '@mdi/js';

import './Menu.css';

const Menu: FC = () => {
    return (
        <div className="menu_background">
            <nav className="menu_wrapper">
                <Link to="." className="menu_logo">
                    <Icon path={mdiMovie} size={1.5} />
                </Link>
                <NavLink to="." className="menu_link">
                    Home
                </NavLink>
                <NavLink to="movies" className="menu_link">
                    Movies
                </NavLink>
                <NavLink to="tvseries" className="menu_link">
                    TV Series
                </NavLink>
                <NavLink to="search" className="menu_link">
                    Search
                </NavLink>
            </nav>
        </div>
    );
};

export default Menu;
