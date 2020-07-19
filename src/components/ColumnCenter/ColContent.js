import React from 'react';
// import a from 'gatsby';
import styled from 'styled-components';

import ColBurger from './ColBurger';

const ColContent = () => {
	return (
		<Nav>
			{/* <div className='logo'>Synectiks</div> */}
			<ColBurger />
		</Nav>
	);
};

export default ColContent;

const Nav = styled.nav`
	width: 100%;
	height: 10vh;
	border-bottom: 1px solid #f1f1f1;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-weight: bold;
	padding: 0 10px;

	.logo {
		padding: 15px 0;
	}
`;
