import React, { Component } from 'react';
import "../sass/welcome.scss";
import Slide from 'react-reveal/Slide';

class Welcome extends Component {
    render() {
        return (
            <div id="welcome" className="welcome-section has-text-centered-mobile">
                <div className="title is-2 animated">
                    <Slide left >
                        Kevin Wang
                    </Slide>
                </div>
                <div class="subtitle is-3 animated">
                    <Slide left delay={200}>
                        Full Stack Developer
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Welcome