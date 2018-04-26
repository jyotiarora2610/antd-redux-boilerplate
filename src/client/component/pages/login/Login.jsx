import React from 'react'

import lifcareLogo from '../../../image/logo_white.png'

import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class Login extends React.Component {

  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render () {

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div
        style={{
          width: '300px',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
          marginRight: '-50%',
          position: 'absolute',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.4)',
          borderRadius: '12px',
          padding: '2em 2em 0em'
        }}
      >
        <div>
          <img
            src={lifcareLogo}
            alt='lifcare'
            style={{
              transform: 'translate(50%, -50%)',
              left: '50%',
              top: '50%',
              marginRight: '-50%',
              marginTop: '20px'
            }}
          />
        </div>
        <div>
          <p
            style={{
              fontSize: '0.9em',
              fontWeight: 600,
              color: 'black',
              textAlign: 'center'
            }}
          >
            Welcome back! Please login
          </p>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            validateStatus={userNameError ? 'error' : ''}
            help={userNameError || ''}
          >
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError || ''}
          >
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              disabled={this.hasErrors.bind(this,getFieldsError())}
              style={{
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                marginRight: '-50%',
                marginTop: '20px'
              }}
            >
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const WrappedHorizontalLoginForm = Form.create()(Login);

export default WrappedHorizontalLoginForm
