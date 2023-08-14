import React from 'react'

export const Location = (props) => {
  return (
    <div style={{marginTop: '100px'}}>
  <h2>Расположение</h2>
      <p>Чеченская Республика, Грозный, ул. Шейха Али Митаева, 9/1</p>
        <iframe width="50%" height="500"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Grozny%20Russia+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a href="https://www.maps.ie/population/">Population Estimator map</a></iframe>
    </div>
  )
}

