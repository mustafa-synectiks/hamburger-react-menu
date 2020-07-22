import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { FiAlignRight } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import Navbar from '../components/Nav/Navbar';
import Burger from '../components/Nav/Burger.js';
import ColumnThree from '../components/Columns/ColumnThree.js';
import ColContent from '../components/ColumnCenter/ColContent';
import Dropdown from './dropdown.js';
import RightMenu from '../components/Right/RightMenu.js';

const IndexPage = (props) => {
	return (
		<Layout>
			<div className='main'>
				<div className='column'>
					<Navbar />
					<ColumnThree />
					<Dropdown />
				</div>
				<div className='column'>
					<ColContent />
					<Dropdown />
				</div>
				<div className='column'>
					<Dropdown />
					<RightMenu />
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;

const MenuWrapper = styled.section``;
