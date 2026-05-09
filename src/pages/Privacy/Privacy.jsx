import styles from './Privacy.module.css'

export default function Privacy() {
  return (
    <div className={styles.privacyPage}>
      <div className="container">
        <div className={styles.contentInner}>
          {/* Header */}
          <header className={styles.header}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.subtitle}>
              Your privacy matters to us. Learn how we collect, use, and protect your personal data in accordance with the Digital Personal Data Protection Act, 2023.
            </p>
          </header>

          {/* Introduction */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <p className={styles.paragraph}>
              TruckMitr.com ("we," "our," or "us") believes in protecting your privacy. It clearly defines the manner in which we collect, use, disclose, and safeguard your personal data in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act). When you access our services or use them, you agree to the collection and processing of personal data as set out in this policy.
            </p>
          </div>

          {/* Extent and Application */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Extent and Application</h2>
            <p className={styles.paragraph}>
              This policy will cover personal data collected from users in India and also the users who access our service from outside India in connection with goods and services provided within the country.
            </p>
          </div>

          {/* Data We Use */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Data We Use</h2>
            <p className={styles.paragraph}>
              We can collect and process the following personal data:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Identification Data:</strong> One of those would either be an Aadhaar number or a PAN number or a GST number or a voter ID or other government-issued identification.
              </li>
              <li>
                <strong>Contact Data:</strong> Because the name, phone number, email address, and even physical address of the person or organisation are involved.
              </li>
              <li>
                <strong>Financial Data:</strong> Bank account details, UPI ID, and payment information are also affected because of this.
              </li>
              <li>
                <strong>Transactional Data:</strong> The data on services availed through our platform.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, device information, and location data concerning the infrastructure provided.
              </li>
              <li>
                <strong>Business Data:</strong> All the concerns related to the name of the company, registration number, and anything related to that.
              </li>
            </ul>
          </div>

          {/* Purposes of Collection */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Purposes of Collection of Data</h2>
            <p className={styles.paragraph}>
              We collect and process personal data for the following purposes:
            </p>
            <ul className={styles.list}>
              <li>That the users are identifiable and compliant with regulatory requirements, and for no other reason.</li>
              <li>For the facilitation of the services, for they include truck booking, freight management, and logistics support.</li>
              <li>For payment processing and billing management.</li>
              <li>It cannot supply customer service and consumer complaint redressal in line with data protection and cybersecurity standards.</li>
              <li>The public service recognises the value of anti-fraud prevention that provides for platform security.</li>
              <li>This means the sending of updates, notifications, and service-related information.</li>
              <li>For legal and statutory purposes.</li>
            </ul>
          </div>

          {/* Consent and Revocation */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Consent and Revocation</h2>
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Consent:</h3>
              <p className={styles.paragraph}>
                Compliance is required in the drawing of your data and subsequent processing in order to transact. You need to give permission to process your data that is received on registration or using the service.
              </p>
            </div>
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Withdrawal of Consent:</h3>
              <p className={styles.paragraph}>
                Termination of permission may happen anytime if the user makes a request of <a href="mailto:contact@truckmitr.com" className={styles.link}>contact@truckmitr.com</a>. Withdrawal itself may impair your access to the available services.
              </p>
            </div>
          </div>

          {/* Data Sharing */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Data Sharing and Data Collection</h2>
            <p className={styles.paragraph}>
              We do not rent or sell the collected personal data. Such data can, however, be released to:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Authorised Third Parties:</strong> Third parties that include payment processors, logistics partners, and identity verification services.
              </li>
              <li>
                <strong>Government Authorities:</strong> Such data may be docked before government or forwarded to them, as per current acts, court procedures, or regulatory mandates.
              </li>
              <li>
                <strong>Service Providers:</strong> Under stringent confidentiality agreements, such information might be employed by vendors for outsourcing purposes.
              </li>
            </ul>
          </div>

          {/* Data Storage */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Data Storage</h2>
            <p className={styles.paragraph}>
              Data is kept within the limit of tenure specified in the defined purpose or within applicable laws, whichever comes later. Data is either made anonymous at the end of the retention period or treated to be physically deleted.
            </p>
          </div>

          {/* Rights of Data Principal */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Rights of the Data Principal</h2>
            <p className={styles.paragraph}>
              As a data principal, you have the rights stated below under the DPDP Act:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Right to Access:</strong> Inform them that you want a copy of whatever personal information about you.
              </li>
              <li>
                <strong>Right to Rectification and Erasure:</strong> Correct the data inaccuracies; you can also ask the deletion of personal information.
              </li>
              <li>
                <strong>Right to Data Portability:</strong> Allows the transfer of personal information in a machine-readable format.
              </li>
              <li>
                <strong>Right to Remedial Redress:</strong> Lodge complaints in case of misused personal information.
              </li>
            </ul>
          </div>

          {/* Data Security */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Data Security</h2>
            <p className={styles.paragraph}>
              We continue to implement the suitable technical and managerial measures to keep personal data protected from unauthorised use, alteration, or disclosure. This includes data security measures on encryption, secure servers, and access controls.
            </p>
          </div>

          {/* Cross-Border Data Transfer */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Cross-Border Data Transfer</h2>
            <p className={styles.paragraph}>
              Legality of data passages in and out of the geographical boundaries of India involve the transfer of personal information. This is part of government-approved jurisdictions under the applicable laws so as to establish the integrity of country-specific reference security.
            </p>
          </div>

          {/* Contact Information */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Contact Information for Challenges and Queries</h2>
            <p className={styles.paragraph}>
              For any questions, challenges, or rights exercised regarding the above information, please contact our redressal officer in charge:
            </p>
            <div className={styles.contactBox}>
              <p><strong>Name:</strong> Mr. Deepak Arora</p>
              <p><strong>Email:</strong> <a href="mailto:contact@truckmitr.com" className={styles.link}>contact@truckmitr.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+919254972811" className={styles.link}>+91 9254972811</a></p>
              <p><strong>Address:</strong> Rohtak Rd, Surya Nagar, Bahadurgarh, Sankhol, Haryana 124507</p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>12. Changes to our Privacy Policy</h2>
            <p className={styles.paragraph}>
              We may update this policy periodically to reflect changes in legal or operational requirements. Notification of any significant changes will be achieved through our website or other appropriate directions.
            </p>
            <p className={styles.paragraph}>
              When opting to continue use of our services, you acknowledge and agree with the terms of this Privacy Policy.
            </p>
          </div>

          {/* Last Updated */}
        
        </div>
      </div>
    </div>
  )
}
