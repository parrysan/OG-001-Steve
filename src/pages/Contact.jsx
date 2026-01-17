import React from 'react';
import content from '../data/content.json';
import styles from './Page.module.css';
import Button from '../components/Button';

const Contact = () => {
    const { contact } = content;
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className={styles.pageWrapper}>
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '600px' }}>
                        <h1 className="t-h1">{contact.title}</h1>
                        <p className={`t-h3 ${styles.pageSubtitle}`}>
                            {contact.desc}
                        </p>

                        {!isSubmitted ? (
                            <form
                                style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}
                                onSubmit={handleSubmit}
                            >
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Name</label>
                                    <input type="text" className={styles.formInput} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Email</label>
                                    <input type="email" className={styles.formInput} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>What's the situation?</label>
                                    <textarea rows="4" className={styles.formInput} required></textarea>
                                </div>
                                <Button variant="primary" type="submit" style={{ alignSelf: 'flex-start' }}>
                                    Send Request
                                </Button>
                            </form>
                        ) : (
                            <div className={styles.successMessage} style={{
                                padding: 'var(--space-lg)',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--color-border)',
                                marginTop: 'var(--space-md)'
                            }}>
                                <h3 className="t-h3" style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-sm)' }}>Message Sent</h3>
                                <p className="t-body" style={{ opacity: 0.9 }}>
                                    Thank you for reaching out. We will get in touch shortly.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
