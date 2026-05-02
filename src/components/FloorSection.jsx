import RoomCard from './RoomCard';

export default function FloorSection({ name, rooms, calls }) {
  return (
    <section className="floor-section">
      <h3><span className="dot" />{name}</h3>
      <div className="rooms">
        {rooms.map(r => (
          <RoomCard key={r} room={r} callTs={calls[r]} />
        ))}
      </div>
    </section>
  );
}
