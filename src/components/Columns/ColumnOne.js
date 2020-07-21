import React, { useState } from 'react';
import styled from 'styled-components';

const ColumnOne = ({ open }) => {
	const [ isOpen, setNav ] = useState(false);
	const [ isOpenn, setNavv ] = useState(false);
	const toggleNav = () => {
		setNav((isOpen) => !isOpen);
	};
	const toggleNav2 = () => {
		setNavv((isOpenn) => !isOpenn);
	};
	return (
		<Ul open={open}>
			{/* <li> */}
			<li onClick={toggleNav}>
				What We Do?
				{/* <ul isOpen={isOpen}> */}
				<ul className={isOpen ? `subMenu` : `subMenuHidden`}>
					<li>Why Us?</li>
					<li>Getting Started</li>
					<li>Technologies</li>
					<li>More Details</li>
				</ul>
			</li>
			<li onClick={toggleNav2}>
				Why Us?
				<ul className={isOpenn ? `subMenu` : `subMenuHidden`}>
					<li>What We Do?</li>
					<li>Getting Started</li>
					<li>Technologies</li>
					<li>More Details</li>
				</ul>
			</li>
			<li>Getting Started</li>
			<li>Technologies</li>
			<li>More Details</li>
		</Ul>
	);
};

export default ColumnOne;

const Ul = styled.ul`
	list-style: none;
	background-color: #0d2538;
	transform: ${({ open }) => (open ? 'translateX(10%)' : 'translateX(-100%)')};
	transition: transform 0.5s ease-in;
	flex-flow: column nowrap;
	position: fixed;
	top: 3.4em;
  left: -1.1%;
   width: 25vw;
	width: 25vw;
	padding-top: 3.5rem;
	padding-left: 1em;
	padding-left: 1em;
	height: 46vh;

	li {
		padding: 18px 10px;
		color: white;
		cursor: pointer;
		&:hover {
			color: #fd424d;
		}
	}

	.subMenu {
		background-color: pink;
		position:absolute;
		width: 55%;
		   top: 0px;
    height: 46vh;
    padding-top: 3.5em;
		list-style:none;
		transform: translateX(70%);
		/* transform: ${({ isOpen }) => (isOpen ? 'translateX(-10%)' : 'translateX(10%)')}; */
		transition: transform 0.5s ease-in;
	}

	.subMenuHidden {
		transform: translateX(0%);
		opacity:0;
		transition: transform 0.5s ease-in;
		/* opacity: ${({ open }) => (open ? 0 : 1)}; */
		height: 0em;
		overflow: hidden;
		}
	}
`;
