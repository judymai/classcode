#!/usr/bin/python

s = "Hello world"
s2 = 'hello world'

s3 = """
This is a multiline
formatted string
which you
do by using
triple quotes
"""

# Tom owes Sue 20 dollars so she hired a hit man

p1 = "Tom"
p2 = "Sue"
amt = 20000.55555

result = p1 + " owes "+p2+" the amount of "+str(amt)+" dollars"
print result

template="%s owes %s the amount of %6.2f dollars"

result = template%(p1,p2,amt)
print "-------------------------"
print result


for i in range(5,10):
    print "<li>%i</li>"%(i)


