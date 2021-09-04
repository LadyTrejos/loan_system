from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/loan_decision', methods=['POST'])
def loan_decision():
    requested_amount = float(request.json["requestedAmount"])
    decision = "Declined"

    if (requested_amount < 50000):
        decision = "Approved"
    elif (requested_amount == 50000):
        decision = "Undecided"
        
    return {"decision": decision}

if __name__ == "__main__":
    app.run(debug=True)
