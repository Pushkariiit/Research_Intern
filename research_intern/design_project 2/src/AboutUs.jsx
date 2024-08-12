// src/AboutUs.jsx
import React from 'react';

function AboutUs() {
    return (
        <div style={styles.pageContainer}>
            <div style={styles.contentContainer}>
                <h1 style={styles.title}>About Us</h1>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Welcome to Advancing IoT Security: A Blockchain Shield!</h2>
                    <p style={styles.paragraph}>
                        We’re dedicated to revolutionizing IoT security by integrating cutting-edge blockchain technology. Our platform offers a unified interface to connect with major blockchain networks, ensuring secure and seamless interactions.
                    </p>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Mission Statement</h2>
                    <p style={styles.paragraph}>
                        Our mission is to enhance IoT security and simplify blockchain connectivity through seamless integration with leading blockchain platforms. We aim to provide a secure, user-friendly experience for managing digital assets and protecting IoT networks.
                    </p>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Our Integrations</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>Rainbow Wallet: Intuitive wallet for Ethereum and EVM-compatible chains.</li>
                        <li style={styles.listItem}>Coinbase Wallet: Versatile wallet supporting various cryptocurrencies with top-notch security.</li>
                        <li style={styles.listItem}>MetaMask: Widely-used Ethereum wallet for asset management and dApp interactions.</li>
                        <li style={styles.listItem}>WalletConnect: Protocol for secure connections between diverse wallets and dApps.</li>
                    </ul>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Technology and Approach</h2>
                    <p style={styles.paragraph}>
                        Leveraging Ethereum-based smart contracts and advanced security protocols, our platform ensures robust protection and easy connectivity. We focus on interoperability and enhancing user experience.
                    </p>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Achievements</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>Integrated with leading blockchain platforms.</li>
                        <li style={styles.listItem}>Implemented advanced security features for robust data protection.</li>
                    </ul>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Future Plans</h2>
                    <p style={styles.paragraph}>
                        We’re committed to expanding our technology, improving scalability, and exploring new applications to further enhance IoT security.
                    </p>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Contact Us</h2>
                    <p style={styles.paragraph}>
                        For inquiries or support, please reach out at <a href="mailto:yourcontact@example.com" style={styles.contactLink}>yourcontact@example.com</a>.
                    </p>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Acknowledgements</h2>
                    <p style={styles.paragraph}>
                        Special thanks to our partners and supporters for their invaluable contributions.
                    </p>
                </section>
            </div>
        </div>
    );
}

const styles = {
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
        padding: '20px',
    },
    contentContainer: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        width: '100%',
    },
    title: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '32px',
        color: '#333',
    },
    section: {
        marginBottom: '20px',
    },
    sectionTitle: {
        fontSize: '24px',
        color: '#333',
        marginBottom: '10px',
    },
    paragraph: {
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.6',
    },
    list: {
        listStyleType: 'disc',
        paddingLeft: '20px',
    },
    listItem: {
        marginBottom: '10px',
    },
    contactLink: {
        color: '#007bff',
        textDecoration: 'none',
    },
    contactLinkHover: {
        textDecoration: 'underline',
    },
};

export default AboutUs;
