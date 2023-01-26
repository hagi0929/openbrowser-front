import requests
import random
import json
from PIL import Image
import numpy as np
from openbrowser import Client
import pyodide
import asyncio

# Initialize Client
async def main():
    client = Client("http://localhost:3000")
    res = await pyodide.http.pyfetch("http://localhost:3000/rpc")
    return res

print(main())
