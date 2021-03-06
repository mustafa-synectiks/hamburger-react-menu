import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import Dropdown from './dropdown.js';
import RightBlock from './Right/RightBlock.js';
import LeftBlock from './Left/LeftBlock.js';
import OutClick from './OutClickMenu/OutClick.js';

const IndexPage = (props) => {
	return (
		<Layout>
			<div className='main'>
				<div className='column'>
					<LeftBlock />
				</div>
				<div className='column'>
					<RightBlock />
					{/* <OutClick /> */}
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
