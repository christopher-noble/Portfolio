import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/work.css";

const Work = () => {
	return (
		<div className="work">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="work-body">
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
								<strong>Stack: </strong> TypeScript, Node.js, React, MongoDB, Meteor.js
								<ul>
									<li>
										Team of 3
									</li>
									<li>
										Running startup with team members, acquired by Treez, called Mister Kraken.
									</li>
									<li>
										Built {'>20'} performance-optimized features including responsibility of all phases of the System Development Life Cycle (SDLC).
									</li>
									<li>
										Built reporting tool and architected cloud services to automate compliance reporting to Washington
										government, eliminating 8+ labor hours per week of manual work.
										<ul>
											<li>
												TS, Cypress, Docker, 7 services in AWS
											</li>
											<li>
												AWS Diagram <a style={{ 'text-decoration': 'none' }} href="https://drive.google.com/file/d/1NjiJNixjwJjUUK5X9g_aFUbmx1y0IV1Q/view?usp=sharing">here</a>
											</li>
										</ul>
									</li>
									<li>
										Regularly executed advanced NoSQL queries for customer account adjustments and generating company reports.
									</li>
									<li>
										Led bi-weekly Sprint Review meetings to engineering org.
									</li>
									<li>
										Provided immediate assistance for resolving critical system bugs, ensuring minimal disruption to operations.
									</li>
									<li>
										Performed routine production deployments to deliver software updates and enhancements on a regular basis.
									</li>
								</ul>
							</div>
							<div className="work-duration">April 2022 - Dec 2023</div>
						</div>

						<div className="work">
							<img
								src="./blackpurl.png"
								alt="blackpurl"
								className="work-image"
							/>
							<div className="work-title">Blackpurl Inc.</div>
							<div className="work-subtitle">
								Front End Software Developer
							</div>
							<div className="work-description">
								<strong>Stack: </strong> TypeScript, Node.js, DynamoDB, React, Fluent UI
								<ul>
									<li>
										Team of 3
									</li>
									<li>
										Solely built front-end for <a style={{ 'text-decoration': 'none' }} href="https://support.blackpurl.com/support/home">Blackpurl Support Center</a>
									</li>
									<li>
										Solely built front-end for customer activation tool.
										<ul>
											<li>
												Interactive data insertion, profile creation, accounting setup.
											</li>
										</ul>
									</li>
									<li>
										Assisted in back-end logic to normalize and validate customer data using node-nlp, eliminating 80% of manual data cleaning.
									</li>
									<li>
										Owned back-end tasks for authentication and data management with AWS Cognito, DynamoDB.
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

export default Work;
