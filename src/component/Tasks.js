import Task from "./Task";

const Tasks = ({ tasks, onDeleteHandler, toggleReminderHandler }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteHandler={onDeleteHandler}
          toggleReminderHandler={toggleReminderHandler}
        />
      ))}
    </div>
  );
};

export default Tasks;
