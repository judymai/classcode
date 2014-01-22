from flask import Flask, render_template
import time

app=Flask(__name__)


@app.route("/delay/<t>")
def delay(t=0):
    print "starting a delay of: ",t
    time.sleep(int(t))
    return t
    

@app.route("/")
def index():
    return render_template("index.html")

if __name__=="__main__":
    app.debug=True
    app.run(host="0.0.0.0",port=8000)
