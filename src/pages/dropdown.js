import React, { Component } from 'react';
import styled from 'styled-components';

class Dropdown extends Component {
	constructor() {
		super();

		this.state = {
			showMenu: false
		};

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	showMenu(event) {
		event.preventDefault();

		this.setState({ showMenu: true }, () => {
			document.addEventListener('click', this.closeMenu);
		});
	}

	closeMenu(event) {
		if (!this.dropdownMenu.contains(event.target)) {
			this.setState({ showMenu: false }, () => {
				document.removeEventListener('click', this.closeMenu);
			});
		}
	}

	render() {
		return (
			<MenuWrapper>
				<button onClick={this.showMenu}>Show menu</button>

				{this.state.showMenu ? (
					<div
						className='menu'
						ref={(element) => {
							this.dropdownMenu = element;
						}}>
						<button> Menu item 1 </button>
						<button> Menu item 2 </button>
						<button> Menu item 3 </button>
					</div>
				) : null}
			</MenuWrapper>
		);
	}
}
export default Dropdown;

const MenuWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	background-color: #0d2538;
	.menu {
		background-color: #fac;
		height: 20vh;
		transform: translatex(20%);
	}
`;
