
# 📰 NewsNexus Agent

**by NikithaKunapareddy**

NewsNexus Agent is a Python-powered, full-stack news aggregation platform that unifies real-time news from multiple APIs into a single, beautiful interface. Built for speed, extensibility, and developer joy, it leverages FastAPI for the backend and a modern React frontend (with dark/light mode) for a seamless user experience.

---

## 🚀 Features
- 📰 Real-time news aggregation from NewsAPI, Serper, or Google Custom Search
- 🔥 Trending topics and breaking news detection
- 🏷️ Category-based news search (politics, sports, tech, business, etc.)
- 🌐 Multi-source comparison for unbiased news
- 🕒 Fast, near real-time updates
- 📝 Clean summaries and direct links to sources
- 🔎 Powerful search for trending topics
- 🔑 Effortless API key management via `.env`
- 🎨 Modern, responsive UI (React + TypeScript with gradients, dark/light mode)
- 🌓 Dark/light mode toggle
- 📱 Mobile-friendly responsive design
- 🐍 Python-centric: all backend logic, utilities, and tests in Python
- 🧩 Easily extensible for new sources or features
- 🛡️ CORS enabled for easy frontend-backend integration
- 🧪 Built-in backend tests for reliability

## 🗝️ API Keys Setup
To use NewsNexus Agent, you need API keys for the news sources. Create a `.env` file in the root directory and add your keys:

```env
# Example .env file
NEWS_API_KEY=your_newsapi_key_here
SERPER_API_KEY=your_serper_key_here
GOOGLE_SEARCH_API_KEY=your_google_api_key_here
GOOGLE_CSE_ID=your_google_cse_id_here

---

## � Examples

Here are some example queries you can try with NewsNexus Agent:

### Example 1: Get latest India news
```
Query: today india news
Source: NewsAPI
```
**Sample Output:**
```
[
  {
    "title": "India, UK sign historic free trade deal",
    "url": "https://www.thehindubusinessline.com/economy/india-uk-free-trade-agreement-highlights-pm-modi-keir-starmer-fta-deal-news/article69851058.ece",
    "summary": "India UK Free Trade Agreement Deal Highlights: The India-UK Comprehensive Economic and Trade Agreement is expected to double bilateral trade by 2030 to $112 billion, boost services exports, liberalise government procurement and facilitate mobility."
  },
  ...
]
```

### Example 2: Search for technology news
```
Query: technology news
Source: Serper
```

### Example 3: Ask about weather in Delhi (news-based)
```
Query: weather news delhi
Source: Google
```

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


## 🖥️ Visual Output
Below is a sample screenshot of the NewsNexus Agent UI (dark mode):

![NewsNexus Agent UI - Dark Mode](./screenshots/newsnexus-dark.png)

And in light mode:

![NewsNexus Agent UI - Light Mode](./screenshots/newsnexus-light.png)


## ⚙️ Installation & Usage
1. 📥 Clone the repo and add your API keys to `.env`
2. 🚀 Start the backend:
   ```bash
   uvicorn main:app --reload
   ```
3. 🖥️ Start the frontend (in `frontend/`):
   ```bash
   npm install && npm run dev
   ```
4. 🧪 (Optional) Run backend tests:
   ```bash
   python test_news_agent.py
   ```


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

<p align="center">
  <b>⚡ Stay ahead with the latest news, delivered swiftly and seamlessly. Enjoy effortless access and stay informed anytime! 🗞️📲✨/b>
</p>
