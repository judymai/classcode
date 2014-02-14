from flask import Flask
from flask import render_template

import random


app = Flask(__name__)


@app.route("/demo")
def demo():
    d={'name': "Clyde Thluffy Sinclair",
       'age' : 4,
       'rootsfor': ['NY Giants',
                    'Michigan Wolverines',
                    'Anyone plauing the Cowboys or Eagles',
                    'Not the Skankees']
       }
    return render_template("demo.html",d=d)


@app.route("/t1")
@app.route("/t1/<n>")
def t1(n=None):
    luckynum=random.randrange(0,100)
    return render_template("index.html",name=n,
                           num=luckynum)

@app.route("/lucky")
def lucky():
    luckynum = random.randrange(0,100)
    template="""
    <h1>This is the lucky number page</h1>
    Your lucky number is %i!
    """
    page = template%(luckynum)
    
    return page

@app.route("/who")
@app.route("/who/<name>")
def who(name="thedefaultname"):
    page = """
    this is a triple quoted string
    that spans multiple lines
    """
    page=page+"<br>"+name
    return page

@app.route("/about")
def about():
    return "<h1>This is the about page</h1>"

if __name__=="__main__":
    app.debug=True 
    # 0.0.0.0 means listen on all interfaces
    app.run(host="0.0.0.0",port=5005)

    
