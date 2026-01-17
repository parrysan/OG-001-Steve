import React from 'react';
import styles from './Footer.module.css';
import content from '../data/content.json';

const Footer = () => {
    const { global } = content;
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.left}>
                    <span className={styles.logo}>{global.siteName}</span>
                    <p className={styles.copyright}>© {year} All rights reserved.</p>
                </div>
                <div className={styles.right}>
                    <a href={global.socials[0].url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <img src="/assets/linkedin-custom.png" alt="LinkedIn" className={styles.iconInverted} />
                        LinkedIn
                    </a>
                    <a href={`mailto:${global.contactEmail || 'hello@steveapps.com'}`} className={styles.link}>
                        <img src="/assets/contact-icon-white.png" alt="Contact" className={styles.icon} />
                        Contact Us
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
