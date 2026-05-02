import { timeAgo } from '../hooks/useNurseCalls';

export default function AlertPanel({ sortedCalls }) {
  return (
    <div className="alert-panel">
      <h2>⚡ Active Calls:</h2>
      {sortedCalls.length === 0 ? (
        <span className="no-alerts">✅ All Clear</span>
      ) : (
        sortedCalls.map(([room, ts]) => (
          <span key={room} className="alert-badge">
            Room {room} <span className="time">· {timeAgo(ts)}</span>
          </span>
        ))
      )}
    </div>
  );
}
