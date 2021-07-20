import React from 'react';
import s from './Header.module.css';
import Links from './Links.jsx';
let Header =()=>{
    return(
        <header className={s.wrapper}>
      <div className={s.topWrapper}>
        <div className={s.logo}><img src="https://i.ibb.co/jymJB8w/logo.png"></img></div>
        <div className={s.contacts}>
          <div className={s.phone}>Phone number +380-95-133-27-54</div>
          <div className={s.schedule}>Work schedule: 10:00 - 20:00 without dayoff</div>
        </div>
        <div className={s.social}>
                    <div><a href="#"><i className="fab fa-instagram"></i></a></div>
                    <div><a href="#"><i className="fab fa-facebook-square"></i></a></div>
                    <div><a href="#"><i className="fab fa-telegram"></i></a></div>
        </div>
      </div>

      <div className={s.bottomWrapper}>
        <Links link="/Product" textLink="My Products" />
        <Links link="/Profile" textLink="My Profile" />
        <Links link="/Catalog" textLink="Catalog" />
        <Links link="/Home" textLink="Home" />
        <Links link="/Sales" textLink="Sales" />
        <Links link="/New" textLink="New" />
        <Links link="/Contacts" textLink="Contacts and Delivery" />
        
      </div>
      
    </header>
    );
}

export default Header;