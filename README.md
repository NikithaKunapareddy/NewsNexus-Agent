
# 📰 NewsNexus Agent

**by NikithaKunapareddy**

NewsNexus Agent is a Python-powered, full-stack news aggregation platform that unifies real-time news from multiple APIs into a single, beautiful interface. Built for speed, extensibility, and developer joy, it leverages FastAPI for the backend and a modern React frontend (with dark/light mode) for a seamless user experience.

---

## 🚀 Features
- 🔎 Query top news from NewsAPI, Serper, or Google Custom Search
- 🔑 Effortless API key management via `.env`
- 🎨 Modern, responsive UI (React + TypeScript with gradients, dark/light mode)
- 🐍 Python-centric: all backend logic, utilities, and tests in Python
- 🧩 Easily extensible for new sources or features

## ✨ What Makes NewsNexus Agent Extra Special?

- 🧠 Smart news aggregation: Combines results from multiple APIs for broader coverage and less bias
- 🏆 Trending & breaking news detection: Stay ahead with the most current stories
- 🗂️ Category-based and location-based search: Find news by topic or region
- 🌓 Seamless dark/light mode toggle: Comfortable reading day or night
- 📱 Fully mobile responsive: Works great on any device
- 🛡️ CORS enabled: Hassle-free frontend-backend integration
- 🧪 Built-in backend tests: Ensures reliability and easy maintenance
- 🛠️ Easy to extend: Add new news sources or features with minimal code changes
- 💡 Clean summaries: Get the gist of each story at a glance
- 🔗 Direct links: Go straight to the original news source
- 🧰 Utilities: Helper functions for formatting, time, and more
- 📝 Well-documented: Quickstart, usage, and customization guides included

---

## 🗝️ API Keys Setup
To use NewsNexus Agent, you need API keys for the news sources. Create a `.env` file in the root directory and add your keys:

```env
# Example .env file
NEWS_API_KEY=your_newsapi_key_here
SERPER_API_KEY=your_serper_key_here
GOOGLE_SEARCH_API_KEY=your_google_api_key_here
GOOGLE_CSE_ID=your_google_cse_id_here

---


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

## 🧪 Usage Examples

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

## 🖥️ Visual Output
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

<p align="center">
  <b>⚡ Stay ahead with the latest news, delivered swiftly and seamlessly. Enjoy effortless access and stay informed anytime! 🗞️📲✨/b>
</p>
