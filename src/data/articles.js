import React from "react";

const education_1 = () => {
	return {
		date: "2019-2021",
		title: "Computer Systems",
		description:
			"British Columbia Institute of Technology, 2 year diploma",
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

const education_2 = () => {
	return {
		date: "2019-2020",
		title: "Applied Software Development",
		description:
			"British Columbia Institute of Technology, Associate Certificate",
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

const education_3 = () => {
	return {
		date: "May 2023",
		title: "Certified AWS Cloud Practitioner",
		description:
			"AWS",
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

const education_4 = () => {
	return {
		date: "Nov 2022",
		title: "Certified Professional Scrum Master",
		description:
			"Scrum.org",
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

const education_5 = () => {
	return {
		date: "2021",
		title: "Agile Development (With Distinction)",
		description:
			"British Columbia Institute of Technology, Associate Certificate",
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

const myEducation = [education_1, education_2, education_3, education_4, education_5];

export default myEducation;
