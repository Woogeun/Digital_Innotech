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
					url: "/innotech/CTO"
				}, 
				{
					title: "회사 연혁",
					url: "/innotech/history"
				}, 
				{
					title: "회사 소개 자료",
					url: "/innotech/introduction"
				}, 
				{
					title: "소식",
					url: "/innotech/news"
				}, 
			]
		},
		{
			title: "PC 솔루션",
			url: "/pcSolution",
			subSections: [
				{
					title: "KAICATCH",
					url: "/innotech/kaiForensics"
				}
			]
		},
		{
			title: "앱 솔루션",
			url: "/appSolution",
			subSections: [
				{
					title: "출시 예정",
					url: "/innotech/temp"
				}
			]
		},
		{
			title: "영상/동영상 포렌식 기술이란?",
			url: "/forensics",
			subSections: [
				{
					title: "영상/동영상 포렌식 기술이란?",
					url: "/innotech/technique"
				}, 
				{
					title: "발표 논문",
					url: "/innotech/papers"
				}
			]
		},
		{
			title: "Contact",
			url: "/innotech/contact",
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
