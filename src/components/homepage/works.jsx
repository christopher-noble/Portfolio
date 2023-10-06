import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./treez.png"
								alt="treez"
								className="work-image"
							/>
							<div className="work-title">Treez Inc.</div>
							<div className="work-subtitle">
								Full Stack Software Engineer
							</div>
							<div className="work-description">
								<strong>Stack: </strong> Meteor.js, Node.js, MongoDB
								<ul>
									<li>
										Team of 3
									</li>
									<li>
										Running startup with team members, acquired by Treez.
									</li>
									<li>
										Built {'>20'} core features including design and product planning.
									</li>
									<li>
										Built complicance reporting tool for automated periodic and on-demand reporting to Washington government.
										<ul>
											<li>
												TS, Cypress, Docker, 7 services in AWS
											</li>
											<li>
												AWS Diagram <a href="https://drive.google.com/file/d/1NjiJNixjwJjUUK5X9g_aFUbmx1y0IV1Q/view?usp=sharing">here</a>
											</li>
										</ul>
									</li>
									<li>
										Regularly created custom reports using advanced DB queries to meet customer and organizational needs.
									</li>
									<li>
										Led bi-weekly Sprint Review meetings to engineering org.
									</li>
									<li>
										Regular prod deployments.
									</li>
								</ul>
							</div>
							<div className="work-duration">April 2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="./blackpurl.png"
								alt="blackpurl"
								className="work-image"
							/>
							<div className="work-title">Blackpurl Inc.</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-description">
								<strong>Stack: </strong> TypeScript, React, Node.js, DynamoDB
								<ul>
									<li>
										Team of 3
									</li>
									<li>
										Built UI for six-step customer onboarding tool.
										<ul>
											<li>
												Integrated Node natural language processing library for customer data cleanup and validation.
											</li>
											<li>
												Integrated AWS Cognito, DynamoDB for authentication, user data.
											</li>
										</ul>
									</li>
									<li>
										Built complete UI for Blackpurl support center. Visit <a href="https://support.blackpurl.com/support/home">here</a>
									</li>
								</ul>
							</div>
							<div className="work-duration">Sep 2021 - March 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
