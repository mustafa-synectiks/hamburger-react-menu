import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import LeftMenu from './LeftMenu';

const LeftBtn = () => {
	const [ open, setOpen ] = useState(false);

	const OpenMenu = () => {
		setOpen(true);
	};
	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<StyledBurger>
				<button open={open} onClick={() => setOpen(!open)}>
					{open ? 'Close' : 'Learn More'}
				</button>
			</StyledBurger>
			<LeftMenu open={open} />
		</React.Fragment>
	);
};

export default LeftBtn;

const StyledBurger = styled.div`
	display: flex;
	justify-content: center;
	align-self: center;
	margin: 0 auto;
	z-index: 1;
	/* position: absolute;
	bottom: 12em;
	left: 20px; */
	/* flex-flow: column nowrap; */

	button {
		background-color: #fe91ca;
		padding: .5em 2em;
		font-size: 1rem;
		color: #333;
		border: none;
		font-weight: bold;
		cursor: pointer;
		width: 10em;
	}

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
