async function submitModal() {
  const name = document.getElementById('mName').value.trim();
  const phone = document.getElementById('mPhone').value.trim();
  const email = document.getElementById('mEmail').value.trim();
  const city = document.getElementById('mCity').value.trim();
  const msg = document.getElementById('mMsg').value.trim();
  const course = document.getElementById('modalTitle').textContent;
  if (!name || !phone) { alert('Please fill Name and Mobile fields.'); return; }
  const btn = document.querySelector('#modalFormArea .submit-btn');
  btn.textContent = 'Sending…'; btn.disabled = true;
  const ok = await sendEmail('Course Enquiry: ' + course + ' — ' + name, { Name:name, Mobile:phone, Email:email||'—', City:city||'—', Course:course, Message:msg||'—' });
  btn.textContent = 'Send Enquiry 🚀'; btn.disabled = false;
  if (ok) { document.getElementById('modalFormArea').style.display = 'none'; document.getElementById('successMsg').style.display = 'block'; }
  else alert('Something went wrong. Please call us at +91 97577 22230.');
}

async function submitAdm() {
  const name = document.getElementById('aName').value.trim();
  const phone = document.getElementById('aPhone').value.trim();
  const email = document.getElementById('aEmail').value.trim();
  const course = document.getElementById('admCourse').value;
  if (!name || !phone) { alert('Please fill Name and Mobile fields.'); return; }
  if (!course) { alert('Please select a course.'); return; }
  const btn = document.querySelector('.adm-form-wrap .submit-btn');
  btn.textContent = 'Sending…'; btn.disabled = true;
  const ok = await sendEmail('Admission Enquiry: ' + course + ' — ' + name, { Name:name, Mobile:phone, Email:email||'—', Course:course });
  btn.textContent = 'Submit Enquiry →'; btn.disabled = false;
  if (ok) { document.getElementById('admFormArea').style.display = 'none'; document.getElementById('admSuccess').style.display = 'block'; }
  else alert('Something went wrong. Please call us at +91 97577 22230.');
}

async function heroEnquiry() {
  const p = document.getElementById('heroPhone').value.trim();
  if (!p) { alert('Please enter your mobile number.'); return; }
  const btn = document.querySelector('.hqf-row button');
  btn.textContent = 'Sending…'; btn.disabled = true;
  const ok = await sendEmail('Callback Request — ' + p, { Mobile:p, Source:'Hero Quick Enquiry' });
  btn.textContent = 'Call Me →'; btn.disabled = false;
  document.getElementById('heroPhone').value = '';
  if (ok) alert("✅ Got it! We'll call you at " + p + " within 24 hours.");
  else alert('Something went wrong. Please call us at +91 97577 22230.');
}