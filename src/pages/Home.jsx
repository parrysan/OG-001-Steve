import React from 'react';
import styles from './Home.module.css';
import content from '../data/content.json';
import Button from '../components/Button';
import LogoGrid from '../components/LogoGrid';

import ParallaxElement from '../components/ParallaxElement';

const Home = () => {
    const { home, global } = content;

    return (
        <div className={styles.homeWrapper}>

            {/* 1. New Hero Section */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContainer}`}>
                    <div className={`${styles.heroContent} fade-in-up`}>
                        <span className={styles.eyebrow}>{home.hero.eyebrow}</span>
                        <h1 className={styles.headline}>{home.hero.headline}</h1>
                        <p className={styles.subtext}>{home.hero.subtext}</p>
                    </div>
                    <div className={`${styles.heroImageWrapper} fade-in-up delay-200`}>
                        <ParallaxElement speed={0.15}>
                            <img src="/steve_hero.png" alt={home.hero.imageAlt} className={styles.heroImage} />
                        </ParallaxElement>
                    </div>
                </div>
            </section>

            {/* Credibility Strip */}
            <div className={`${styles.credibility} fade-in-up delay-300`}>
                <div className={`container ${styles.credibilityContainer}`}>
                    {home.credibility.items.map((item, index) => (
                        <div key={index} className={styles.credibilityItem}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* Who I Work With Section */}
            <section className={styles.whoSection}>
                <div className="container">
                    <h2 className="t-h2 fade-in-up" style={{ marginBottom: 'var(--space-lg)' }}>{home.whoIWorkWith.title}</h2>
                    <ul className={styles.whoList}>
                        {home.whoIWorkWith.points.map((point, index) => (
                            <li key={index} className={`${styles.whoItem} fade-in-up delay-100`}>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 2. Journey Section */}
            <section className="section">
                <div className="container text-center">
                    <h2 className="t-h3" style={{ marginBottom: 'var(--space-xl)' }}>{home.journey.title}</h2>
                    <div className={styles.journeyGrid}>
                        {home.journey.steps.map((step, i) => (
                            <div key={step.step} className={`${styles.journeyStep} fade-in-up`} style={{ animationDelay: `${i * 100}ms` }}>
                                <div className={styles.stepNumber}>{step.step}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Expert Coaching Grid */}
            <section className={`${styles.coachingSection}`}>
                <div className="container">
                    <h2 className="t-h2 text-white" style={{ marginBottom: 'var(--space-lg)' }}>{home.coaching.title}</h2>
                    <div className={styles.coachingGrid}>
                        {home.coaching.items.map((item, index) => (
                            <div key={index} className={`${styles.coachingCard} fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
                                <h3 className={styles.coachingTitle}>{item.title}</h3>
                                <p className={styles.coachingDesc}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Experience Cards */}
            <section className="section bg-alt">
                <div className="container">
                    <h2 className="t-h2" style={{ marginBottom: 'var(--space-xl)' }}>{home.experience.title}</h2>
                    <div className={styles.experienceGrid}>
                        {home.experience.cards.map((card, index) => (
                            <div key={index} className={`${styles.experienceCard} fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
                                <h3 className={styles.expTitle}>{card.title}</h3>
                                <p className={styles.expSubtitle}>{card.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiation Promo Section */}
            {home.differentiation && (
                <section className={styles.promoSection}>
                    <div className="container">
                        <h2 className={`${styles.promoText} fade-in-up`}>
                            {home.differentiation.text}
                        </h2>
                    </div>
                </section>
            )}

            {/* 5. Trust / Proof & Insights Combined */}
            <section className="section">
                <div className="container">
                    <div className={styles.trustAndInsightsGrid}>
                        {/* Title (Row 1, Col 1) */}
                        <h2 className={styles.trustTitle}>{home.proof.title}</h2>

                        {/* Left Column: Logos (Row 2, Col 1) */}
                        <div className={styles.logoGridWrapper}>
                            <LogoGrid logos={home.proof.logos} />
                        </div>

                        {/* Right Column: Insights Sidebar (Row 2, Col 2) */}
                        {home.insights && (
                            <div className={`${styles.insightsPanel} fade-in-up delay-100`}>
                                <h2 className={styles.insightsTitle}>{home.insights.title}</h2>
                                <p className={styles.insightsBody}>{home.insights.body}</p>
                                <a
                                    href={home.insights.linkUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.insightsLink}
                                >
                                    {home.insights.linkText}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* 6. Final CTA */}
            <section className={styles.finalCta}>
                <div className="container text-center">
                    <h2 className={`t-h2 ${styles.finalCtaTitle}`}>
                        {home.finalCta.title}
                    </h2>
                    <p className={styles.finalCtaDesc}>
                        {home.finalCta.desc}
                    </p>
                    <Button to={global.cta.bookingLink} className={styles.ctaButtonWhite}>
                        {global.cta.primary}
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
