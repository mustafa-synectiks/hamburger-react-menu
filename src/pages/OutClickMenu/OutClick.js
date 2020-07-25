import React, { useState } from 'react';
import MenuContent from './MenuContent.js';

const OutClick = () => {
	const [ showModal, setShowModal ] = useState(false);

	const handleShowModal = () => {
		setShowModal(true);
	};
	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<div>
			{showModal && <MenuContent closeModal={handleCloseModal} />}
			<button onClick={handleShowModal}>{showModal ? 'Close' : 'Learn More'}</button>
		</div>
	);
};

export default OutClick;
