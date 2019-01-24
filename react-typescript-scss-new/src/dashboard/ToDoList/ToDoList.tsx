import * as React from 'react';
import './ToDoList.scss';


interface IProps {
	[index: string]: {taskName: string;  id: string;};
	// isCompleted: boolean
}

// interface IState {
//
// }

class ToDoList extends React.Component<IProps>{

	public constructor(props:IProps) {
		super(props)
	}
	public render() {
		return (
			<div className="ToDoList">
				{this.props.myTask}
				{/*{this.props.tasks.map(task =><li key={task.id}>{task}</li>)}*/}
			</div>
		);
	}
}

export default ToDoList;
