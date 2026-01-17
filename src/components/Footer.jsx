import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import content from '../data/content.json';

const Footer = () => {
    const { global } = content;
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.column}>
                    <span className={styles.logo}>{global.siteName}</span>
                    <p className={styles.tagline}>Business Psychologist & Leadership Communication Coach</p>
                    <p className={styles.copyright}>© {year} {global.siteName}. All rights reserved.</p>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Navigation</h4>
                    <nav className={styles.footerNav}>
                        <Link to="/" className={styles.footerLink}>Home</Link>
                        {global.navigation.map((item, index) => (
                            <Link key={index} to={item.path} className={styles.footerLink}>
                                {item.label}
                            </Link>
                        ))}
                        <Link to="/contact" className={styles.footerLink}>Contact</Link>
                    </nav>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Connect</h4>
                    <div className={styles.socialLinks}>
                        <a
                            href={global.socials[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="Visit Steve Apps on LinkedIn"
                        >
                            <img src="/assets/linkedin-custom.png" alt="" className={styles.iconInverted} />
                            LinkedIn
                        </a>
                        <a
                            href={`mailto:${global.contactEmail}`}
                            className={styles.socialLink}
                            aria-label="Send email to Steve Apps"
                        >
                            <img src="/assets/contact-icon-white.png" alt="" className={styles.icon} />
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
