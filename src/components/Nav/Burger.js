import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const Burger = () => {
	const [ open, setOpen ] = useState(false);

	return (
		<React.Fragment>
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<RightNav open={open} />
		</React.Fragment>
	);
};

export default Burger;

const StyledBurger = styled.div`
	width: 2rem;
	height: 2rem;
	position: fixed;
	top: 15px;
	left: 20px;
	display: flex;
	justify-content: space-around;
	flex-flow: column nowrap;
	z-index: 20;

	div {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ open }) => (open ? '#ccc' : '#333')};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;
		cursor: pointer;
		&:hover {
			color: #fd424d;
		}

		&:nth-child(1) {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}
		&:nth-child(2) {
			transform: ${({ open }) => (open ? 'translateX(-50%)' : 'translateX(0%)')};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;
