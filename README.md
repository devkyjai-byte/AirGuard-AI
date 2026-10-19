# AirGuard-AI / SmokeFree Samsung PWA

GPS and reference map demonstration. Automatic entry alerts are disabled: legal no-smoking boundaries and current designations are not verified. The 433 points are reference coordinates, not legal boundaries.

## Deployment
GitHub Pages: Deploy from a branch -> main -> / (root).
Expected URL: https://devkyjai-byte.github.io/AirGuard-AI/

## Samsung phone installation
- Chrome: Open the HTTPS URL, then menu -> Install app / Add to Home screen -> Install.
- Samsung Internet: Open the HTTPS URL, then menu -> Add to Home screen, or use the installation icon in the address bar.
- Launch the home screen icon, tap the location button, and allow location access. Enable device location services.
- GPS starts only after the user taps the button. The stop button clears the location watch. Screen lock or closing the app may stop GPS.

## Privacy and connectivity
GPS coordinates are not saved to an app server. When the map follows your location, the external OpenStreetMap tile provider receives tile requests identifying the viewed area and normal connection metadata. Leaflet is loaded from unpkg.com. Map tiles and initial Leaflet loading require Internet access; offline map rendering is not guaranteed. The application shell, JavaScript, reference data, manifest and icons are cached by the service worker.

## Review
Manifest paths are relative to the project directory; display is standalone; PNG icons are 192x192 and 512x512. JavaScript syntax and coordinate ranges were checked. Service worker tests cover app.js precaching, cache ownership by application scope, offline fallback, and exclusion of external tile requests. Real Samsung device GPS and installation require on-device verification.
