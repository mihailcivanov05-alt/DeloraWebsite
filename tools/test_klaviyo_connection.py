import os
import urllib.request
import json
from dotenv import load_dotenv

def test_klaviyo_connection():
    load_dotenv()
    
    private_key = os.getenv("KLAVIYO_PRIVATE_API_KEY")
    
    if not private_key:
        print("❌ Missing Klaviyo private API key. Please check your .env file.")
        return False
        
    url = "https://a.klaviyo.com/api/profiles/"
    
    headers = {
        "Authorization": f"Klaviyo-API-Key {private_key}",
        "accept": "application/json",
        "revision": "2024-02-15"
    }
    
    req = urllib.request.Request(url, headers=headers, method="GET")
    
    try:
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                print("✅ Klaviyo connection successful!")
                return True
            else:
                print(f"⚠️ Connected to Klaviyo, but received status code: {response.status}")
                return False
    except Exception as e:
        print(f"❌ Failed to connect to Klaviyo: {e}")
        return False

if __name__ == "__main__":
    test_klaviyo_connection()
