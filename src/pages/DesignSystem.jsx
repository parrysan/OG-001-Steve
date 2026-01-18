import React from 'react';
import styles from './DesignSystem.module.css';
import Button from '../components/Button';

const ColorSwatch = ({ name, variable, hex }) => (
    <div className={styles.swatchCard}>
        <div className={styles.swatch} style={{ backgroundColor: `var(${variable})` }}></div>
        <div className={styles.swatchInfo}>
            <div className={styles.colorName}>{name}</div>
            <div className={styles.colorHex}>{variable}</div>
            <div className={styles.colorHex}>{hex}</div>
        </div>
    </div>
);

const TypeSpec = ({ label, element: Element, className = '' }) => (
    <div className={styles.typeRow}>
        <div className={styles.typeLabel}>{label}</div>
        <Element className={className}>The quick brown fox jumps over the lazy dog.</Element>
    </div>
);

const DesignSystem = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className="container">
                <div style={{ padding: 'var(--space-xl) 0' }}>
                    <h1 className="t-h1">Design System</h1>
                    <p className="t-h3" style={{ color: 'var(--color-text-muted)' }}>
                        Core styles, variables, and components guide.
                    </p>
                </div>

                {/* Colors */}
                <section className={styles.section}>
                    <h2 className="t-h2" style={{ marginBottom: 'var(--space-lg)' }}>Colors</h2>

                    <h3 className="t-h4" style={{ marginBottom: 'var(--space-md)' }}>Base Palette</h3>
                    <div className={styles.grid}>
                        <ColorSwatch name="Background" variable="--color-bg" hex="#F8FAFC" />
                        <ColorSwatch name="Background Alt" variable="--color-bg-alt" hex="#F0F9FF" />
                        <ColorSwatch name="Text Primary" variable="--color-text" hex="#0F172A" />
                        <ColorSwatch name="Text Muted" variable="--color-text-muted" hex="#475569" />
                    </div>

                    <h3 className="t-h4" style={{ margin: 'var(--space-lg) 0 var(--space-md)' }}>Brand</h3>
                    <div className={styles.grid}>
                        <ColorSwatch name="Hero / Primary" variable="--color-hero-bg" hex="#0369A1" />
                        <ColorSwatch name="Teal / Secondary" variable="--color-section-teal" hex="#0D9488" />
                        <ColorSwatch name="Accent" variable="--color-accent" hex="#0369A1" />
                        <ColorSwatch name="Accent Light" variable="--color-accent-light" hex="#E0F2FE" />
                    </div>
                </section>

                {/* Typography */}
                <section className={styles.section}>
                    <h2 className="t-h2" style={{ marginBottom: 'var(--space-lg)' }}>Typography</h2>
                    <div className={styles.typeScale}>
                        <TypeSpec label="H1" element="h1" className="t-h1" />
                        <TypeSpec label="H2" element="h2" className="t-h2" />
                        <TypeSpec label="H3" element="h3" className="t-h3" />
                        <TypeSpec label="H4" element="h4" className="t-h4" />
                        <TypeSpec label="Body Large" element="p" className="t-body-lg" />
                        <TypeSpec label="Body" element="p" className="t-body" />
                        <TypeSpec label="Small" element="p" className="t-small" />
                    </div>
                </section>

                {/* Buttons */}
                <section className={styles.section} style={{ borderBottom: 'none' }}>
                    <h2 className="t-h2" style={{ marginBottom: 'var(--space-lg)' }}>Buttons</h2>
                    <div className={styles.buttonGrid}>
                        <Button variant="primary">Primary Button</Button>
                        <Button variant="secondary">Secondary Button</Button>
                        <Button variant="outline">Outline Button</Button>
                        <div style={{ padding: '20px', backgroundColor: '#333', borderRadius: '4px' }}>
                            {/* Dark background for inverted/nav buttons */}
                            <Button variant="inverted">Inverted</Button>
                            <span style={{ margin: '0 10px' }}></span>
                            <Button variant="navCta">Nav CTA</Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DesignSystem;
