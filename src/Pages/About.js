import React, { Component } from 'react'
import '../sass/about.scss'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'
class About extends Component {
	render() {
		return (
			<div id='about'>
				<Controller>
					<Scene triggerHook='onEnter' duration='100%'>
						<Timeline wrapper={<div id='pinContainer' />}>
							<Tween from={{ x: '-50%' }} to={{ x: '0%' }}>
								<div class='innerinfo'>
									<div className='myFace'>
										<img
											src={require(`../images/kevin.jpg`)}
											alt='avatar'
											className='avatar-img'
										/>
									</div>
									<div className='myinfo'>
										<div className='backgroundinfo'>
											<p>
												Hi! I'm a Full Stack Web Developer. Since high school, my passion
												has been creating blogs with an interest in learning new technology
												and electronics. This lead me to pursue a degree electrical
												engineering in college. Now, I really love coding and am currently
												doing it full time.
											</p>
											<p>
												My skills are diverse: from full front-back end development and
												hardware design. I enjoy each aspect of my work as I create seamless
												web and mobile applications with design in mind. I'm also available
												for remote work!
											</p>
										</div>
										<div className='links'>
											<div>
												<a
													href='https://github.com/NinjaEagle'
													rel='noopener noreferrer'
													target='_blank'>
													<i className='fab fa-github-square fa-2x' aria-hidden='true'></i>
												</a>
											</div>
											<div>
												<a href='https://www.linkedin.com/in/kevin-wang-06/'>
													<i className='fab fa-linkedin fa-2x' aria-hidden='true'></i>
												</a>
											</div>
											<div>
												<a
													href='https://medium.com/@kwang06'
													rel='noopener noreferrer'
													target='_blank'>
													<i className='fab fa-medium fa-2x' aria-hidden='true'></i>
												</a>
											</div>
										</div>
										<div class='resume'>
											<a href='https://docs.google.com/document/d/1bKWJr-YGZ-OuUAfWtDJYiyBT9Rxj0Z4VX0N--u4w7x0/edit?usp=sharing'>
												<i className=''></i>
												Resume
											</a>
										</div>
									</div>
								</div>
							</Tween>
						</Timeline>
					</Scene>
				</Controller>
			</div>
		)
	}
}

export default About
