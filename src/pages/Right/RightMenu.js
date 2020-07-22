import React, { useState } from 'react';
import styled from 'styled-components';

const RightMenu = ({ open }) => {
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
			<li onClick={toggleNav}>
				What We Do?
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

export default RightMenu;

const Ul = styled.ul`
	list-style: none;
	background-color: #0d2538;
	transform: ${({ open }) => (open ? 'translateY(0%)' : 'translateY(-101%)')};
	transition: transform 0.5s ease-in;
	flex-flow: column nowrap;
	position: fixed;
	top: 0em;
  left: 0%;
  width: 100vw;
	padding-top: 3.5rem;
	padding-left: 1em;
	padding-left: 1em;
	height: 50vh;

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
		width: 85vw;
		top: 0px;
    height: 50vh;
    padding-top: 3.5em;
		list-style:none;
		transform: translateX(15%);
		/* transform: ${({ isOpen }) => (isOpen ? 'translateY(-10%)' : 'translateY(10%)')}; */
		/* transform: ${({ open }) => (open ? 'translateY(-10%)' : 'translateY(10%)')}; */
		transition: transform 0.5s ease-in;
	}

	.subMenuHidden {
		background-color: pink;
		position:absolute;
		width: 85vw;
		top: 0px;
    height: 50vh;
    padding-top: 3.5em;
		list-style:none;
		transform: translateX(-105%);
		/* transform: ${({ isOpen }) => (isOpen ? 'translateY(-10%)' : 'translateY(10%)')}; */
		/* transform: ${({ open }) => (open ? 'translateY(-10%)' : 'translateY(10%)')}; */
		transition: transform 0.5s ease-in;
	}
`;
