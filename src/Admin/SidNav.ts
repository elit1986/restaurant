import React, { useState, useEffect } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

interface IUser {
    photoURL?: string;
    displayName?: string;
}

interface IMenuItem {
    id: number;
    text: string;
    to: string;
}

const SideNav: React.FC = () => {
    const { user } = useAuth() as { user: IUser };
    const [sidenav, setSidenav] = useState<boolean>(true);

    // Toggling the side nav
    const handlenav = () => {
        setSidenav(!sidenav);
    };

    // Auto hide 
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1098) {
                setSidenav(false);
            } else {
                setSidenav(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const menu: IMenuItem[] = [
        { id: 1, text: 'Dashboard', to: "/admin" },
        { id: 2, text: 'Manage Products', to: "/admin/manage-products" },
        { id: 3, text: 'Add Product', to: "/admin/add" },
    ];

    return (
        // ... JSX code remains the same
    );
}

export default SideNav;
