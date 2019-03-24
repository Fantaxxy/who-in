import React from 'react';
import { Button, Form, FormField, Heading } from 'grommet';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    const { postLogin, history } = this.props;
    await postLogin(this.state);
    history.push('/');
    e.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="form-container">
        <Heading className="form-header" margin="none">
          Login
        </Heading>
        <Form onSubmit={this.handleSubmit}>
          <FormField
            name="email"
            label="Email"
            onChange={this.handleChange}
            value={email}
          />
          <FormField
            name="password"
            label="Password"
            onChange={this.handleChange}
            value={password}
          />
          <Button type="submit" label="Login" primary />
        </Form>
      </div>
    );
  }
}
export default Login;
