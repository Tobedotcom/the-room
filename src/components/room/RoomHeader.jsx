function RoomHeader() {
  return (
    <header className="room__header">
      <div>
        <p className="room__eyebrow">YOUR SHARED HOME</p>
        <h1 className="room__title">The Room</h1>
      </div>

      <span className="room__status">
        <span className="room__status-dot"></span>
        Everyone's home
      </span>
    </header>
  );
}

export default RoomHeader;
