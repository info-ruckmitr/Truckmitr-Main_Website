import { oemOfferings } from '@data/oemPageContent'
import OEMHero from './OEMHero'
import OEMWhySection from './OEMWhySection'
import OEMOfferingBlock from './OEMOfferingBlock'
import OEMEcosystemSection from './OEMEcosystemSection'
import OEMCtaBand from './OEMCtaBand'
import styles from './OEM.module.css'

export default function OEM() {
  return (
    <>
      <OEMHero />
      <OEMWhySection />
      <div id="oem-offerings" className={styles.offeringsStack}>
        {oemOfferings.map((o) => (
          <OEMOfferingBlock key={o.id} offering={o} />
        ))}
      </div>
      <OEMEcosystemSection />
      <OEMCtaBand />
    </>
  )
}
