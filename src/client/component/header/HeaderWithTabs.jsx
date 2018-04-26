import React from 'react'

import lifcareLogo from '../../image/logo_white.png'

import {
  Layout,
  Menu
} from 'antd';
const {
  Header,
  Content,
  Sider
} = Layout;

class HeaderWithTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      headerTabs: [
        'Customer',
        'Patient',
        'Lead'
      ],
      menuItem: [
        'Create New Patient',
        'Summary'
      ],
      content: 'Content'
    }
  }

  changeMenuItem(value, fieldName) {
    if(value.item.props.children === 'Customer') {
      this.setState({
        menuItem: [
          'Create New Customer',
          'Customer Summary'
        ]
      })
    } else if (value.item.props.children === 'Patient') {
      this.setState({
        menuItem: [
          'Create New Patient',
          'Patient Summary'
        ]
      })
    } else {
      this.setState({
        menuItem: [
          'Lead'
        ]
      })
    }
  }

  render () {
    return (
      <Layout>
        <Header style={{backgroundColor: 'white'}}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
               <img
                 src={lifcareLogo}
                 alt='lifcare'
               />
            </div>
            <div style={{marginLeft: '10px'}}>
              <Menu
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{
                  lineHeight: '64px',
                  backgroundColor: 'white',
                  color: 'black',
                  fontSize: '14px'
                }}
                onClick={this.changeMenuItem.bind(this)}
              >
                {this.state.headerTabs.map((item,index) => {
                  return (
                    <Menu.Item
                      key={index+1}
                    >
                      {item}
                    </Menu.Item>
                  )
                })}
              </Menu>
            </div>
          </div>
        </Header>
        <Content>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              style={{ height: '100%' }}
            >
              {this.state.menuItem.map((item,index) => {
                return (
                  <Menu.Item key={index+1}>{item}</Menu.Item>
                )
              })}
            </Menu>
          </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              {this.state.content}
            </Content>
          </Layout>
        </Content>
      </Layout>
    )
  }
}

export default HeaderWithTabs
