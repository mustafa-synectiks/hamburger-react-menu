import React, { useState } from 'react';
import styled from 'styled-components';
import ColCenter from './ColCenter';

const ColBurger = () => {
	const [ open, setOpen, buttonText, setButtonText ] = useState(false);
	// const changeText = (text) => setButtonText(text);
	return (
		<React.Fragment>
			<StyledBurger>
				<button open={open} onClick={() => setOpen(!open)}>
					Learn More
				</button>
				{/* Learn More */}
				{/* </button> */}
			</StyledBurger>
			<ColCenter open={open} />
		</React.Fragment>
	);
};

export default ColBurger;

const StyledBurger = styled.div`
	width: 2rem;
	height: 2rem;
	position: absolute;
	bottom: 12em;
	left: 30em;
	display: flex;
	justify-content: space-around;
	flex-flow: column nowrap;
	z-index: 20;

	button {
		background-color: #3b2e5a;
		padding: .5em 2em;
		font-size: 1rem;
		border: none;
		color: #fff;
		cursor: pointer;
		font-weight: bold;
		width: 10em;
		&:before {
			content: ${({ open }) => (open ? 'Close' : 'Open')};
		}
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
