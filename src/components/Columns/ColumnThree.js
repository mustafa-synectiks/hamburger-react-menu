import React, { useRef } from 'react';
import styled from 'styled-components';

import ColumnTwo from './ColumnTwo';

const ColumnThree = () => {
	const node = useRef();
	return (
		<Nav>
			<ColumnTwo ref={node} />
		</Nav>
	);
};

export default ColumnThree;

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
