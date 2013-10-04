from flask import Flask
from flask import session, url_for, redirect, render_template


app = Flask(__name__)
app.secret_key='my secret key'


@app.route("/")
def home():
    if 'username' in session:
        return "<h1> THe main page</h1>"
    else:
        return redirect(url_for('login'))

@app.route("/login")
def login():
    return "<h1> the login page</h1>"


@app.route("/reset")
def reset():
    session.pop('count',None)
    #return redirect("/count")
    return redirect(url_for('count'))

@app.route('/count')
def count():
    if 'count' in session:
        c = session['count']
    else:
        c=0
    c=c+1
    session['count']=c
    page="""
    <h1>The count is %d</h1>
    <a href="/count">Add One</a>
    <a href="/reset">Reset</a>
    """
    return page%(c)


if __name__=="__main__":
    app.debug=True
    app.run(host='0.0.0.0',port=5000)

    
