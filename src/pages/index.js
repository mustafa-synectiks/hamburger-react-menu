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
import RightBlock from './Right/RightBlock.js';
import LeftBlock from './Left/LeftBlock.js';

const IndexPage = (props) => {
	return (
		<Layout>
			<div className='main'>
				<div className='column'>
					<LeftBlock />
				</div>
				<div className='column' />
				<div className='column'>
					<RightBlock />
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;

const MenuWrapper = styled.section`
	* {
		margin: 0px;
		padding: 0px;
	}
`;
