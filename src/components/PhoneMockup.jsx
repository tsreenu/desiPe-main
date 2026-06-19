export default function PhoneMockup({ variant = 'shramstack' }) {
  return (
    <div className="pd-vis reveal">
      <div className="phone-mockup">
        <div className="phone-top"><span>9:41</span><span>●●●</span></div>
        <div className="phone-screen">
          {variant === 'shramstack' ? <ShramStackScreen /> : <BharatBachatScreen />}
        </div>
      </div>
    </div>
  )
}

function ShramStackScreen() {
  return (
    <>
      <div className="phone-header blue">
        <div className="ph-role">Worker Portal</div>
        <div className="ph-name">Ravi Kumar</div>
        <div className="ph-id">ID: SS-A1B2C · Hyderabad</div>
      </div>
      <div className="ph-row">
        <div className="ph-stat"><div className="ph-sl">This Month</div><div className="ph-sv green">₹11,550</div></div>
        <div className="ph-stat"><div className="ph-sl">Days Worked</div><div className="ph-sv blue">25</div></div>
      </div>
      <div className="ph-item"><span className="ph-il">ESIC Status</span><span className="ph-iv">✓ Active</span></div>
      <div className="ph-item"><span className="ph-il">EPF Balance</span><span className="ph-iv">₹8,420</span></div>
      <div className="ph-item"><span className="ph-il">Payslip</span><span className="ph-iv">Download</span></div>
      <div>
        <span className="ph-badge pb-green">Wage credited ✓</span>
        <span className="ph-badge pb-blue" style={{ marginLeft: 6 }}>Appt letter ✓</span>
      </div>
    </>
  )
}

function BharatBachatScreen() {
  return (
    <>
      <div className="phone-header teal">
        <div className="ph-role">Bharat Bachat · Save</div>
        <div className="ph-name">Saved this month</div>
        <div className="ph-amount">₹540</div>
      </div>
      <div className="ph-row">
        <div className="ph-stat"><div className="ph-sl">Round-ups</div><div className="ph-sv green">27</div></div>
        <div className="ph-stat"><div className="ph-sl">Streak</div><div className="ph-sv amber">12 days</div></div>
      </div>
      <div className="ph-item block">
        <span className="ph-il">Goal · Emergency fund</span>
        <div className="ph-bar"><i style={{ width: '62%' }}></i></div>
        <span className="ph-iv" style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>₹3,100 of ₹5,000</span>
      </div>
      <div className="ph-item"><span className="ph-il">Last nudge</span><span className="ph-iv">+₹20 saved</span></div>
      <div>
        <span className="ph-badge pb-teal">Auto-save on ✓</span>
        <span className="ph-badge pb-green" style={{ marginLeft: 6 }}>UPI linked ✓</span>
      </div>
    </>
  )
}
