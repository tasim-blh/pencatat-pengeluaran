import { AiOutlineClose } from "react-icons/ai";

const Task = ({ task, onDeleteHandler, toggleReminderHandler }) => {
  return (
    //tidak bisa menggunakan dua onclick dikomponen yang sama
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => toggleReminderHandler(task.id)}
    >
      <h4>
        {task.text}{" "}
        <AiOutlineClose
          style={{
            cursor: "pointer",
            padding: 4,
            background: "white",
            borderRadius: 4
          }}
          onClick={() => onDeleteHandler(task.id)}
        />
      </h4>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
