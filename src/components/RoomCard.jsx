import { timeAgo } from '../hooks/useNurseCalls';

export default function RoomCard({ room, callTs }) {
  const calling = Boolean(callTs);
  return (
    <div className={`room ${calling ? 'calling' : 'idle'}`}>
      <div className="room-num">{room}</div>
      <div className="status">{calling ? '● calling' : '● idle2'}</div>
      {calling && <div className="time-ago">{timeAgo(callTs)}</div>}
    </div>
  );
}
