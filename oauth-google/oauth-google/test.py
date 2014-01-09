import urllib,urllib2
url="https://accounts.google.com/o/oauth2/auth"


values = {'response_type':'code',
          'client_id':'1079207299172-mip8h70opk227f35q8uj3k8md80pjt3f.apps.googleusercontent.com',
          'scope':'profile',
          'static':'somethingstatic',
          'state':'sadsadsadsad',
          'redirect_uri':'http://server1.zamansky.net:8000/oauth2callback',
          }

data = urllib.urlencode(values)
#req = urllib2.Request(url,data)
req = urllib2.Request(url+"?"+data)
response = urllib2.urlopen(req)
print response.read()
