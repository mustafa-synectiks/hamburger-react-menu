import React from 'react';
import styled from 'styled-components';

const ColCenter = ({ open }) => {
	return (
		<Ul open={open}>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit explicabo, laborum, consequatur ipsam ex
				eum in soluta veritatis accusamus placeat tempore, vero deserunt. Necessitatibus repellendus eum
				consequuntur illum sequi, facere veritatis expedita deserunt quia, eius voluptates fuga vero quod
				doloremque, quae ullam fugit neque totam aliquid quisquam voluptas? Omnis recusandae quae quibusdam
				tenetur magni error. Sunt, culpa natus impedit vitae eos ratione sint assumenda fugiat cumque quia
				voluptas repellendus quisquam tenetur quae quasi dicta qui quis dolor officiis consectetur eveniet!
				Quasi ipsam quae architecto aspernatur, reiciendis rerum quam recusandae saepe incidunt nulla odio? Iure
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit explicabo, laborum, consequatur ipsam ex
				eum in soluta veritatis accusamus placeat tempore, vero deserunt. Necessitatibus repellendus eum
				consequuntur illum sequi, facere veritatis expedita deserunt quia, eius voluptates fuga vero quod
				doloremque, quae ullam fugit neque totam aliquid quisquam voluptas? Omnis recusandae quae quibusdam
				tenetur magni error. Sunt, culpa natus impedit vitae eos ratione sint assumenda fugiat cumque quia
				voluptas repellendus quisquam tenetur quae quasi dicta qui quis dolor officiis consectetur eveniet!
				Quasi ipsam quae architecto aspernatur, reiciendis rerum quam recusandae saepe incidunt nulla odio? Iure
				center Column
			</p>
		</Ul>
	);
};

export default ColCenter;

const Ul = styled.ul`
	list-style: none;
	background-color: #0d2538;
	transform: ${({ open }) => (open ? 'translateX(10%)' : 'translateX(-100%)')};
	transition: transform 0.5s ease-in;
	flex-flow: column nowrap;
	position: fixed;
	top: 0;
	left: 0;
	width: 80vw;
	padding-top: 3.5rem;
	padding-left: 1em;
	padding-left: 1em;
	height: 52vh;

	li {
		padding: 18px 10px;
		color: white;
		cursor: pointer;
		&:hover {
			color: #fd424d;
		}
	}
`;
