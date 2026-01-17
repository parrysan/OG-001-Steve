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

                    return (
                        <div key={index} className={styles.logoItem}>
                            {image ? (
                                <img src={image} alt={`${name} logo`} className={styles.logoImage} />
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
