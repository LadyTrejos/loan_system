from flask import Flask, request

app = Flask(__name__)


@app.route('/loan_decision', methods=['POST'])
def loan_decision():
    requested_amount = request.json["requestedAmount"]
    decision = "Declined"

    if (requested_amount < 50000):
        decision = "Approved"
    elif (requested_amount == 50000):
        decision = "Undecided"
        
    return {"decision": decision}

if __name__ == "__main__":
    app.run(debug=True)
