from flask import Flask,render_template,redirect,url_for,request
import json

import urllib,urllib2
app=Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")



@app.route("/storeToken",methods=["GET","POST"])
def storeToken():
    #code=request.form['code']
    #token=request.form['access_token']
    token=request.form['token']
    url="https://www.googleapis.com/plus/v1/people/me"
    data=urllib.urlencode({'access_token':token,
                           'fields':'emails,name'})
    req = urllib2.Request(url+"?"+data)
    response = urllib2.urlopen(req)
    result = response.read()
    r= json.loads(result)
    print r
    # MAKE SURE TO ADD TO LOGGED IN DATABASE ON SERVER (session)
    return json.dumps(r)


if __name__=="__main__":
    app.debug=True
    app.run(host="0.0.0.0",port=8000)

