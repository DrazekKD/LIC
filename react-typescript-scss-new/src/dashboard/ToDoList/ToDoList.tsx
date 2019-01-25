import * as React from 'react';
import './ToDoList.scss';

interface ITask {
	id:string
	name:string
	isCompleted: boolean
}

interface IProps {
	myTask: ITask[];
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
				{this.props.myTask.map(task => <li key={task.id}>{task.name}</li>)}
			</div>
		);
	}
}

export default ToDoList;
