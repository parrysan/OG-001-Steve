import React from 'react';
import content from '../data/content.json';
import styles from './Page.module.css';

const Clients = () => {
    const { clients } = content;

    return (
        <div className={styles.pageWrapper}>
            <section className="section">
                <div className="container">
                    <h1 className="t-h1" style={{ marginBottom: 'var(--space-md)' }}>{clients.title}</h1>
                    <p className={`t-h3 ${styles.pageSubtitle}`}>
                        {clients.description}
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: 'var(--space-md)',
                        marginTop: 'var(--space-lg)'
                    }}>
                        {clients.list.sort((a, b) => {
                            const nameA = typeof a === 'string' ? a : a.name;
                            const nameB = typeof b === 'string' ? b : b.name;
                            return nameA.localeCompare(nameB);
                        }).map((client, index) => {
                            const isObject = typeof client === 'object';
                            const name = isObject ? client.name : client;
                            const logo = isObject ? client.logo : null;

                            return (
                                <div key={index} className={styles.clientCard}>
                                    {logo ? (
                                        <img
                                            src={logo}
                                            alt={`${name} logo`}
                                            style={{
                                                maxWidth: '90%',
                                                maxHeight: '80px',
                                                width: 'auto',
                                                height: 'auto',
                                                display: 'block'
                                            }}
                                        />
                                    ) : (
                                        name
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clients;
