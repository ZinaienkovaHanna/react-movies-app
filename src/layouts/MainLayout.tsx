import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';

const MainLayout: FC = () => {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    );
};

export default MainLayout;
