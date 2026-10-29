// ChoresView.jsx
import { useState } from "react";

import RoommateStatCard from "./RoommateStatCard";
import ChoreRow from "./ChoreRow";
import "../../css/room/chores.css";

const ROOMMATE_COLORS = ["maya", "jordan", "priya"]; // color slot per position, not by name

function ChoresView() {
  const [chores, setChores] = useState([
    {
      id: 1,
      name: "Clean kitchen",
      assignedTo: "Bosco",
      schedule: "Tomorrow",
      status: "Due",
      completed: false,
    },
    {
      id: 2,
      name: "Take out trash",
      assignedTo: "Amanwa",
      schedule: "Friday",
      status: "Upcoming",
      completed: false,
    },
    {
      id: 3,
      name: "Buy groceries",
      assignedTo: "Henry",
      schedule: "Saturday",
      status: "Upcoming",
      completed: false,
    },
  ]);

  function handleToggle(choreId) {
    setChores((currentChores) =>
      currentChores.map((chore) =>
        chore.id === choreId
          ? { ...chore, completed: !chore.completed }
          : chore,
      ),
    );
  }

  const roommates = [
    { name: "Amanwa", completed: 3 },
    { name: "Bosco", completed: 2 },
    { name: "Henry", completed: 3 },
  ];

  return (
    <section className="chores">
      <div className="chores__header">
        <div>
          <p className="chores__eyebrow">HOUSEHOLD TASKS</p>
          <h2 className="chores__title">Chores</h2>
          <p className="chores__intro">
            Keep responsibilities clear, fair, and easy to manage.
          </p>
        </div>

        {/* Visual only — no handler wired up yet */}
        <button type="button" className="chores__add-button">
          + Add chore
        </button>
      </div>

      <div className="chores__stats">
        {roommates.map((roommate, index) => (
          <RoommateStatCard
            key={roommate.name}
            name={roommate.name}
            completed={roommate.completed}
            colorKey={ROOMMATE_COLORS[index % ROOMMATE_COLORS.length]}
          />
        ))}
      </div>

      <div className="chores__list">
        <div className="chores__list-header">
          <span>Chore</span>
          <span>Assigned To</span>
          <span>Schedule</span>
          <span>Status</span>
        </div>

        {chores.map((chore) => (
          <ChoreRow key={chore.id} chore={chore} onToggle={handleToggle} />
        ))}
      </div>
    </section>
  );
}

export default ChoresView;