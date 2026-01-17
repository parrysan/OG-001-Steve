import React from 'react';
import content from '../data/content.json';
import styles from './Page.module.css'; // Shared page styles

const About = () => {
    const { about } = content;

    return (
        <div className={styles.pageWrapper}>
            <section className="section">
                <div className="container">
                    <h1 className="t-h1" style={{ marginBottom: 'var(--space-md)' }}>{about.hero.headline}</h1>

                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutContent}>
                            <p className={`t-h3 ${styles.pageSubtitle}`}>{about.hero.subtext}</p>

                            {about.bio.map((paragraph, index) => (
                                <p key={index} className="t-body" style={{ marginBottom: 'var(--space-md)' }}>
                                    {paragraph}
                                </p>
                            ))}
                            {about.cta && (
                                <a
                                    href={about.cta.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: 'var(--color-accent)',
                                        fontWeight: '600',
                                        fontSize: '1.25rem',
                                        textDecoration: 'underline',
                                        marginTop: 'var(--space-md)',
                                        display: 'inline-block'
                                    }}
                                >
                                    {about.cta.text}
                                </a>
                            )}
                        </div>

                        <aside className={styles.accreditations}>
                            <h3>Professional Accreditations</h3>
                            {about.badges.map((badge) => (
                                <img
                                    key={badge.id}
                                    src={badge.image}
                                    alt={badge.alt}
                                    className={styles.badge}
                                />
                            ))}
                        </aside>
                    </div>

                    <div className={styles.divider} style={{ margin: 'var(--space-xl) 0' }}></div>

                    {/* How I Work Section */}
                    {about.howIWork && (
                        <div style={{ marginBottom: 'var(--space-xl)' }}>
                            <h2 className="t-h2" style={{ marginBottom: 'var(--space-lg)' }}>{about.howIWork.title}</h2>
                            <ul className={styles.howIWorkGrid}>
                                {about.howIWork.points.map((point, index) => (
                                    <li key={index} className={styles.howIWorkItem}>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className={styles.timeline}>
                        {about.milestones.map((item, index) => (
                            <div key={index} className={styles.timelineItem}>
                                <span className={styles.year}>{item.year}</span>
                                <span className={styles.milestoneTitle}>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
