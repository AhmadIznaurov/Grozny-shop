import React from 'react'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { TitleAndPrice } from '../components/TitleAndPrice'
import { AdverstButtons } from '../components/AdverstButtons'
import { Slider } from '../components/Slider'
import { Button } from '../components/Button/Button'
import { InfoOfBuilding } from '../components/InfoOfBuilding'
import { Location } from '../components/Location'
import { Description } from '../components/Description'
import { HomeInfo } from '../components/HomeInfo'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { add } from 'nodemon/lib/rules'



export const OpenAdverst = () => {

  const id = parseInt(useParams().id)
  const desc = useSelector((state) => state.openCards.desc)
  const address = useSelector((state) => state.openCards.address)
  const image = useSelector((state) => state.openCards.image)
  const phone = useSelector((state) => state.openCards.phone)
  const title = useSelector((state) => state.openCards.title)
  const filteredDesc = desc.filter((elem) => elem.advertisementId === id)
  const filteredImage = image.filter((elem) => elem.id === id)
  const filteredAddress = address.filter((elem) => elem.id === id)
  const filteredPhone = phone.filter((elem) => elem.id === id)
  const filteredTitle = title.filter((elem) => elem.id === id)



  return (
    <div className='container-3'>
              <Breadcrumbs />
      {
        filteredTitle.map((item) =>   <TitleAndPrice item={item} />)
      }

              <AdverstButtons />

              <div className='sliders_and_buttons'>
                <div className='sliders_left'>
                  {
                    filteredImage.map((item) =>  <Slider item={item} />)
                  }
                </div>

                <div className='buttons_right'>
                  {
                    filteredPhone.map((item) => <Button text={item.phone} color='white' width='330px' padding='20px' fontSize='25px'/>)
                  }
                  <br/>
                  <br/>
                  <Button text='Написать сообщение' color='white' width='330px' padding='20px' fontSize='25px'/>
                </div>
              </div>
      {
        filteredAddress.map((item) => <Location item={item}/>)
      }
      {
        filteredDesc.map((item) => <Description item={item}/>)
      }
    </div>
  )
}
