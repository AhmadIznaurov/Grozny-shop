import React from 'react'

export const HomeInfo = (props) => {
  return (
    <div style={{ marginTop: '100px' }}>
      <h3>О доме</h3>
      <div className="container_info">
        <div className="left_info">
          <p>Тип дома:<span> Монолитный</span></p>
        </div>
        <div className="right_info">
          <p>Этажей в доме: <span>  22</span></p>
        </div>
      </div>
    </div>
  )
}
