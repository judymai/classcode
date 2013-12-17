from flask import request,Flask,render_template,url_for
import time

app=Flask(__name__)

@app.route("/upcase")
def upcase():
    s = request.args.get('string','We got nuthin')
    return s.upper()


@app.route("/getSlow")
def getSlow():
    print "getSlow before the sleep"
    time.sleep(7);
    print "getSlow after the sleep"
    return "A Slow response"

@app.route("/getFast")
def getFast():
    print "getFast before the sleep"
    time.sleep(1);
    print "getFast after the sleep"
    return "A fast response"


@app.route("/")
def index():
    return render_template("index.html")

if __name__=="__main__":
    app.debug=True
    app.run(host='0.0.0.0',port=5000)
