import { useState } from 'react';
import { ALL_ROOMS } from '../data/floors';

export default function SimPanel({ onCall, onCancel }) {
  const [selected, setSelected] = useState(ALL_ROOMS[0]);
  return (
    <div className="sim-panel">
      <label>Simulate</label>
      <select value={selected} onChange={e => setSelected(e.target.value)}>
        {ALL_ROOMS.map(r => <option key={r} value={r}>Room {r}</option>)}
      </select>
      <button className="btn-green" onClick={() => onCall(selected)}>● Call</button>
      <button className="btn-red" onClick={() => onCancel(selected)}>● Cancel</button>
    </div>
  );
}
