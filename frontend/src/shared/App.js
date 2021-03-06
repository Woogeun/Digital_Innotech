import React, { useState } 	from 'react';
import PropTypes 			from 'prop-types';

import Header 	from 'components/Header';
import Body 	from 'components/Body';
import Footer 	from 'components/Footer';


export default function App(props) {
	const default_sections = [
		{
			title: "회사 소개",
			url: "/about",
			subSections: [
				{
					title: "CTO 메세지",
					url: "/CTO"
				}, 
				{
					title: "회사 연혁",
					url: "/history"
				}, 
				{
					title: "회사 소개 자료",
					url: "/introduction"
				}, 
				{
					title: "소식",
					url: "/news"
				}, 
			]
		},
		{
			title: "PC 솔루션",
			url: "/pcSolution",
			subSections: [
				{
					title: "KAICATCH",
					url: "/kaiForensics"
				}
			]
		},
		{
			title: "앱 솔루션",
			url: "/appSolution",
			subSections: [
				{
					title: "출시 예정",
					url: "/temp"
				}
			]
		},
		{
			title: "영상 포렌식 기술이란?",
			url: "/forensics",
			subSections: [
				{
					title: "영상 포렌식 기술이란?",
					url: "/technique"
				}, 
				{
					title: "발표 논문",
					url: "/papers"
				}
			]
		},
		{
			title: "Contact",
			url: "/contact",
			subSections: [
				
			]
		}
	]
	const [sections, setSections] = useState(default_sections);

	return (
		<React.Fragment>
			<Header sections={ sections } />
			<Body />
			<Footer />
		</React.Fragment>
	);
}

App.defaultProps = {

};

App.propTypes = {

};
