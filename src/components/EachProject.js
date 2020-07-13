import React, { Component } from 'react'
import '../sass/projects.scss'
export default class EachProject extends Component {
	render() {
		const {
			name,
			info,
			technologies,
			githubFrontEnd,
			video,
			live,
			img,
		} = this.props.project

		return (
			<div class='each-project'>
				<h2 class='subtitle'>
					<strong>{name}</strong>
				</h2>
				<p className='projectinfo'>{info}</p>
				<p className='tech'>{technologies}</p>
				<br></br>
				<img class='projectgif' src={img} alt='animated' />
				<br></br>

				<div className='project-links'>
					<div>
						<a href={githubFrontEnd} rel='noopener noreferrer' target='_blank'>
							<i
								className='contactlinks fab fa-github-square fa-2x'
								aria-hidden='true'></i>
						</a>
					</div>
					{live ? (
						<div>
							<a href={live} rel='noopener noreferrer' target='_blank'>
								Live
							</a>
						</div>
					) : (
						<></>
					)}
					{video ? (
						<div>
							<a href={video} rel='noopener noreferrer' target='_blank'>
								Demo{' '}
							</a>
						</div>
					) : (
						<></>
					)}
				</div>
				<hr class='section-break-2' />
			</div>
		)
	}
}
