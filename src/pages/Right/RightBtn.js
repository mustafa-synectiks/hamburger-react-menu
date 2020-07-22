import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import RightMenu from './RightMenu';

const RightBtn = () => {
	// const node = useRef();
	const [ open, setOpen ] = useState(false);
	// const changeText = (text) => setButtonText(text);
	// const handleClick = (e) => {
	// 	if (node.current.contains(e.target)) {
	// 		// inside click
	// 		return;
	// 	}
	// 	// outside click
	// 	setOpen(false);
	// };
	// useEffect(() => {
	// 	document.addEventListener('mousedown', handleClick);

	// 	return () => {
	// 		document.removeEventListener('mousedown', handleClick);
	// 	};
	// }, []);
	return (
		<React.Fragment>
			<StyledBurger>
				<button open={open} onClick={() => setOpen(!open)}>
					{open ? 'Close' : 'Learn More'}
				</button>
			</StyledBurger>
			<RightMenu open={open} />
		</React.Fragment>
	);
};

export default RightBtn;

const StyledBurger = styled.div`
	width: 2rem;
	height: 2rem;
	position: absolute;
	bottom: 12em;
	right: 10em;
	display: flex;
	justify-content: space-around;
	flex-flow: column nowrap;
	z-index: 20;

	button {
		background-color: #3b2e5a;
		padding: .5em 2em;
		font-size: 1rem;
		color: #f1f1f1;
		border: none;
		font-weight: bold;
		cursor: pointer;
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
