# QR Code Generator 🎯🔳

A simple, lightweight QR Code generator built with **HTML, CSS and JavaScript**.  
Type a URL or any text, choose a size, generate a QR code and download it as an image — super easy! 🚀

---

## Features ✨
- Generate QR codes from text or URLs.
- Choose from multiple preset sizes (100×100 → 1000×1000).
- One-click download of the generated QR as a PNG.
- Small, dependency-light project (uses `qrcodejs` CDN).

---

## Live Preview / Demo 🖼️


---


---

## How to use ✅
1. Open `index.html` in your web browser.  
2. Type the text or URL you want to convert into the input field.  
3. Select a size from the dropdown.  
4. Click **Generate** to create the QR code.  
5. Click **Download** to save the QR image (`QR_Code.png`).  

---

## Quick setup (dev) 🛠️
No build tools required.

- Clone or download the repo.
- Make sure you have internet access (the project loads `qrcodejs` from CDN).
- Open `index.html`.

---

## Customization 🎨
- Change the theme colors in `style.css`.
- Add more sizes to the `<select id="sizes">`.
- Replace `qrcodejs` with another QR library if you need advanced features.

---

## Known Issues & Fixes 🩺
- In `script.js`, change `herf` ➝ `href` in the download button logic.  
- Fix the media query syntax in `style.css`:  
  ```css
  @media screen and (max-width: 520px) {
    .box { width: 80%; }
    .qr-footer a { padding: 12px; font-size: 16px; }
  }

