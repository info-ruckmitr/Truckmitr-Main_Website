import styles from './Terms.module.css'

export default function Terms() {
  return (
    <div className={styles.termsPage}>
      <div className="container">
        <div className={styles.contentInner}>
          {/* Header */}
          <header className={styles.header}>
            <h1 className={styles.title}>Terms of Use</h1>
            <p className={styles.subtitle}>
              Welcome to TruckMitr.com! These Terms and Conditions govern your use of our website. Please read them carefully before using our services.
            </p>
          </header>

          {/* Introduction */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Welcome to TruckMitr.com</h2>
            <p className={styles.paragraph}>
              These Terms and Conditions govern your use of our website. By accessing or using our website, you agree to these terms. If you do not agree to any of these conditions, please do not use our site.
            </p>
          </div>

          {/* Use of the Website */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Use of the Website</h2>
            <p className={styles.paragraph}>
              You may only use our website for legitimate reasons. You agree not to engage in any conduct that may damage, disable, overburden, or impair the operation of our website or interfere with other user's enjoyment of it.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Intellectual Property</h2>
            <p className={styles.paragraph}>
              The information, logos, designs, and trademarks shown on our website are the property of TruckMitr.com or its third-party licensees. You cannot use, copy, distribute, or alter any of our content without our prior written permission.
            </p>
          </div>

          {/* User Content */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>3. User Content</h2>
            <p className={styles.paragraph}>
              Suppose you post material on our website, such as comments or reviews. In that case, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display that content.
            </p>
          </div>

          {/* Links to Third-Party Websites */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Links to Third-Party Websites</h2>
            <p className={styles.paragraph}>
              Our website may include links to third-party sites. We are not responsible for the content, accuracy, or dependability of these websites. A link to these websites does not indicate sponsorship or association with them.
            </p>
          </div>

          {/* Disclaimer of Warranties */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Disclaimer of Warranties</h2>
            <p className={styles.paragraph}>
              We make no representations or guarantees, either stated or implied, about the correctness, reliability, or completeness of the information on our website. You use our website at your own risk.
            </p>
          </div>

          {/* Limitations of Liability */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Limitations of Liability</h2>
            <p className={styles.paragraph}>
              In no circumstances will TruckMitr.com or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages resulting from or in connection with your use of our website.
            </p>
          </div>

          {/* Indemnification */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Indemnification</h2>
            <p className={styles.paragraph}>
              You undertake to pay and keep TruckMitr.com and its affiliates harmless from all claims, liabilities, damages, and costs (including attorneys' fees) resulting from or connected to your breach of these terms or use of our website.
            </p>
          </div>

          {/* Changes in Terms */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Changes in Terms of Use</h2>
            <p className={styles.paragraph}>
              We retain the right to change or modify these Terms of Service at any time and without previous notice. Your continued use of our website following such modifications signifies that you accept the amended terms.
            </p>
          </div>

          {/* Governing Law */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Governing Law</h2>
            <p className={styles.paragraph}>
              These Terms of Use are governed and interpreted in accordance with the laws of Haryana Jurisdiction, notwithstanding any conflict of law rules.
            </p>
          </div>

          {/* Contact Us */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Contact Us</h2>
            <p className={styles.paragraph}>
              If you have any questions or issues regarding our Terms of Service, don't hesitate to get in touch with us at <a href="mailto:contact@truckmitr.com" className={styles.link}>contact@truckmitr.com</a>
            </p>
            <div className={styles.thankYouBox}>
              <p>Thank you for selecting TruckMitr.com. Please enjoy browsing our website!</p>
            </div>
          </div>

          {/* Last Updated */}

        </div>
      </div>
    </div>
  )
}
