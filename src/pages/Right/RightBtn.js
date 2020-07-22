import React, { useState } from 'react';
import styled from 'styled-components';
import RightMenu from './RightMenu';

const RightBtn = () => {
	const [ open, setOpen ] = useState(false);

	return (
		<StyledBurger open={open} onClick={() => setOpen(!open)}>
			{open ? 'Close' : 'Learn More'}
			<RightMenu open={open} />
		</StyledBurger>
	);
};

export default RightBtn;

const StyledBurger = styled.button`
	position: absolute;
	bottom: 12em;
	right: 20px;
	z-index: 20;
	background-color: #76ead7;
	padding: .5em 2em;
	font-size: 1rem;
	color: #333;
	border: none;
	font-weight: bold;
	width: 10em;
	cursor: pointer;
`;
