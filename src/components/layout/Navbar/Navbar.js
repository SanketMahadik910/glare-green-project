import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setOpenDropdown(null);
            setIsMobileMenuOpen(false);
        }
    };

    const menuItems = [
        {
            title: 'Overviews',
            dropdown: [
                { name: 'About Us', section: 'about', path: '/about' },
                { name: 'Board of Directors', section: 'board', path: '/board-of-directors' },
                { name: 'Awards & Recognition', section: 'awards' }
            ]
        },
        {
            title: 'Project',
            dropdown: [
                { name: 'Residential', section: 'residential', path: '/residential' },
                { name: 'Commercial & Hospitality', section: 'commercial' },
                { name: 'International', section: 'international' }
            ]
        },
        { title: 'Innovation', section: 'innovation', path: '/innovation' },
        {
            title: 'Infrastructure',
            dropdown: [
                { name: 'Design & Engineering', section: 'design' },
                { name: 'Facility', section: 'facility' },
                { name: 'Project Management', section: 'management' }
            ]
        },
        { title: 'Contact Us', section: 'contact', path: '/contact' }
    ];

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href='/' className="logo-link">
                    <img
                        src='https://www.glaregreen.com/wp-content/uploads/2020/07/cropped-logo-300x39.png'
                        alt="Glare Green"
                    />
                </a>

                {/* Desktop Menu */}
                <ul className="nav-menu">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            onMouseEnter={() => item.dropdown && toggleDropdown(index)}
                            onMouseLeave={() => item.dropdown && toggleDropdown(null)}
                        >
                            {item.path && !item.dropdown ? (
                                <Link to={item.path} className="nav-item">
                                    {item.title}
                                </Link>
                            ) : (
                                <div
                                    className="nav-item"
                                    onClick={
                                        !item.dropdown ? () => scrollToSection(item.section) : null
                                    }
                                >
                                    {item.title}
                                    {item.dropdown && <span className="dropdown-arrow">▼</span>}
                                </div>
                            )}
                            {item.dropdown && openDropdown === index && (
                                <Dropdown
                                    items={item.dropdown}
                                    scrollToSection={scrollToSection}
                                />
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <ul className="mobile-menu">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            {item.path && !item.dropdown ? (
                                <Link
                                    to={item.path}
                                    className="mobile-nav-item"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            ) : (
                                <div
                                    className="mobile-nav-item"
                                    onClick={() => {
                                        if (item.dropdown) {
                                            toggleDropdown(index);
                                        } else {
                                            scrollToSection(item.section);
                                        }
                                    }}
                                >
                                    {item.title}
                                    {item.dropdown && <span className="dropdown-arrow">▼</span>}
                                </div>
                            )}
                            {item.dropdown && openDropdown === index && (
                                <Dropdown
                                    items={item.dropdown}
                                    scrollToSection={scrollToSection}
                                    isMobile={true}
                                    closeMenu={() => setIsMobileMenuOpen(false)}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

const Dropdown = ({ items, isMobile = false, closeMenu, scrollToSection }) => {
    return (
        <ul className={`dropdown ${isMobile ? 'mobile-dropdown' : ''}`}>
            {items.map((item, index) => (
                <li key={index} className="dropdown-item">
                    {item.path ? (
                        <Link
                            to={item.path}
                            onClick={() => isMobile && closeMenu?.()}
                            className="nav-link"
                        >
                            {item.name}
                        </Link>
                    ) : (
                        <span
                            onClick={() => {
                                scrollToSection(item.section);
                                closeMenu?.();
                            }}
                            className="nav-link"
                        >
                            {item.name}
                        </span>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Navbar;
