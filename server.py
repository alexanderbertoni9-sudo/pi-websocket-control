from flask import Flask, request

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    ip = request.headers.get('CF-Connecting-IP', request.remote_addr)
    print(f'BUTTON PRESSED! From IP: {ip}')
    return 'OK', 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)