const education_1 = () => {
	return {
		date: "2019-2021",
		title: "Computer Systems",
		description:
			"2 year certificate diploma, British Columbia Institute of Technology",
		style: ``,
	};
}

const education_2 = () => {
	return {
		date: "2019-2020",
		title: "Applied Software Development",
		description:
			"Associate Certificate, British Columbia Institute of Technology",
	};
}

const education_3 = () => {
	return {
		date: "2019-2020",
		title: "Applied Computer Information Systems",
		description:
			"Associate Certificate, British Columbia Institute of Technology",
	};
}

const education_4 = () => {
	return {
		date: "2021",
		title: "Agile Development (With Distinction)",
		description:
			"Associate Certificate, British Columbia Institute of Technology",
	};
}

const education_5 = () => {
	return {
		date: "May 2023",
		title: "Certified AWS Cloud Practitioner",
		description:
			"Certificate, AWS",
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

const education_6 = () => {
	return {
		date: "Nov 2022",
		title: "Certified Professional Scrum Master",
		description:
			"Certificate, Scrum.org",
		link: "https://www.credly.com/badges/128e5527-64be-46a2-88c8-0b1984a1af82/public_url",
		style: ``,
	};
}

const myEducation = [education_1, education_2, education_3, education_4, education_5, education_6];

export default myEducation;
