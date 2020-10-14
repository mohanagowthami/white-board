import React from 'react';
import EventBus from '../eventBus';
import { BsPencil } from "react-icons/ai";
import Store from '../store';
import { ButtonsContainer, CustomButton } from './styledComponents';

export default class History extends React.Component {
	constructor() {
		super();

		Store.subscribe(() => {
			this.setState({
				history: Store.history,
				selectedIndex: Store.historyIndex
			});
		});

		this.state = {
			history: [],
			selectedIndex: -1
		};
	}

	handleClick(index = undefined) {

		return function () {
			EventBus.emit(EventBus.PICK_VERSION, index);
		}
	}

	handleUndo = () => {
		console.log("handle undo")
		Store.undo()

	}

	handleRedo = () => {
		console.log("handle redo")
		Store.redo()

	}

	render() {
		let versions = this.state.history.map((version, i) => <span
			key={i}
			onClick={this.handleClick(i).bind(this)}
			className={this.state.selectedIndex === i ? 'selected' : ''}
		></span>)
		return (

			<>
				<div id="history"> History: {versions} </div>
				<ButtonsContainer>
					<CustomButton onClick={this.handleUndo}>undo</CustomButton>
					<CustomButton onClick={this.handleRedo}>redo</CustomButton>
				</ButtonsContainer>

			</>);
	}
}
