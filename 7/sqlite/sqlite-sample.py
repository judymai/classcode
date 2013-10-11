
import sqlite3

connection = sqlite3.connect('test.db')

#q = "select * from teachers"

q = """
select teachers.last,students.last from teachers,students where teachers.last="zamansky" and students.id<4000;
"""
cursor = connection.execute(q)

#results=[]
#for line in cursor:
#    results.append(line)
results = [line for line in cursor]

print results
# for line in cursor:
#     print line[0]

# print "Second time"
# for line in cursor:
#     print line
