import React from "react";


const certification_1 = () => {
	return {
		date: "May 2023",
		title: "Certified AWS Cloud Practitioner",
		description:
			"Amazon Web Services",
		keywords: [
			"AWS Cloud Practitioner",
			"Chris",
			"Chris N",
			"Chris Noble",
		],
		link: "https://www.credly.com/badges/e5e82112-0137-4b54-9579-11113a44e4a3/public_url",
		style: `
				.education-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
	};
}

const certification_2 = () => {
	return {
		date: "Nov 2022",
		title: "Certified Professional Scrum Master",
		description:
			"Scrum.org",
		link: "https://www.credly.com/badges/128e5527-64be-46a2-88c8-0b1984a1af82/public_url",
		body: (
			<React.Fragment>
			</React.Fragment>
		),
	};
}

const certifications = [certification_1, certification_2];

export default certifications;
