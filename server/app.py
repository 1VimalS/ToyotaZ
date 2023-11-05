from flask import Flask, request, jsonify
from drivedata import tripData
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/trip-data', methods=['POST'])
def get_trip_data():
    # try:
        # Get data from the request, assuming it's in JSON format
        request_data = request.get_json()

        # Call your tripData function with the data from the request
        result = tripData(**request_data)

        # Return the result as JSON
        return jsonify(result)
    # except Exception as e:
        # return jsonify({'error': str(e)}), 500
if __name__ == '__main__':
    app.run(debug=True)