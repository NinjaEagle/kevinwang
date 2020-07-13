import React, { Component } from 'react'
import MyInfo from '../components/MyInfo'
import '../sass/contactme.scss'
class ContactMe extends Component {
	render() {
		return (
			<div id='contact-me'>
				<h1 className='contact-title has-text-centered-mobile is-size-2'>
					Contact Me
				</h1>
				<br></br>
				<br></br>
				<MyInfo />
				<br></br>
				<img
					className='contactlogo'
					src={require(`../images/logo.png`)}
					alt='mylogo'
				/>
			</div>
		)
	}
}

export default ContactMe
