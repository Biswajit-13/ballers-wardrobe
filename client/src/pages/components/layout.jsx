import React from 'react';
import Navbar from './nav';

const Layout = ({children}) => {
    return (
        <div className='font-poppins lg:mx-[200px] md:mx-[90px] mx-[25px] bg-bg'>
        <Navbar/>
        <main>
        {children}
        </main>
        </div>
    );
}

export default Layout;
