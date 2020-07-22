import React, { useRef } from 'react';
import styled from 'styled-components';

import RightBtn from './RightBtn';

const RightBlock = () => {
	return (
		<Nav>
			<RightBtn />
		</Nav>
	);
};

export default RightBlock;

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
