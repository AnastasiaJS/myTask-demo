import React from 'react';

class Task extends React.Component {
    static propTypes = {
        title: React.PropTypes.string,
        link: React.PropTypes.string,
    };

    handleNavigate(key, e) {
        // 阻止原生链接跳转
        e.preventDefault();

        // 使用 react-router-redux 提供的方法跳转，以便更新对应的 store
        this.props.push(`/detail/${key}`);
    }

    render() {
        console.log("task.....",this.props)
        return (
            <article className="task-item">
                <input type="checkbox"  onClick={this.handleNavigate.bind(null, this.props.key)}/>
                <span>{this.props.name}</span>
                <span>{this.props.state}</span>
            </article>
        );
    }
}

export default Task;
