from flask import Flask
from flask import request
from flask import render_template

app = Flask(__name__)


@app.route("/")
def home():
    return "<h1>Home</h1>"

@app.route("/about")
def about():
    return "<h1>ABout</h1>"

@app.route("/form",methods=["GET","POST"])
def form():
    if request.method=="GET":
        return render_template("form.html")
    else:
        button = request.form['button']
        if button=="Submit":
            name = request.form['username']
            rating = request.form['rating']
            f=open("data","a")
            line="%s:%s\n"%(name,rating)
            f.write(line)
            f.close()
            return render_template("form.html")
        else:
            return render_template("form.html")
            
if __name__=="__main__":
    app.debug=True
    app.run(host="0.0.0.0",port=5000)
    
