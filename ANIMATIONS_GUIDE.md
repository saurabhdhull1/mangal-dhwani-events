# Animations & Cursor Implementation Guide

## 🎬 Scroll Animations Overview

### Animation Types Available:

```
1. fade-in-up    → Element fades in while sliding up
2. slide-in-left → Element slides in from the left
3. slide-in-right → Element slides in from the right  
4. scale-in      → Element scales up from 0.95 to 1.0
```

### Component Animation Mapping:

| Component | Animation Type | Trigger | Effect |
|-----------|----------------|---------|--------|
| Hero | fade-in-up | Page Load | Title and CTA buttons slide up |
| About | Mixed | Scroll | Title fades up; image slides left; text slides right |
| Services | scale-in | Scroll | Service cards scale in with stagger |
| Contact | Mixed | Scroll | Form slides left; map slides right |
| Events | Mixed | Scroll | Title fades up; cards fade in staggered |
| Clients | Mixed | Scroll | Logos and testimonials stagger in |
| Footer | fade-in-up | Scroll | Footer content slides up |

---

## 🖱️ Shehnai Cursor Implementation

### Cursor Behavior:

```css
/* Standard elements */
* {
  cursor: url('...shehnai-icon.svg') 8 4, auto;
}

/* Interactive elements (more orange/bright) */
a, button {
  cursor: url('...shehnai-icon-bright.svg') 8 4, pointer;
}
```

### Visual Hierarchy:
- **Standard Cursor**: Gold color (#D97706) - indicates reading area
- **Interactive Cursor**: Bright orange (#F59E0B) - indicates clickable
- **Size**: 24x24px for optimal visibility
- **Offset**: (8, 4) hot-spot positioning

---

## 📝 How to Customize Animations

### Edit Animation Duration:

File: `styles/globals.css`

```css
@keyframes fadeInUp {
  /* Change duration from 0.6s to your value */
  animation: fadeInUp 0.6s ease-out forwards;
}
```

### Edit Intersection Threshold:

File: Any component using `useScrollAnimation`

```javascript
const ref = useScrollAnimation({ 
  animation: 'fade-in-up',
  threshold: 0.1  // Trigger when 10% visible (change to 0.5 for 50%, etc.)
})
```

### Add Stagger Delays:

File: `styles/globals.css`

```css
.stagger-child:nth-child(1) { animation-delay: 0.1s; }
.stagger-child:nth-child(2) { animation-delay: 0.2s; }
.stagger-child:nth-child(3) { animation-delay: 0.3s; }
/* Add more as needed */
```

---

## 🚀 Deployment Checklist

Before going to production:

- [ ] Replace phone numbers with real contact info
- [ ] Replace email with real business email
- [ ] Add real WhatsApp Business number
- [ ] Download Unsplash images to `/public/images/`
- [ ] Update image `src` paths from URLs to local
- [ ] Test all links (WhatsApp, social media)
- [ ] Run: `npm run build` to create optimized build
- [ ] Test on staging server
- [ ] Verify animations smooth on various devices
- [ ] Check cursor rendering on different browsers

---

## 🔧 Component Implementation Example

### Before (No Animations):
```javascript
export default function Hero() {
  return (
    <section id="home" className="relative">
      <h1>Mangal Dhwani Events</h1>
    </section>
  )
}
```

### After (With Animations):
```javascript
import { useScrollAnimation } from '../lib/useScrollAnimation'

export default function Hero() {
  const heroRef = useScrollAnimation({ animation: 'fade-in-up' })
  
  return (
    <section id="home" className="relative" ref={heroRef}>
      <h1>Mangal Dhwani Events</h1>
    </section>
  )
}
```

---

## 🎯 Key Files Reference

| File | Purpose | Modification Type |
|------|---------|-------------------|
| `lib/useScrollAnimation.js` | Scroll trigger hook | New ✨ |
| `styles/globals.css` | Animations + cursor | Updated 📝 |
| `components/Hero.js` | Landing hero | Animated 🎬 |
| `components/About.js` | About section | Animated 🎬 |
| `components/Services.js` | Services grid | Animated 🎬 |
| `components/Contact.js` | Contact form + map | Animated 🎬 |
| `components/Events.js` | Achievements/events | Animated 🎬 |
| `components/Clients.js` | Client logos | Animated 🎬 |
| `components/Footer.js` | Footer section | Animated 🎬 |
| `components/NavBar.js` | Navigation | Data updated ✏️ |
| `components/WhatsAppButton.js` | WhatsApp button | Data updated ✏️ |

---

## 🐛 Troubleshooting

### Animations not showing?
- Check browser dev tools - verify CSS is loaded
- Ensure component has `ref={animationRef}` 
- Check console for JavaScript errors
- Verify `opacity: 0` starting state in CSS

### Cursor not changing?
- Clear browser cache (Ctrl+Shift+Del)
- Check cursor SVG is valid
- Verify `cursor` property in CSS
- Try different browser (some have CSS cursor limitations)

### Performance issues?
- Reduce animation duration (lower values = faster)
- Reduce number of animated elements per screen
- Use `will-change: transform` CSS property sparingly
- Test on mobile devices - simplify if needed

---

## 📱 Responsive Design

All animations are mobile-friendly:
- Animations trigger the same on mobile
- Cursor doesn't show on touch devices (auto fallback)
- Animations respect `prefers-reduced-motion` media query (add if users have accessibility preferences)

### Add Accessibility:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}
```

---

## 🎨 Animation Timing Defaults

- **Fade & Slide**: 0.6s ease-out
- **Scale**: 0.5s ease-out
- **Stagger**: 0.1s increment per child
- **Root Margin**: 0px 0px -50px 0px (trigger slightly before fully visible)

---

## 📚 Resources

- **Intersection Observer API**: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- **CSS Animations**: https://developer.mozilla.org/en-US/docs/Web/CSS/animation
- **Custom Cursors**: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor

---

**Status**: All enhancements complete and tested ✅
**Dev Server**: Running at http://localhost:3000
**Ready for**: Production deployment after content review

