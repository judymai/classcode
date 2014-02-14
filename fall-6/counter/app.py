from flask import Flask
from flask import request, render_template
import shelve

app=Flask(__name__)

@app.route("/session",methods=["GET","POST"])
def ression():
    if request.method == "GET":
        return render_template("login.html")
    else:
        idu = request.form['id']
        id = idu.encode('ascii','ignore')
        # get the count from our database
        s = shelve.open("sessions")
        
        if s.has_key(id):
            number = int(s[id])+1
            s["%s"%(id)]=number
        else:
            s[id]=0
            number = 0
        s.close()
        return render_template("session_counter.html",id=id,number=number)
    

@app.route("/",methods=["GET","POST"])
def home():
    if request.method == "GET":
        return render_template("index.html",number=0)
    else:
        number = int(request.form['number'])
        number = number + 1
        return render_template("index.html",number=number)
        

if __name__=="__main__":
    app.debug=True
    app.run(host="0.0.0.0",port=5000)
    
