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
				<div className="ToDoList-items">
					{this.props.myTask.map(task =>
						<li className="ToDoList-item" key={task.id}>{task.name}</li>)}
				</div>
			</div>
		);
	}
}

export default ToDoList;
