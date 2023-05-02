from flask import *

app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def main_page():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(port=8000, debug=True)


