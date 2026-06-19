const layers = [
  { id: 'L4', name: 'Credit', prod: 'Desipe Credit', status: '2027', on: false, lc: 'var(--amber2)' },
  { id: 'L3', name: 'Grow', prod: 'BUSI Grow · Skills & Marketplace', status: '2026', on: false, lc: 'var(--purple2)' },
  { id: 'L2', name: 'Save', prod: 'Bharat Bachat', status: 'Pilot', on: true, lc: 'var(--teal2)' },
  { id: 'L1', name: 'Work', prod: 'ShramStack', status: 'Live', on: true, lc: '#60A5FA' },
]

export default function StackCard() {
  return (
    <div className="hero-visual">
      <div className="stack-card">
        <div className="stack-card-h">
          <span className="t">The Desipe Stack</span>
          <span className="m">WORK → CREDIT</span>
        </div>
        <div className="stack-rail">
          <div className="stack-spine"></div>
          <div className="stack-dot"></div>
          {layers.map((l) => (
            <div className="slayer" style={{ '--lc': l.lc }} key={l.id}>
              <span className="lid">{l.id}</span>
              <div className="lb"><b>{l.name}</b><small>{l.prod}</small></div>
              <span className={`ls${l.on ? ' on' : ''}`}>{l.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
