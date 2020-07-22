import React, { useState } from 'react';
import styled from 'styled-components';

const RightMenu = () => {
	const [ open, setOpen ] = useState(false);
	return (
		<Ul open={open}>
			<li>Home</li>
			<li>About</li>
			<li>Blog</li>
		</Ul>
	);
};

export default RightMenu;

const Ul = styled.ul`
	list-style: none;
	background-color: #0d2538;
	transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-100%)')};
	transition: transform 0.5s ease-in;
	flex-flow: column nowrap;
	position: fixed;
	top: 0;
	left: 0;
	width: 32.3vw;
	padding-top: 3.5rem;
	height: 61vh;

	li {
		padding: 18px 10px;
		color: white;
		cursor: pointer;
		&:hover {
			color: #fd424d;
		}
	}
`;
