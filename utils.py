"""
Utility functions for the news agent project.
"""

import datetime

def get_current_time():
    """Return the current time as a string."""
    return datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
