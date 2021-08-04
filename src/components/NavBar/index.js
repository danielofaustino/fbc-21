import React,{useState} from 'react'
import { Menu } from 'antd';
import { HomeOutlined,StarFilled,MailOutlined,InstagramOutlined,ContactsOutlined} from '@ant-design/icons';

const NavBar = () => {
  const [current,setCurrent] = 'email';

const handleClick = (e) => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };

  return (
    <>
      <Menu onClick={()=>handleClick} selectedKeys={current} mode="horizontal" theme={'dark'} >
        <Menu.Item key="Home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="Procedimentos" icon={<StarFilled />}>
          Procedimentos
        </Menu.Item>
        <Menu.Item key="Quem Somos" icon={<InstagramOutlined />}>
          Quem Somos
        </Menu.Item>
        <Menu.Item key="Cursos" icon={<MailOutlined />}>
          Cursos
        </Menu.Item>
        <Menu.Item key="Contato" icon={<ContactsOutlined />}>
          Contato
        </Menu.Item>
        
              
        </Menu>
    </>
  )
}

export default NavBar
