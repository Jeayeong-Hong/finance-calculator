from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/calculator', methods=['POST'])
def calculate():
    data = request.get_json()
    amount = data['amount']
    rate = data['rate']
    years = data['years']

    result = amount * (1 + rate * years)
    return jsonify({'result': result})
if __name__ == '__main__':
    app.run(debug=True)