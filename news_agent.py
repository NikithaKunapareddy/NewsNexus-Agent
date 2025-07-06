import os
import re
import requests
from dotenv import load_dotenv
from pathlib import Path

dotenv_path = Path('.env')
load_dotenv(dotenv_path=dotenv_path)

def serper_search(query, api_key=None):
    if api_key is None:
        api_key = os.environ.get("SERPER_API_KEY")
    url = "https://google.serper.dev/news"
    headers = {
        "X-API-KEY": api_key,
        "Content-Type": "application/json"
    }
    data = {"q": query}
    response = requests.post(url, headers=headers, json=data, timeout=5)
    response.raise_for_status()
    results = response.json().get("news", [])
    return results

def newsapi_search(query, api_key=os.environ.get("NEWS_API_KEY")):
    url = "https://newsapi.org/v2/everything"
    params = {
        "q": query,
        "apiKey": api_key,
        "pageSize": 3,
        "sortBy": "publishedAt",
        "language": "en"
    }
    response = requests.get(url, params=params, timeout=5)
    response.raise_for_status()
    data = response.json()
    return data.get("articles", [])

def google_search(query, api_key=os.environ.get("GOOGLE_SEARCH_API_KEY"), cse_id=os.environ.get("GOOGLE_CSE_ID")):
    url = "https://www.googleapis.com/customsearch/v1"
    params = {
        "q": query,
        "key": api_key,
        "cx": cse_id,
        "num": 3
    }
    response = requests.get(url, params=params, timeout=5)
    response.raise_for_status()
    data = response.json()
    return data.get("items", [])

def factual_response(user_message: str, source: str = "newsapi", language: str = "en") -> str:
    """
    Returns a direct, factual answer to the user's news question using NewsAPI, Serper, or Google Custom Search (no persona, no feelings, no bot context).
    Set source to 'newsapi', 'serper', or 'google'.
    """
    if source == "serper":
        results = serper_search(user_message)
        if not results:
            return "No news found."
        output = []
        for item in results[:3]:
            title = item.get("title", "")
            link = item.get("link", "")
            content = item.get("snippet", "")
            output.append(f"{title}\n{link}\n{content}\n{'-'*40}")
        return "\n".join(output)
    elif source == "google":
        results = google_search(user_message)
        if not results:
            return "No news found."
        output = []
        for item in results:
            title = item.get("title", "")
            link = item.get("link", "")
            content = item.get("snippet", "")
            output.append(f"{title}\n{link}\n{content}\n{'-'*40}")
        return "\n".join(output)
    else:
        results = newsapi_search(user_message)
        if not results:
            return "No news found."
        output = []
        for item in results:
            title = item.get("title", "")
            link = item.get("url", "")
            content = item.get("description", "")
            output.append(f"{title}\n{link}\n{content}\n{'-'*40}")
        return "\n".join(output)

if __name__ == "__main__":
    print("Testing NewsAPI...")
    try:
        print(factual_response("today india news", source="newsapi"))
    except Exception as e:
        print("NewsAPI error:", e)
    print("\nTesting Serper...")
    try:
        print(factual_response("today india news", source="serper"))
    except Exception as e:
        print("Serper error:", e)
    print("\nTesting Google Custom Search...")
    try:
        print(factual_response("today india news", source="google"))
    except Exception as e:
        print("Google error:", e)
