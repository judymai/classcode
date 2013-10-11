import sqlite3

c = sqlite3.connection("test.db")

q = "select * form teachers"

cursor = c.execute(q)

result = [x for x in cursor]

# or we could do:
#result=[]
#for line in cursor:
#    result.append(line)


# now result is a list where each line is a line returned by the query
