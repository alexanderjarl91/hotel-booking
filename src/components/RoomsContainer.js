import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomList from "./RoomList";

import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        console.log(value);

        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        } else {
          return (
            <>
              hello from rooms container
              <RoomsFilter rooms={rooms} />
              <RoomList rooms={sortedRooms} />
            </>
          );
        }
      }}
    </RoomConsumer>
  );
}
