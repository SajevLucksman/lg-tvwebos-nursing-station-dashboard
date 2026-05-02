import { useClock } from '../hooks/useClock';

export default function Header() {
  const time = useClock();
  return (
    <header className="header">
      <h1>
        <span className="icon">🏥</span>
        <span className="title">Nurse Station</span>
        <span className="sub">Dashboard</span>
      </h1>
      <div className="clock">{time}</div>
    </header>
  );
}
