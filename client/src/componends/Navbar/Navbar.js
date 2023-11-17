import React from 'react';
import logo from './img/Groceries.png'
import { useState } from 'react';
const Navbar =() => {

    return (
       <nav>
        <div className="logo">
<img src={logo} alt="" />
        </div>
        <div className="linkn">
<a href="">Home</a>
<a href="">Menu</a>
<a href="">About Us</a>
<a href="">Contact</a>
        </div>
        <div className="btnn">
                
<button className='btn1'><svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8397 0.333432C20.576 -0.218851 21.6207 -0.0696181 22.173 0.666765L26.673 6.66677H26.6783C29.7427 6.66677 32.0862 9.39826 31.6202 12.4271L29.8253 24.0938C29.45 26.5329 27.3513 28.3334 24.8833 28.3334H6.79595C4.3281 28.3334 2.22935 26.5329 1.8541 24.0938L0.0592144 12.4271C-0.406752 9.39825 1.93665 6.66677 5.00108 6.66677H5.00635L9.50635 0.666765C10.0586 -0.0696181 11.1033 -0.218851 11.8397 0.333432C12.576 0.885715 12.7253 1.93038 12.173 2.66676L9.17301 6.66677H22.5063L19.5063 2.66676C18.954 1.93038 19.1033 0.885715 19.8397 0.333432ZM5.82026 10.0001C5.83236 10.0002 5.84446 10.0002 5.85655 10.0001H25.8228H25.8592H26.6783C27.6998 10.0001 28.4808 10.9106 28.3255 11.9203L26.5307 23.5869C26.4057 24.3999 25.706 25.0001 24.8833 25.0001H6.79595C5.97333 25.0001 5.27375 24.3999 5.14866 23.5869L3.3538 11.9203C3.19846 10.9106 3.9796 10.0001 5.00108 10.0001H5.82026Z" fill="#101010"/>
</svg></button>
<button className='btn2'>Sign Up</button>
        </div>
       </nav>
    );
};

export default Navbar;
