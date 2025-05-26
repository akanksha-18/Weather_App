# 🌤️ Weather Dashboard

A responsive weather dashboard built using **React.js** + **Vite** that fetches real-time weather data using the **OpenWeatherMap API**. The app demonstrates key React concepts such as API integration, polling, hooks, global state management with Context API, and dynamic UI updates.

---

## 📸 Preview
![image](https://github.com/user-attachments/assets/764a2569-042c-4d08-bf9f-4fac9046173c)

Hosted Link :
---

## 🛠️ Features

- 🔍 Search for any city to view its current weather
- 🌡 Displays temperature, humidity, wind speed, and weather condition
- 🎨 Dynamic background changes based on weather (sunny, cloudy, rainy, etc.)
- ⏱ Auto-refreshes weather data every 30 seconds
- 💾 Saves last searched city to localStorage
- 🚫 Graceful error handling for invalid input or network failure

---

## 🚀 Project Setup

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard

# 2. Install dependencies
npm install

# 3. Set up environment variable
# Create a .env file in the root and add your OpenWeatherMap API key
echo "VITE_API_KEY=your_openweathermap_api_key" > .env

# 4. Run the development server
npm run dev

## 📁 Folder Structure
src/
├── assets/                # Icons or background images
├── components/            # Reusable UI components
│   ├── SearchBar.jsx      # Search input component
│   ├── WeatherCard.jsx    # Weather display component
│   └── ErrorMessage.jsx   # Error display component
├── context/               # Global state context
│   └── WeatherContext.jsx
├── styles/                # CSS Modules or global styles
│   ├── WeatherCard.module.css
│   ├── SearchBar.module.css
│   └── ErrorMessage.module.css
├── App.jsx                # Main application component
├── main.jsx               # Entry point
└── index.css              # Base styles


## 🧠 Approach & Architecture
👨‍💻 How I approached the assignment:
Setup: Used Vite for fast React project scaffolding.

Component Structure: Divided UI into logical, reusable components like SearchBar, WeatherCard, and ErrorMessage.

State Management: Used React Context API to globally manage the selected city and weather data.

API Integration: Fetched data from OpenWeatherMap and displayed dynamic weather info.

Polling: Implemented polling with setInterval inside useEffect to refetch weather data every 30 seconds.

Dynamic Styling: Used CSS Modules with conditional class names to update background color based on weather conditions.

Persistence: Stored the last searched city in localStorage so it persists between sessions.

Error Handling: Displayed clean, friendly messages for users on input errors or failed API responses.


