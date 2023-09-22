import React from "react";


const certification_1 = () => {
	return {
		date: "May 2023",
		title: "Certified AWS Cloud Practitioner",
		description:
			"Core cloud principles and various AWS services in compute, storage, databases, and networking, encompassing over 90 services in total.",
		keywords: [
			"AWS Cloud Practitioner",
			"Chris",
			"Chris N",
			"Chris Noble",
		],
		link: "https://www.credly.com/badges/e5e82112-0137-4b54-9579-11113a44e4a3/public_url",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const certification_2 = () => {
	return {
		date: "Nov 2022",
		title: "Certified Professional Scrum Master",
		description:
			"Scrum framework roles, events, artifacts, effective team leadership and facilitation.",
		link: "https://www.credly.com/badges/128e5527-64be-46a2-88c8-0b1984a1af82/public_url",
		style: ``,
		keywords: [
			"PSM",
			"Chris",
			"Chris N",
			"Chris Noble",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const certifications = [certification_1, certification_2];

export default certifications;