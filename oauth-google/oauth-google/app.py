from flask import Flask, request,render_template
import json
import urllib,urllib2

app=Flask(__name__)


url="https://accounts.google.com/o/oauth2/auth"

values = {'response_type':'code',
          'client_id':'1079207299172-mip8h70opk227f35q8uj3k8md80pjt3f.apps.googleusercontent.com',
          'scope':'profile email',
          'static':'somethingstatic',
          'redirect_uri':'http://server1.zamansky.net:8000/oauth2callback'
          }
#req = urllib2.Request(url,data)
#data = urllib.urlencode(values)
#req = urllib2.Request(url+"?"+data)
#response = urllib2.urlopen(req)

@app.route("/")
def index():
    return render_template("/index.html")
@app.route("/glogin")
def glogin():
    data = urllib.urlencode(values)
    req = urllib2.Request(url+"?"+data)
    response = urllib2.urlopen(req)
    return response.read()

    

@app.route("/oauth2callback")
def back():
    if request.args.has_key('error'):
        return "ERROR"
    code = request.args.get('code')

    values={'code':code,
            'client_id':'1079207299172-mip8h70opk227f35q8uj3k8md80pjt3f.apps.googleusercontent.com',
            'client_secret':'7-LAQae58JlhOc2JE4jtG65P',
            'grant_type':'authorization_code',
            'redirect_uri':'http://server1.zamansky.net:8000/oauth2callback'
            }
    
    data=urllib.urlencode(values)
    url="https://accounts.google.com/o/oauth2/token"
    req = urllib2.Request(url,data)
    response = urllib2.urlopen(req)
    rawresult = response.read()
    #print "---------------------------------------------------"
    #print rawresult
    #print "---------------------------------------------------"
    result=json.loads(rawresult)
    url="https://www.googleapis.com/plus/v1/people/me"
    data=urllib.urlencode({'access_token':result['access_token'],
                           })
    req = urllib2.Request(url+"?"+data)
    response = urllib2.urlopen(req)
    result = response.read()
    print result
    return "BACK"+result

if __name__=="__main__":
    app.debug=True
    app.run(host='0.0.0.0',port=8000)






