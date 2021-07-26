import { useState } from "react";

const AddTask = ({ AddTaskHandler }) => {
  //simpan semua data dari form ke useState
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    AddTaskHandler({ text, date, reminder });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="tugas">Task</label>
        <input
          id="tugas"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="tanggal">Date</label>
        <input
          id="tanggal"
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pengingat">Reminder me</label>
        <input
          id="pengingat"
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <button type="submit">Tambah</button>
    </form>
  );
};

export default AddTask;
