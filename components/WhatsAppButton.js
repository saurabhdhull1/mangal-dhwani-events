export default function WhatsAppButton(){
  const phone = '919999999999'
  const text = encodeURIComponent('Hello, I would like to inquire about booking Mangal Dhwani Events.')
  const href = `https://wa.me/${phone}?text=${text}`

  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed right-4 bottom-20 z-50 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.15 1.59 5.95L0 24l6.35-1.67A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.19-3.48-8.52zM12 21.5c-1.87 0-3.69-.5-5.26-1.44l-.38-.23-3.78.99.99-3.78-.25-.39A9.5 9.5 0 012.5 12 9.5 9.5 0 0112 2.5 9.5 9.5 0 0121.5 12 9.5 9.5 0 0112 21.5z"/>
        <path d="M17.6 14.2c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.41-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.37-.02-.52-.02-.15-.67-1.63-.92-2.23-.24-.58-.49-.5-.67-.51-.17 0-.37-.02-.57-.02s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.2 3.07.15.2 2.08 3.2 5.04 4.49 2.96 1.29 2.96.86 3.49.81.53-.05 1.78-.73 2.03-1.44.25-.71.25-1.32.18-1.45-.07-.13-.27-.2-.57-.35z"/>
      </svg>
    </a>
  )
}
