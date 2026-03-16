const WEB3FORMS_KEY = '840086e9-d55c-4cd0-8af6-c5e1b64b98dd';

async function sendEmail(subject, fields) {
  const body = Object.entries(fields).map(([k, v]) => k + ': ' + v).join('\n');
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject, from_name: 'Shrisha Education Website', message: body })
  });
  return res.ok;
}