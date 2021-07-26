import { useState } from "react";
import AddTask from "./component/AddTask";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import "./styles.css";

const data = [
  {
    id: 1,
    text: "Tidur",
    date: "jam 10 malam",
    reminder: true
  },
  {
    id: 2,
    text: "Bangun",
    date: "jam 5 pagi",
    reminder: false
  }
];
export default function App() {
  const [tasks, setTasks] = useState(data);
  const [showForm, setShowForm] = useState(false);

  //menambahkan semua fungsi yang dibutuhkan
  const AddTaskHandler = (object) => {
    const id = Math.floor(Math.random() * 1000);
    const newTask = { id, ...object };
    setTasks((prevState) => [...prevState, newTask]);
    //use console.log for search bug
    //console.log(newTask);
  };

  const onDeleteHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onShowHandler = () => {
    setShowForm(!showForm);
  };

  const toggleReminderHandler = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  let tugas = <p>Tidak ada tugas</p>;
  if (tasks.length > 0) {
    tugas = (
      <Tasks
        tasks={tasks}
        onDeleteHandler={onDeleteHandler}
        toggleReminderHandler={toggleReminderHandler}
      />
    );
  }
  return (
    <section className="App">
      <Header onShowHandler={onShowHandler} showForm={showForm} />
      {showForm && <AddTask AddTaskHandler={AddTaskHandler} />}
      {tugas}
    </section>
  );
}
