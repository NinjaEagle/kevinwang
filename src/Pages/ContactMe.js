import React, { Component } from 'react';
import MyInfo from '../components/MyInfo';
import '../sass/contactme.scss';
class ContactMe extends Component {
    render() {
        return (
            <div id="contact-me">
                <h1 class="contact-title">Let's Get In Touch!</h1>
                <p class="contact-info">I can be reached out by phone (646)881-7330 or email kcwang06@gmail.com</p>
                <MyInfo />
            </div>
        );
    }
}

export default ContactMe;