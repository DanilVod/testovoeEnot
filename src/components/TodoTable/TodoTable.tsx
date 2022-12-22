import { FC } from 'react';
import { Task } from '../Task';
import { taskProps } from '../Task/Task';

interface todoTableProps {
  todos: taskProps[];
}
export const TodoTable: FC<todoTableProps> = ({ todos }) => {
  return (
    <div
      style={{
        background: '#282828',
        boxShadow:
          '5px 5px 16px 0px rgba(0, 0, 0, 0.5), -5px -5px 16px 0px rgba(255, 255, 255, 0.1)',
        borderRadius: '35px',
        marginBottom: '30px',
        padding: '0 20px',
      }}>
      {todos.map((todo, index) => (
        <Task key={todo.title + index} title={todo.title} subtitle={todo.subtitle}></Task>
      ))}
    </div>
  );
};
