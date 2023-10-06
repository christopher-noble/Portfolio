import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/education.css";

const Education = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="homepage-education">
				<div className="homepage-education-content">
					<div className="homepage-education-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-education-title">{title}</div>
					<div className="homepage-education-description">
						{description}
					</div>
					<div className="homepage-education-link">
						<Link to={link}>
							See Credential
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Education;
