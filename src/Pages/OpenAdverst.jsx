import React from 'react'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { TitleAndPrice } from '../components/TitleAndPrice'
import { AdverstButtons } from '../components/AdverstButtons'
import { Slider } from '../components/Slider'
import { Button } from '../components/Button/Button'
import { Location } from '../components/Location'
import { Description } from '../components/Description'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'




export const OpenAdverst = () => {

  const id = parseInt(useParams().id)
  const desc = useSelector((state) => state.openCards.desc)
  const address = useSelector((state) => state.openCards.address)
  const image = useSelector((state) => state.openCards.image)
  const phone = useSelector((state) => state.openCards.phone)
  const title = useSelector((state) => state.openCards.title)




  return (
    <div className='container-3'>
              <Breadcrumbs />
      {
        title.filter((elem) => elem.id === id).map((item) =>   <TitleAndPrice item={item} />)
      }

              <AdverstButtons />

              <div className='sliders_and_buttons'>
                <div className='sliders_left'>
                  {
                    image.filter((elem) => elem.id === id).map((item) =>  <Slider item={item} />)
                  }
                </div>

                <div className='buttons_right'>
                  {
                    phone.filter((elem) => elem.id === id).map((item) =>
                      <Button text={item.phone} color='white' width='330px' padding='20px' fontSize='25px'/>)
                  }
                  <br/>
                  <br/>
                  <Button text='Написать сообщение' color='white' width='330px' padding='20px' fontSize='25px'/>
                </div>
              </div>
      {
        address.filter((elem) => elem.id === id).map((item) => <Location item={item}/>)
      }
      {
        desc.filter((elem) => elem.advertisementId === id).map((item) => <Description item={item}/>)
      }

      {/*<HomeInfo />*/}
      {/*<InfoOfBuilding />*/}
    </div>
  )
}
