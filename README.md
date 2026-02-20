# NCK Calculator (Progressive Web App)

A simple, clean daily calculator with:

- Unit Management (4 fields + Total Unit + Deduction = Net Unit)
- Cash Management (6 fields + Total Cash + Deduction = Net Cash)
- Comparison (Difference between Net Unit and Net Cash)
- History System (Last 30 days, saved locally)
- **Progressive Web App (PWA)** - Installable on mobile and desktop

## Features

- ✅ **Offline Support** - Works without internet after first load
- ✅ **Installable** - Add to home screen on iOS and Android
- ✅ **Standalone Mode** - Opens without browser UI when installed
- ✅ **Real-time Calculations** - Updates instantly as you type
- ✅ **Local Storage** - History saved on your device only

## Run

### Option 1: Local Server (Recommended for PWA)

```bash
cd "/Users/kyawzin001/Desktop/NCK Calculator"
python3 -m http.server 5173
```

Then open `http://localhost:5173` in your browser.

### Option 2: Direct File

Double-click `index.html` to open it in your browser (limited PWA features).

## Install as PWA

### Android (Chrome/Edge):
1. Open the app in Chrome/Edge browser
2. Tap the menu (3 dots) → **"Add to Home screen"** or **"Install app"**
3. Confirm installation
4. The app will open in standalone mode (no browser address bar)

### iOS (Safari):
1. Open the app in Safari browser
2. Tap the Share button (square with arrow)
3. Scroll down and tap **"Add to Home Screen"**
4. Customize the name if desired, then tap **"Add"**
5. The app will open in standalone mode (no Safari UI)

### Desktop (Chrome/Edge):
1. Open the app in Chrome/Edge browser
2. Look for the install icon in the address bar (or menu → "Install NCK Calculator")
3. Click **"Install"**
4. The app will open in its own window

## Files

- `index.html` - Main application
- `manifest.json` - PWA manifest (app metadata)
- `sw.js` - Service Worker (offline caching)
- `icon.svg` - App icon (SVG format)

## Notes

- The app uses **localStorage** for history - data stays on your device only
- History automatically cleans up records older than 30 days
- For best PWA experience, serve via HTTPS (or localhost)
- PNG icons (192x192 and 512x512) can be added to `manifest.json` for better icon support on some platforms

