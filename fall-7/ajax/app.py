from flask import Flask, redirect,request, render_template, url_for
import time

app=Flask(__name__)


@app.route("/upcase")
def upcase():
    s = request.args.get('string','We got nothin')
    return s.upper()

@app.route("/getFast")
def getFast():
    print "Before the sleep in getFast"
    time.sleep(1)
    print "After the sleep in getFast"
    return "Data from getFast"


@app.route("/getSlow")
def getSlow():
    print "Before the sleep in getSlow"
    time.sleep(7)
    print "After the sleep in getSlow"
    return "Data from getSlow"




@app.route("/")
def index():
    return render_template("index.html")


if __name__=="__main__":
    app.debug=True
    app.run(host="0.0.0.0",port=5000)

