from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/random_string')
def random_string():
    return jsonify({'string': get_random_string()})
