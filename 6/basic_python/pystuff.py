#!/usr/bin/python



s="Hello world"
s2 = 'hello world'

s3 = """
this is a multiline
string using
the triple
quotes
"""

num=20.5
name="Tom"

# we want to make the string
# hello tom you owe me 20 dollars

#s = "hello "+name+" you owe me "+str(num)+" dollars"
#print s

template="hello %10s you owe me %6.2f dollars"

result = template%(name,num)
print result


for i in range(10,20):
    print "<li>%i</li>"%(i)
    
