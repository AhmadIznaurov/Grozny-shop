import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs'
import { TitleAndPrice } from '../components/TitleAndPrice'
import { AdverstButtons } from '../components/AdverstButtons'
import { Slider } from '../components/Slider'
import { Button } from '../components/Button/Button'
import { InfoOfBuilding } from '../components/InfoOfBuilding'
import { Location } from '../components/Location'
import { Description } from '../components/Deskcription'
import { HomeInfo } from '../components/HomeInfo'
import { Footer } from '../components/Footer'


export const OpenAdverst = () => {
  return (
    <div>
      <Breadcrumbs />
      <TitleAndPrice />
     <AdverstButtons />

      <div className='sliders_and_buttons'>
        <div className='sliders_left'>
          <Slider />
        </div>
        <div className='buttons_right'>
          <Button text='8 938 173 03 50' color='white' width='330px' padding='20px' fontSize='25px'/>
          <br/>
          <br/>
          <Button text='Написать сообщение' color='white' width='330px' padding='20px' fontSize='25px'/>
        </div>
      </div>
      <InfoOfBuilding />
      <Location />
      <Description />
      <HomeInfo />
      <Footer />
    </div>
  )
}
