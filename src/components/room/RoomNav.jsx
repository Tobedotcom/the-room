function RoomNav({ activeTab, onTabChange }) {
  return (
    <nav className="room__nav" aria-label="Room sections">
      <button
        type="button"
        className={activeTab === "chores" ? "active" : ""}
        onClick={() => onTabChange("chores")}
      >
        Chores
      </button>

      <button
        type="button"
        className={activeTab === "meals" ? "active" : ""}
        onClick={() => onTabChange("meals")}
      >
        Meals
      </button>

      <button
        type="button"
        className={activeTab === "chat" ? "active" : ""}
        onClick={() => onTabChange("chat")}
      >
        Chat
      </button>
    </nav>
  );
}

export default RoomNav;
