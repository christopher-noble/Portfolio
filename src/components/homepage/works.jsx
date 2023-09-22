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
							<div className="work-duration">April 2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="./blackpurl.png"
								alt="blackpurl"
								className="work-image"
							/>
							<div className="work-title">Blackpurl</div>
							<div className="work-subtitle">
								Front-End Software Developer
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
