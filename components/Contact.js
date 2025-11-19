import { useState } from 'react'
import { useScrollAnimation } from '../lib/useScrollAnimation'

export default function Contact(){
  const [form, setForm] = useState({name:'',phone:'',email:'',date:'',type:'',message:''})
  const [sent, setSent] = useState(false)
  const formRef = useScrollAnimation({ animation: 'slide-in-left' })
  const mapRef = useScrollAnimation({ animation: 'slide-in-right' })

  function update(e){
    setForm({...form, [e.target.name]: e.target.value})
  }

  function submit(e){
    e.preventDefault()
    // In this demo we just simulate a submission and clear the form
    setSent(true)
    setTimeout(()=>{
      setForm({name:'',phone:'',email:'',date:'',type:'',message:''})
    }, 300)
  }

  return (
    <section id="contact" className="py-12">
      <h3 className="text-xl font-bold">Connect with Mangal Dhwani Events</h3>
      <p className="mt-2 text-gray-700">Address: Contact us for venue · Phone: +91-9999999999 · Email: events@mangaldhwani.com</p>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <form onSubmit={submit} className="space-y-4" ref={formRef}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={update} placeholder="Name" className="p-3 border rounded" />
            <input name="phone" value={form.phone} onChange={update} placeholder="Phone" className="p-3 border rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="email" value={form.email} onChange={update} placeholder="Email" className="p-3 border rounded" />
            <input name="date" value={form.date} onChange={update} placeholder="Event Date" className="p-3 border rounded" />
          </div>
          <select name="type" value={form.type} onChange={update} className="p-3 border rounded w-full">
            <option value="">Event Type (choose)</option>
            <option>Wedding</option>
            <option>Reception</option>
            <option>Corporate</option>
            <option>Cultural</option>
          </select>
          <textarea name="message" value={form.message} onChange={update} rows="4" placeholder="Message" className="w-full p-3 border rounded" />

          <div className="flex items-center space-x-3">
            <button type="submit" className="px-5 py-2 bg-deep text-white rounded">Send Inquiry</button>
            <a className="px-4 py-2 bg-green-600 text-white rounded" href="https://wa.me/919999999999">WhatsApp</a>
          </div>

          {sent && <div className="text-sm text-green-700">Thank you — your inquiry is recorded locally (demo).</div>}
        </form>

        <div ref={mapRef}>
          <img src="https://images.unsplash.com/photo-1514512364185-5bf8382b3b55?auto=format&fit=crop&w=1200&q=60" alt="Venue map" className="h-64 w-full object-cover rounded-lg" />
          <p className="mt-4 text-sm text-gray-600">Static venue image shown — replace with a Google Maps iframe when ready.</p>
        </div>
      </div>
    </section>
  )
}
