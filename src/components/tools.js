import React from 'react';
import EventBus from '../eventBus';
import ToolStore, { POINTER, PEN, LINE, ELLIPSE, RECT } from '../toolStore';
import ColorPicker from './colorPicker';
import "../commonStyles.css"
import {
	BsPencil, BsCircle
} from "react-icons/bs";
import { FaMinus, FaMousePointer, FaRectangleWide } from "react-icons/fa";
import { BiRectangle } from "react-icons/bi";


function icon(iconName) {

	switch (iconName) {
		case POINTER:
			return <FaMousePointer style={{ color: "green" }} size={30} />
		case LINE:
			return <FaMinus style={{ color: "green" }} size={30} />
		case RECT:
			return <BiRectangle style={{ color: "green" }} size={30} />
		case ELLIPSE:
			return <BsCircle style={{ color: "green" }} size={30} />
		case PEN:
			return <BsPencil style={{ color: "green" }} size={30} />

	}
}



export default class Tools extends React.Component {
	constructor() {
		super();
		this.state = {
			tools: [
				{ id: POINTER, label: 'fa-mouse-pointer', type: 'cursor' },
				{ id: LINE, label: 'fa-minus', type: 'line', selected: true },
				{ id: RECT, label: 'fa-square-o', type: 'rect' },
				{ id: ELLIPSE, label: 'fa-circle-thin', type: 'ellipse' },
				{ id: PEN, label: 'fa-pencil', type: 'pen' },
			]
		};
		ToolStore.subscribe(() => {
			const tools = this.state.tools.map(tool => ({ ...tool, selected: ToolStore.tool === tool.id }))
			this.setState({ tools })
		})
	}
	handleClick(index) {
		return function () {
			EventBus.emit(EventBus.TOOL_CHANGE, this.state.tools[index].id);
		}
	}

	render() {
		const tools = this.state.tools.map((tool, i) => <div
			key={i}
			onClick={this.handleClick(i).bind(this)}
			className={tool.selected ? "selected" : ''}
		>{icon(tool.id)}</div>)
		return (<div id="tools">
			{tools}
			<ColorPicker />
		</div>);
	}
}

