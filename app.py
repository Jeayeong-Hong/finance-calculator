from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # CORS 활성화

@app.route('/')
def home():
    return jsonify({"message": "Welcome to Finance Calculator API"})

@app.route('/api/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    amount = float(data['amount'])
    rate = float(data['rate'])
    years = float(data['years'])
    result = amount * (1 + (rate / 100) * years)
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)
