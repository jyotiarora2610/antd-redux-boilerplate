import React from 'react'

import lifcareLogo from '../../image/logo.png'

import { Layout, Menu, Dropdown, Icon } from 'antd';
const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      Sign Out
    </Menu.Item>
  </Menu>
);


class HeaderLayout extends React.Component {
  render () {
    return (
      <Layout>
         <Header style={{backgroundColor: '#8bc34a'}}>
            <div style={{display: 'flex', flexDirection: 'row', flex: 10}}>
              <div style={{flex: 10}}>
                <img
                  src={lifcareLogo}
                  alt='lifcare'
                />
              </div>
              <div>
                <Dropdown overlay={menu}>
                  <Icon type="down" style={{color: 'white'}}/>
                </Dropdown>
              </div>
            </div>
         </Header>
       </Layout>
    )
  }
}

export default HeaderLayout
