import os
from dotenv import load_dotenv

def verify_env():
    required_vars = [
        "SHOPIFY_STORE_DOMAIN",
        "SHOPIFY_STOREFRONT_ACCESS_TOKEN",
        "KLAVIYO_PUBLIC_API_KEY",
        "KLAVIYO_PRIVATE_API_KEY"
    ]
    
    load_dotenv()
    
    missing = []
    for var in required_vars:
        if not os.getenv(var):
            missing.append(var)
            
    if missing:
        print(f"❌ Missing environment variables: {', '.join(missing)}")
        return False
    
    print("✅ All required environment variables are present.")
    return True

if __name__ == "__main__":
    verify_env()
