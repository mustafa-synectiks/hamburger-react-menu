import React, { useState } from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { FiAlignRight } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import Navbar from '../components/Nav/Navbar';
// import Burger from '../components/Nav/Burger.js';
import ColumnThree from '../components/Columns/ColumnThree.js';
import ColContent from '../components/ColumnCenter/ColContent';

const IndexPage = (props) => {
	const [ isOpen, setNav ] = useState(true);
	const toggleNav = () => {
		setNav((isOpen) => !isOpen);
	};
	return (
		<Layout>
			{/* <MenuWrapper>
				<div className='main'>
					<div className='column'>
						<div className='navigation'>
							<div className='togglebox'>
								<FiAlignRight className='openmenu' onClick={toggleNav}>
									Menu
								</FiAlignRight>
								{/* <FiX className='closebutton'>close</FiX> */}
			{/* </div>
							<div className={isOpen ? 'closemenu' : ' menuitems'}>
								<a>What We Do?</a>
								<a>Why Us?</a>
								<a>Getting Started</a>
								<a>Technologies</a>
								<a>More Details.</a>
							</div>
						</div>
					</div>
					<div className='column'>
						<h1>Hi</h1>
					</div>
					<div className='column'>
						<h1>Hi</h1>
					</div>
				</div> */}
			{/* // </MenuWrapper> */}
			<div className='main'>
				<div className='column'>
					{/* <Burger /> */}
					<Navbar />
					<ColumnThree />
					{/* <button>Learn More</button> */}
				</div>
				<div className='column'>
					<ColContent />
				</div>
				<div className='column' />
			</div>
		</Layout>
	);
};

export default IndexPage;

const MenuWrapper = styled.section``;
