import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Education from "../components/education/certifications";
import INFO from "../data/user";
import myEducation from "../data/education";

import "./styles/education.css";

const EducationDisplay = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Education | ${INFO.main.title}`}</title>
			</Helmet>

			<div className="page-content">
				<NavBar active="education" />
				<div className="content-wrapper">
					<div className="education-logo-container">
						<div className="education-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="education-main-container">
						<div className="title education-title">
							{INFO.education.title}
						</div>

						<div className="subtitle education-subtitle">
							{INFO.education.description}
						</div>

						<div className="education-container">
							<div className="education-wrapper">
								{myEducation.map((education, index) => (
									<div
										className="education-education1"
										key={(index + 1).toString()}
									>
										<Education
											key={(index + 1).toString()}
											date={education().date}
											title={education().title}
											description={education().description}
											link={education().link}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default EducationDisplay;
