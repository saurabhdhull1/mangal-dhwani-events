import { createContext, useContext, useState } from 'react'

const BookingContext = createContext(null)

export function useBooking(){
  return useContext(BookingContext)
}

export function BookingProvider({children}){
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function openModal(){ setOpen(true); setSubmitted(false) }
  function closeModal(){ setOpen(false) }

  return (
    <BookingContext.Provider value={{open, openModal, closeModal, submitted, setSubmitted}}>
      {children}
      {open && <Modal onClose={closeModal} onSubmitted={()=> setSubmitted(true)} />}
    </BookingContext.Provider>
  )
}

function Modal({onClose,onSubmitted}){
  const [form, setForm] = useState({name:'',phone:'',email:'',date:'',type:'',message:''})

  function update(e){ setForm({...form, [e.target.name]: e.target.value}) }
  function submit(e){ e.preventDefault(); onSubmitted(); setTimeout(()=> onClose(), 800) }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg max-w-xl w-full p-6 shadow-lg">
        <h3 className="text-lg font-semibold">Book Mangal Dhwani Events</h3>
        <p className="text-sm text-gray-600">Fill the details and our team will contact you (demo).</p>

        <form onSubmit={submit} className="mt-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input name="name" value={form.name} onChange={update} placeholder="Name" className="p-2 border rounded" />
            <input name="phone" value={form.phone} onChange={update} placeholder="Phone" className="p-2 border rounded" />
          </div>
          <input name="email" value={form.email} onChange={update} placeholder="Email" className="w-full p-2 border rounded" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input name="date" value={form.date} onChange={update} placeholder="Event Date" className="p-2 border rounded" />
            <select name="type" value={form.type} onChange={update} className="p-2 border rounded">
              <option value="">Event Type</option>
              <option>Wedding</option>
              <option>Reception</option>
              <option>Corporate</option>
            </select>
          </div>
          <textarea name="message" value={form.message} onChange={update} placeholder="Message" className="w-full p-2 border rounded" />

          <div className="flex justify-end items-center space-x-3">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-deep text-white rounded">Request Booking</button>
          </div>
        </form>
      </div>
    </div>
  )
}
