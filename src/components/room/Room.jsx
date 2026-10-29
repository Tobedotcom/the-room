import { useState } from "react";

import "../../css/room/room.css";
import ChoresView from "./ChoresView";

import RoomHeader from "./RoomHeader";
import RoomNav from "./RoomNav";

function Room() {
  const [activeTab, setActiveTab] = useState("chores");

  return (
    <main className="room">
      <div className="room__container">
        <RoomHeader />

        <RoomNav activeTab={activeTab} onTabChange={setActiveTab} />

        <section className="room__content">
          {activeTab === "chores" && <ChoresView />}

          {activeTab === "meals" && (
            <section className="room__content">
              <h2>Meals</h2>
              <p>Meals view coming next.</p>
            </section>
          )}

          {activeTab === "chat" && (
            <section className="room__content">
              <h2>Chat</h2>
              <p>Chat view coming next.</p>
            </section>
          )}
        </section>
      </div>
    </main>
  );
}

export default Room;
