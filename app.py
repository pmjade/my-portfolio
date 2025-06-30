from flask import Flask, send_file

app = Flask(__name__)

@app.route('/')
def home():
    return send_file('MyPortfolio.html')

import os

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
