from flask import Flask, redirect,request, render_template, url_for
import time
import urllib2, json

app=Flask(__name__)

@app.route("/quote")
def quote():
    url = urllib2.urlopen("http://www.iheartquotes.com/api/v1/random?format=json")
    d = url.read();
    return d

@app.route("/")
def index():
    return render_template("index.html")


if __name__=="__main__":
    app.debug=True
    app.run(host="0.0.0.0",port=5000)

