import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/education.css";

const Certifications = (props) => {
	const { date, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="education">
				<div className="education-left-side">
					<div className="education-date">{date}</div>
				</div>
				<Link to={link}>
					<div className="education-right-side">
						<div className="education-title">{title}</div>
						<div className="education-description">{description}</div>
						{
							link ?
								<div className="education-link">
									See Credential
									<FontAwesomeIcon
										style={{ fontSize: "10px" }}
										icon={faChevronRight}
									/>
								</div>
								: ''
						}

					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Certifications;
