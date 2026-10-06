// Vercel serverless function: emails a visit notification.
// Env vars (set in the Vercel dashboard, never in client code):
//   RESEND_API_KEY  - API key from resend.com
//   NOTIFY_TO       - recipient (defaults to francis@creativedevlabs.com)
//   NOTIFY_FROM     - verified sender, e.g. "Hung's Site <alerts@yourdomain.com>"

const esc = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

function parseUA(ua = '') {
  const browser =
    /Edg\//.test(ua) ? 'Edge'
    : /OPR\//.test(ua) ? 'Opera'
    : /Firefox\//.test(ua) ? 'Firefox'
    : /Chrome\//.test(ua) ? 'Chrome'
    : /Safari\//.test(ua) ? 'Safari'
    : 'Unknown'
  const os =
    /Windows/.test(ua) ? 'Windows'
    : /Android/.test(ua) ? 'Android'
    : /iPhone|iPad|iPod/.test(ua) ? 'iOS'
    : /Mac OS X/.test(ua) ? 'macOS'
    : /Linux/.test(ua) ? 'Linux'
    : 'Unknown'
  const type = /Mobi|Android|iPhone/.test(ua) ? 'Mobile' : /iPad|Tablet/.test(ua) ? 'Tablet' : 'Desktop'
  return { browser, device: `${type} · ${os}` }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const ua = req.headers['user-agent'] || ''
  if (/bot|crawl|spider|preview|headless|lighthouse/i.test(ua)) return res.status(204).end()

  const key = process.env.RESEND_API_KEY
  if (!key) return res.status(500).json({ error: 'Email is not configured' })

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'Unknown'
  const city = decodeURIComponent(req.headers['x-vercel-ip-city'] || '')
  const region = req.headers['x-vercel-ip-country-region'] || ''
  const country = req.headers['x-vercel-ip-country'] || ''
  const location = [city, region, country].filter(Boolean).join(', ') || 'Unknown'
  const { browser, device } = parseUA(ua)
  const when = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago', timeZoneName: 'short' })

  const rows = [
    ['IP Address', ip],
    ['Location', location],
    ['Device', device],
    ['Browser', browser],
    ['Date/time', when],
  ]
  const html = `<h2>New visitor on Hung's Tattoo Parlor</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`)
    .join('')}</table>`

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.NOTIFY_FROM || "Hung's Site <onboarding@resend.dev>",
      to: [process.env.NOTIFY_TO || 'francis@creativedevlabs.com'],
      subject: `New site visit — ${location}`,
      html,
    }),
  })
  return res.status(r.ok ? 200 : 502).json({ ok: r.ok })
}
