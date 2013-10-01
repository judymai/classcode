from flask import Flask
from flask import request
from flask import url_for,render_template
app = Flask(__name__)

@app.route("/")
def home():
    return "<h1>Home</h1>"

@app.route("/about")
def about():
    return "<h1>About</h1>"

@app.route("/form",methods=["POST","GET"])
def form():
    if request.method=="GET":
        return render_template("form.html")
    else:
        d={'name':request.form['username'],
           'rating':request.form['rating']}
        button=request.form['button']
        if button=="Submit":
            return render_template("form-results.html",d=d)
        else:
            return render_template("form.html")
if __name__=="__main__":
    app.debug=True
    app.run(host="0.0.0.0",port=5000)
