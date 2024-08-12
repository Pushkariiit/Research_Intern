import React, { useState } from 'react';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        // Add your search logic here
        console.log('Searching for:', searchQuery);
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.navItemsLeft}>
                <a href="/home" style={styles.navLink}>Home</a>
                <a href="/dashboard" style={styles.navLink}>Dashboard</a>
                <a href="/about" style={styles.navLink}>About Us</a>
                <a href="/contact" style={styles.navLink}>Contact</a>
            </div>
            <div style={styles.navItemsRight}>
                <textarea
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={styles.searchTextarea}
                />
                <button onClick={handleSearch} style={styles.searchButton}>
                    Search
                </button>
            </div>
        </nav>
    );
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
    },
    navItemsLeft: {
        display: 'flex',
        gap: '15px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
    },
    navItemsRight: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    searchTextarea: {
        padding: '5px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        outline: 'none',
        resize: 'none',
        height: '30px', // Set height according to your preference
        width: '200px', // Set width according to your preference
    },
    searchButton: {
        padding: '6px 12px',
        fontSize: '16px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default Navbar;
