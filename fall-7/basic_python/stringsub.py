
s="""
One day, %(name)s was walking in the %(place)s.
%(name)s was very tired when he ran into a %(thing)s.
"""

d={'name':'Tommy',
   'place':'woods',
   'thing':'car'}


print s%(d)

