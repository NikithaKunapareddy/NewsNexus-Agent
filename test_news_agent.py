"""
Basic tests for the news_agent module.
"""
import unittest
from news_agent import factual_response

class TestNewsAgent(unittest.TestCase):
    def test_newsapi(self):
        resp = factual_response("India news", source="newsapi")
        self.assertIn("http", resp)

    def test_serper(self):
        resp = factual_response("India news", source="serper")
        self.assertIn("http", resp)

if __name__ == "__main__":
    unittest.main()
