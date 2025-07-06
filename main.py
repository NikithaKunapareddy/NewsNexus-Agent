
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Union
from news_agent import factual_response
import time
import uvicorn
import os


app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define a Pydantic model for the incoming request body
class QuestionRequest(BaseModel):
    message: Union[str, None] = None  # Question from the user
    source: Union[str, None] = None   # Optional source field

# Define the endpoint for Agent functionality
@app.post("/news_weather_agent")
async def news_weather_agent(request: QuestionRequest):
    """
    Endpoint to handle the news and weather agent functionality.
    """
    start = time.time()
    # Use 'source' if provided, default to 'newsapi'
    source = getattr(request, 'source', 'newsapi')
    response = factual_response(
        user_message=request.message,
        source=source
    )
    end = time.time()
    print(f"Time taken for factual_response: {end - start} seconds")
    return {
        "response": response
    }