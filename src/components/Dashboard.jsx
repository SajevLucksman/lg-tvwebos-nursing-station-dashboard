import { FLOORS } from '../data/floors';
import { useNurseCalls } from '../hooks/useNurseCalls';
import Header from './Header';
import AlertPanel from './AlertPanel';
import FloorSection from './FloorSection';
import SimPanel from './SimPanel';

export default function Dashboard() {
  const { calls, sortedCalls, addCall, cancelCall } = useNurseCalls();
  return (
    <div className="layout">
      <Header />
      <AlertPanel sortedCalls={sortedCalls} />
      <div className="floors">
        {FLOORS.map(f => (
          <FloorSection key={f.name} name={f.name} rooms={f.rooms} calls={calls} />
        ))}
      </div>
      <SimPanel onCall={addCall} onCancel={cancelCall} />
    </div>
  );
}
