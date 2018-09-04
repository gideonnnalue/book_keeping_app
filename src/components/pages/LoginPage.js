import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid } from 'semantic-ui-react';
import "../css/LoginPage.css";
import Validator from 'validator';

class LoginPage extends React.Component {
	constructor({ props }) {
		super();
		this.state = {
		data: {
			email: '',
			password: ''
		},
		loading: false,
		errors: {}
	};
	}

	onSubmit = () => {
		const errors = this.validate(this.state.data);
		this.setState({ errors })
		console.log(this.state.data)
	}

	validate = (data) => {
		const errors = {};
		if(!Validator.isEmail(data.email)) {
			errors.email = "Invalid Email";
		}
		if (!data.password) {
			errors.password = "Can't be blank";
		}

		return errors;
	}
	
	onChange =  (event) => {
		this.setState({data: {
			...this.state.data, [event.target.name]: event.target.value
		}})
	}

	render () {
		const { data, errors } = this.state;
		// const { onSubmit } = this.props;
		const buttonStyle = {
		  borderRadius: '20px',
		  backgroundColor: '#FF69B4',
		  boxShadow: '0px 0px 2px #164269'
		};

		const formStyle = {
			borderRadius: '20px',
			backgroundColor: '#285f91',
			boxShadow: '0px 0px 2px #164269'
		}

		const fullFormStyle = {
			marginTop: '200px'
		}
		return (
			<div className="container" style={fullFormStyle}>
			<h1 style={{textTransform: 'uppercase', color: 'white', fontWeight: 'bold'}}>Login</h1>
			<Link to="/HomePage">Login</Link>
			<Grid centered columns={2} style={{width: '100%'}}>
				<Grid.Column>
					<Form onSubmit={this.onSubmit}>
					    <Form.Field>
					      <div className="ui left icon input">
						      <input
						       style={formStyle}
						       type="email" 
						       id="email" 
						       name="email" 
						       icon='users' 
						       iconPosition='left'
						       placeholder='example@email.com'
						       value={data.email}
						       onChange={this.onChange} />
						       <i className="envelope icon"></i>
					       </div>
    					    {errors.email}

					    </Form.Field>
					    <Form.Field>
					      <div className="ui left icon input">
					      <input
					       style={formStyle}
					       type="password" 
					       id="password" 
					       name="password" 
					       placeholder='Password'
					       value={data.password}
					       onChange={this.onChange} />
					       <i className="lock icon"></i>
					       </div>
					       {errors.password}
					    </Form.Field>
					    <Button primary type='submit' className="fluid ui pink button" style={buttonStyle}>Log In</Button>
				  	</Form>
			  	</Grid.Column>
		  	</Grid>
  		</div>
				
		);
	}
	
};
export default LoginPage;