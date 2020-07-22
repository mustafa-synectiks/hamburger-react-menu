import React, { useState } from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { FiAlignRight } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import Navbar from '../components/Nav/Navbar';
// import Burger from '../components/Nav/Burger.js';
import ColumnThree from '../components/Columns/ColumnThree.js';
import ColContent from '../components/ColumnCenter/ColContent';
import Dropdown from './dropdown.js';

const IndexPage = (props) => {
	const [ isOpen, setNav ] = useState(true);
	const toggleNav = () => {
		setNav((isOpen) => !isOpen);
	};
	return (
		<Layout>
			<div className='main'>
				<div className='column'>
					<ColumnThree />
					<Dropdown />
				</div>
				<div className='column'>
					<ColContent />
					<Dropdown />
				</div>
				<div className='column'>
					<Dropdown />
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;

const MenuWrapper = styled.section``;
