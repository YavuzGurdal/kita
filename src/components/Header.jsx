import React, { useEffect, useState } from 'react'
// import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
// import { MdOutlineLogout } from 'react-icons/md';
// import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {
    // const { theme, setTheme } = useContext(ThemeContext)

    // const toogleTheme = () => {
    //     setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    // }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Temizlik işlevi
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id="header">
            <div className="headerWrapper">
                <div className="headerLeft">
                    <Link to='/'>
                        <div className="logo">AWO</div>
                    </Link>

                    <NavLink to='/home' className={({ isActive }) => isActive ? "active" : ''}>
                        <div className="linkPage">Home</div>
                    </NavLink>
                    <NavLink to='/uberuns' style={{ marginLeft: '2px' }} className={({ isActive }) => isActive ? "active" : ''}>
                        <div className="linkPage">Überuns</div>
                    </NavLink>
                    <NavLink to='/projekte' style={{ marginLeft: '2px' }} className={({ isActive }) => isActive ? "active" : ''}>
                        <div className="linkPage">Projekte</div>
                    </NavLink>
                    <NavLink to='/stellenangebote' style={{ marginLeft: '2px' }} className={({ isActive }) => isActive ? "active" : ''}>
                        <div className="linkPage">Stellenangebote</div>
                    </NavLink>
                    <NavLink to='/kontakt' style={{ marginLeft: '2px' }} className={({ isActive }) => isActive ? "active" : ''}>
                        <div className="linkPage">Kontakt</div>
                    </NavLink>
                    {/* <Link to='/15m'>
                        <div className="logo linkPage">15m</div>
                    </Link>
                    <Link to='/4h'>
                        <div className="logo linkPage">4hr</div>
                    </Link> */}

                    {/* <!-- <div className="logo">Logo2</div> --> */}
                </div>
                <div className="headerRight">
                    <ul>
                        {/* <li>button 1</li> */}
                        {/* <li><MdOutlineLogout size={20} /> Anmeldeformular</li> */}
                        {windowWidth < 481 ? (
                            <li>AF</li>
                        ) : (
                            <li>Anmeldeformular</li>
                        )}
                        {/* <li onClick={toogleTheme}>{theme === 'light' ? <BsFillMoonStarsFill size={20} style={{ color: '#666' }} /> : <BsSunFill size={20} />}</li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header