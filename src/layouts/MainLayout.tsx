import { FC } from 'react';
import Menu from '../components/Menu';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    );
};

export default MainLayout;
