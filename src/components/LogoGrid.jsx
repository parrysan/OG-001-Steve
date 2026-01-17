import React from 'react';
import styles from './LogoGrid.module.css';

const LogoGrid = ({ title, logos }) => {
    return (
        <div className={styles.wrapper}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <div className={styles.grid}>
                {logos.map((logo, index) => {
                    const isObject = typeof logo === 'object' && logo !== null;
                    const name = isObject ? logo.name : logo;
                    const image = isObject ? logo.image : null;
                    const alt = isObject && logo.alt ? logo.alt : `${name} company logo`;

                    return (
                        <div key={index} className={styles.logoItem}>
                            {image ? (
                                <img
                                    src={image}
                                    alt={alt}
                                    className={styles.logoImage}
                                    loading="lazy"
                                />
                            ) : (
                                <span className={styles.logoText}>{name}</span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LogoGrid;
