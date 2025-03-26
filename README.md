# 🎲 Advice Generator App  

This is a solution to the [Advice Generator App Challenge](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db) on Frontend Mentor. The challenge helps improve coding skills by working on real-world projects.  

## 📑 Table of Contents  

- [Overview](#overview)  
  - [The Challenge](#the-challenge)  
  - [Screenshot](#screenshot)  
  - [Live Demo](#live-demo)  
- [🔨 Built With](#built-with)  
- [📚 What I Learned](#what-i-learned)  
- [🚀 Future Improvements](#future-improvements)  
- [📌 Useful Resources](#useful-resources)  
- [👤 Author](#author)  
- [🙏 Acknowledgments](#acknowledgments)  

## 🌟 Overview  

### The Challenge  

Users should be able to:  

✅ View an optimal layout based on their device's screen size  
✅ See hover states for all interactive elements  
✅ Generate a new piece of advice by clicking the dice button  

### 📸 Screenshot  

> Add a screenshot of your project here.  

### 🌐 Live Demo  

🔗 [Live Project URL](#)  

## 🔨 Built With  

- Semantic **HTML5**  
- **CSS3** (Flexbox, Grid)  
- **React** (useEffect, useState)  
- **Advice Slip API** ([api.adviceslip.com](https://api.adviceslip.com))  
- Mobile-first approach  

## 📚 What I Learned  

Some key takeaways from this project:  

- Fetching API data with `fetch()` in React.  
- Handling asynchronous state updates using `useState` and `useEffect`.  
- Implementing **CSS animations** (e.g., rotating the dice icon).  

```js
const fetchAdvice = async () => {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  setAdvice(data.slip);
};
```
## 🚀 Future Improvements
- Add a loading state while fetching advice.

- Improve accessibility (aria-live for dynamically changing advice).

- Add dark mode support.

## 📌 Useful Resources
- [Advice Slip API Docs](https://api.adviceslip.com/)

- [MDN Fetch API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

- React Official Docs

## 👤 Author
- Frontend Mentor - [@ezekiel673](https://www.frontendmentor.io/profile/ezekiel673)

- GitHub - [@ezekiel673](https://github.com/ezekiel673)

- Twitter - [Adeosun Ezekiel](https://twitter.com/yeshua_codeit)

## 🙏 Acknowledgments
Special thanks to Frontend Mentor for the challenge and the open-source community for their amazing resources.