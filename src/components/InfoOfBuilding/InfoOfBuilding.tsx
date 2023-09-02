import React from 'react';


export const InfoOfBuilding: React.FC = () => {
  return (
    <div style={{marginTop: '80px'}}>
      <h2>Информация по квартире</h2>
      <div className='container_info'>
        <div className='left_info'>
          <p>Количество комнат:<span> 2</span></p>
          <p>Общая площадь:<span> 67.8 м²</span></p>
          <p>Площадь кухни:<span>  15.5 м²</span></p>
          <p>Жилая площадь: <span> 27 м²</span></p>
          <p>Этаж:<span> 7 из 22</span></p>
        </div>
        <div className='right_info'>
          <p>Балкон или лоджия:<span> балкон, лоджия</span></p>
          <p>Тип комнат:<span> Изолированные</span></p>
          <p>Ремонт:<span> Требует ремонта</span></p>
          <p>Способ продажи:<span> Свободная</span></p>
        </div>
      </div>
      </div>

  )
}

