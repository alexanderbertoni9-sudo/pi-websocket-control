from flask import Flask, request
import os

os.environ['PYTHONUNBUFFERED'] = '1'

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    print("Button was pressed!")
    return 'OK', 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)