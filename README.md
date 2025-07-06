
# NewsNexus Agent

**by NikithaKunapareddy**

NewsNexus Agent is a Python-powered, full-stack news aggregation platform that unifies real-time news from multiple APIs into a single, beautiful interface. Built for speed, extensibility, and developer joy, it leverages FastAPI for the backend and a modern React frontend (with dark/light mode) for a seamless user experience.

---

## 🚀 Features
- 🔎 Query top news from NewsAPI, Serper, or Google Custom Search
- 🔑 Effortless API key management via `.env`
- 🎨 Modern, responsive UI (React + TypeScript with gradients, dark/light mode)
- 🐍 Python-centric: all backend logic, utilities, and tests in Python
- 🧩 Easily extensible for new sources or features

## 🗂️ Project Structure

```
news rag/
│
├── main.py              # FastAPI backend entry point
├── news_agent.py        # News agent logic & API integrations
├── utils.py             # Python utility functions
├── test_news_agent.py   # Python backend tests
├── .env                 # API keys (not committed)
├── README.md            # Project documentation
├── docs.md              # Extended docs
├── frontend/            # React + TypeScript frontend (Vite)
│   └── src/
│       └── App.tsx      # Main React UI logic & styling (TypeScript)
└── ...                  # Other files
```

## �️ Visual Output
Below is a sample screenshot of the NewsNexus Agent UI (dark mode):

![NewsNexus Agent UI - Dark Mode](./screenshots/newsnexus-dark.png)

And in light mode:

![NewsNexus Agent UI - Light Mode](./screenshots/newsnexus-light.png)

## 🛠️ Installation & Usage
1. Clone the repo and add your API keys to `.env`
2. Start the backend:  
   `uvicorn main:app --reload`
3. Start the frontend (in `frontend/`):  
   `npm install && npm run dev`
4. (Optional) Run backend tests:  
   `python test_news_agent.py`

## 🧪 Utilities & Testing
- `utils.py`: Helper functions for time, formatting, etc.
- `test_news_agent.py`: Basic backend tests (unittest)

## 📚 Documentation
- `README.md`: Quickstart & structure
- `docs.md`: Extended usage, API, and customization

## 🙏 Acknowledgments
- NewsAPI, Serper, and Google Custom Search for their APIs
- FastAPI and React teams for their frameworks
- All open-source contributors

## 👩‍💻 Author
Nikitha Kunapareddy  
GitHub: [@NikithaKunapareddy](https://github.com/NikithaKunapareddy)

---
