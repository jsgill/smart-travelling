import React from 'react'
import Navbar from './navbar';
import PlanTrip from './../pages/planTrip';
import FullyFurnished from './fullyFurnished';
import DreamCall from './dreamCall';
import HappeningNow from './happeningNow';
import HowItWorks from './howItWorks';
import Footer from './footer';

function Layout() {
  return (
    <div>
        <Navbar/>
        <PlanTrip/>
        <FullyFurnished/>
        <DreamCall/>
        <HappeningNow/>
        <HowItWorks/>
        <Footer/>
    </div>
  )
}

export default Layout