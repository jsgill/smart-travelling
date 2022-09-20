import Link from 'next/link'
import React from 'react'
import styles from '../styles/Plantrip.module.css'
function PlanTrip() {
  return (
    <>
    <div className={styles.home_PlanTrip}>
        <div className={styles.home_bestTrip}>
            <h1>YOUR BEST TRIP,<br /> UNIQUE TO YOUR NEEDS, JUST FEW CLICKS AWAY</h1>
        </div>
    </div>
    <div className={styles.home_planButton}>
        <Link href="/"><a className='btn' id={styles.home_planYourTrip} type="button"><span>Plan your Trip</span></a></Link>
    </div>
    </>
  )
}

export default PlanTrip