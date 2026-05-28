# 🔐 Password Generator

A fun and interactive password generator built with JavaScript and Vite that creates secure random passwords instantly. Users can customize password length and generate two unique passwords at the same time with one-click copy functionality.

## ✨ Features

- Generate two random passwords instantly
- Adjustable password length
- Includes letters, numbers, and symbols
- One-click copy to clipboard
- Fast and responsive UI
- Simple and clean design

## 🛠️ Built With

- HTML
- CSS
- JavaScript
- Vite

## 🚀 Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Once the server is running, open your browser and navigate to:

```text
http://localhost:5173
```

📦 Build for Production

```bash
npm run build
```

---

🔒 Password Features

Generated passwords may include:

- Uppercase letters
- Lowercase letters
- Numbers
- Special characters

Password lengths can be customized between 5–15 characters.

---

## 📸 Preview

<img width="552" height="495" alt="image" src="https://github.com/user-attachments/assets/2f5685d9-9aaa-461c-add0-6805a99d34a6" />
<img width="750" height="582" alt="image" src="https://github.com/user-attachments/assets/17b49e7e-638d-4fb9-97a2-122275cde960" />

---

## 🔮 Future Improvements

- Add password strength indicator
- Allow users to choose character types (uppercase, numbers, symbols)
- Add “exclude similar characters” option
- Improve mobile layout
- Switch to modern Clipboard API for better browser support

---

## 🌐 Deployment

This project can be deployed using platforms such as Netlify, Vercel, or GitHub Pages.

---

## 🧠 Technical Notes

💡 **Global Function Exposure (Build Behavior)**

This project uses Vite for bundling, which wraps JavaScript in ES modules during production builds.  
To support legacy HTML `onclick` handlers without refactoring the UI, selected functions are exposed to the global scope.

Example:

```js
window.makePassword = makePassword;
window.copy1 = copy1;
window.copy2 = copy2;

## 📄 License

This project is for educational and portfolio purposes.
```
