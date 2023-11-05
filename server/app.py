from flask import Flask, request, jsonify
from flask_cors import CORS
from drivedata import tripData
from gpt import chat_with_gpt



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

@app.route('/api/chat-with-gpt', methods=['POST'])
def chat_gpt():
    data = request.json
    user_input = data.get('user_input')  # Get the user's input from the request

    response = chat_with_gpt(user_input)  # Call your chat_with_gpt function
    
    return jsonify({"chat_response": response})

if __name__ == '__main__':
    app.run(debug=True)