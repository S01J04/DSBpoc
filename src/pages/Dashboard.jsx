import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts'

const CHART_COLORS = ['#9ca3af', '#f97316', '#6b7280', '#fb923c']

const charts = [
  {
    title: 'CTP',
    data: [
      { name: '1st Qtr', value: 4200 },
      { name: '2nd Qtr', value: 1600 },
      { name: '3rd Qtr', value: 900 },
      { name: '4th Qtr', value: 300 },
    ],
  },
  {
    title: 'Specific',
    data: [
      { name: '1st Qtr', value: 3800 },
      { name: '2nd Qtr', value: 2100 },
      { name: '3rd Qtr', value: 700 },
      { name: '4th Qtr', value: 450 },
    ],
  },
  {
    title: 'Vulnerable\nEstablishments',
    data: [
      { name: '1st Qtr', value: 5000 },
      { name: '2nd Qtr', value: 1500 },
      { name: '3rd Qtr', value: 600 },
      { name: '4th Qtr', value: 250 },
    ],
  },
  {
    title: 'Specific to Person',
    data: [
      { name: '1st Qtr', value: 4100 },
      { name: '2nd Qtr', value: 1900 },
      { name: '3rd Qtr', value: 750 },
      { name: '4th Qtr', value: 360 },
    ],
  },
]

const links = [
  {
    name: 'Facebook',
    icon: <FacebookIcon />,
    href: '#',
  },
  {
    name: 'WhatsApp',
    icon: <WhatsAppIcon />,
    href: '#',
  },
  {
    name: 'Letters',
    icon: <LettersIcon />,
    href: '#',
  },
  {
    name: 'Share',
    icon: <ShareIcon />,
    href: '#',
  },
  {
    name: 'Attachments',
    icon: <AttachmentsIcon />,
    href: '#',
  },
  {
    name: 'CT Source',
    icon: <CTSourceIcon />,
    href: '#',
  },
]

function FacebookIcon() {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ background: '#1877f2' }}>
      f
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#25d366' }}>
      <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </div>
  )
}

function LettersIcon() {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#60a5fa' }}>
      <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    </div>
  )
}

function ShareIcon() {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#9ca3af' }}>
      <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
      </svg>
    </div>
  )
}

function AttachmentsIcon() {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#d1d5db' }}>
      <svg viewBox="0 0 24 24" fill="#6b7280" width="20" height="20">
        <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" />
      </svg>
    </div>
  )
}

function CTSourceIcon() {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#991b1b' }}>
      <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    </div>
  )
}

function renderLegend(props) {
  const { payload } = props
  return (
    <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-1">
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-sm" style={{ background: entry.color }} />
          <span className="text-white" style={{ fontSize: '11px' }}>{entry.value}</span>
        </div>
      ))}
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="flex flex-col" style={{ minHeight: '100%' }}>
      {/* Top section — officer photo + links */}
      <div className="flex items-center" style={{ padding: '40px 32px', flex: 1 }}>
        {/* Officer circular photo */}
        <div className="flex items-center justify-center" style={{ flex: '0 0 45%' }}>
          <div
            className="relative rounded-full overflow-hidden flex flex-col items-center justify-center"
            style={{
              width: '230px',
              height: '230px',
              background: 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 60%, #2563eb 100%)',
              border: '4px solid #3b82f6',
              boxShadow: '0 8px 32px rgba(37,99,235,0.3)',
            }}
          >
            <img
              src="/profile.jpeg"
              alt="DPO Tank"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'scaleX(-1)',
              }}
            />
            {/* Watermark text */}
            <div
              className="absolute bottom-6 text-center font-semibold italic"
              style={{ color: '#fbbf24', fontSize: '13px', letterSpacing: '0.5px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
            >
              DPO Tank
            </div>
          </div>
        </div>

        {/* Links with connecting lines */}
        <div className="flex flex-col justify-center gap-5" style={{ flex: '0 0 55%' }}>
          {links.map(({ name, icon, href }) => (
            <a
              key={name}
              href={href}
              className="flex items-center gap-4 group no-underline"
              style={{ textDecoration: 'none' }}
            >
              <div className="flex-1 group-hover:border-blue-400 transition-colors" style={{ height: '1px', background: '#d1d5db' }} />
              <div className="transition-transform group-hover:scale-110">{icon}</div>
              <span className="font-semibold text-gray-800 text-lg" style={{ width: '130px' }}>{name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom section — pie charts */}
      <div style={{ background: '#3b82f6', padding: '20px 24px 16px' }}>
        <div className="grid grid-cols-4 gap-4">
          {charts.map((chart) => (
            <div key={chart.title} className="flex flex-col items-center">
              <h3
                className="text-white font-bold text-center mb-1"
                style={{ fontSize: '13px', lineHeight: 1.3, whiteSpace: 'pre-line' }}
              >
                {chart.title}
              </h3>
              <ResponsiveContainer width="100%" height={190}>
                <PieChart>
                  <Pie
                    data={chart.data}
                    cx="50%"
                    cy="45%"
                    outerRadius={62}
                    dataKey="value"
                    strokeWidth={1}
                    stroke="rgba(255,255,255,0.3)"
                  >
                    {chart.data.map((_, i) => (
                      <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend content={renderLegend} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
