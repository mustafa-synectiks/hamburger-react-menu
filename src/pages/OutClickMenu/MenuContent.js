import React, { useEffect } from 'react';

const MenuContent = ({ closeModal }) => {
	let myRef;
	useEffect(() => {
		document.addEventListener('click', closeTodoModal);
		document.addEventListener('keyup', closeTodoModal);
	}, []);

	const closeTodoModal = (e) => {
		if ((myRef && !myRef.contains(e.target)) || e.key === 'Escape') {
			closeModal();
		}
	};

	return (
		<div ref={(node) => (myRef = node)}>
			<h1>hi</h1>
			<button onClick={closeTodoModal}>Cancel</button>
		</div>
	);
};

export default MenuContent;
