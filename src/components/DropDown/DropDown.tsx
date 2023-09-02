import React from 'react';
import styled from 'styled-components';

const DropDownWrapper = styled.div`
  width: 250px;
  background-color: #D8D8D8;
  border-radius: 8px;
  padding: 10px;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 10px 15px;
  border-bottom: 1px solid #c0bbbb;

  & li {
    padding: 15px;
    color: #0382F7;
    margin-top: 10px;

    &:hover {
      background-color: #011765;
      color: #EBEBEB;
      padding-left: 32px;
      width: 200px;
      border-radius: 12px;
      cursor: pointer;
    }
  }
`

export const DropDown: React.FC = () => {
  return (
    <DropDownWrapper>
    <List>
      <li>Мои объявления</li>
      <li>Заказы</li>
      <li>Мои отзывы</li>
      <li>Избранное</li>
    </List>
      <List>
        <li>Сообщения</li>
        <li>Уведомления</li>
      </List>
      <List>
        <li>Кошелек</li>
        <li>Платные услуги</li>
        <li>Спецпредложения</li>
      </List>
      <List>
        <li>Управление профилем</li>
        <li>Защита профиля</li>
        <li>Настройки</li>
        <li>GrozShop доставка</li>
      </List>
    </DropDownWrapper>
  )
}

