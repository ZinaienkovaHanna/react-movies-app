import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiMovie } from '@mdi/js';

import './Menu.css';

const Menu: FC = () => {
    return (
        <div className="menu_background">
            <nav>
                <ul className="menu_wrapper">
                    <li className="menu_li">
                        <Link to="/" className="menu_logo">
                            <Icon path={mdiMovie} size={1.5} />
                        </Link>
                    </li>
                    <li className="menu_li">
                        <NavLink to="/" className="menu_link">
                            Home
                        </NavLink>
                    </li>
                    <li className="menu_li">
                        <NavLink to="/movies" className="menu_link">
                            Movies
                        </NavLink>
                    </li>
                    <li className="menu_li">
                        <NavLink to="/tv" className="menu_link">
                            TV Series
                        </NavLink>
                    </li>
                    <li className="menu_li">
                        <NavLink to="/list" className="menu_link">
                            My list
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
