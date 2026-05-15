import os
import urllib.request
import json
from dotenv import load_dotenv

def test_shopify_connection():
    load_dotenv()
    
    domain = os.getenv("SHOPIFY_STORE_DOMAIN")
    token = os.getenv("SHOPIFY_STOREFRONT_ACCESS_TOKEN")
    
    if not domain or not token:
        print("❌ Missing Shopify credentials. Please check your .env file.")
        return False
        
    url = f"https://{domain}/api/2024-04/graphql.json"
    
    query = """
    {
      shop {
        name
      }
    }
    """
    
    data = json.dumps({"query": query}).encode("utf-8")
    
    headers = {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token
    }
    
    req = urllib.request.Request(url, data=data, headers=headers, method="POST")
    
    try:
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode())
            if "data" in result and "shop" in result["data"]:
                shop_name = result["data"]["shop"]["name"]
                print(f"✅ Shopify connection successful! Connected to shop: {shop_name}")
                return True
            else:
                print(f"⚠️ Connected to Shopify, but received unexpected response: {result}")
                return False
    except Exception as e:
        print(f"❌ Failed to connect to Shopify: {e}")
        return False

if __name__ == "__main__":
    test_shopify_connection()
