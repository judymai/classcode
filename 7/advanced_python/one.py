import random
import math
import cProfile

def pyth_triple1(n):
    result=[]
    for a in range(1,n):
        for b in range(1,n):
            for c in range(1,n):
                if a*a+b*b==c*c:
                    result.append( (a,b,c) )
    return result

def pyth_triple2(n):
    return [ (a,b,c)
             for a in range(1,n)
             for b in range(1,n)
             for c in range(1,n)
             if a*a+b*b==c*c]

def qsort(L):
    if len(L)<=1:
        return L
    pivot = random.choice(L)
    lh = [x for x in L if x < pivot]
    uh = [x for x in L if x > pivot]
    return qsort(lh) + [x for x in L if x == pivot] + qsort(uh)

def random_list(n):
    return [ random.randrange(100) for x in range(n)]

def add_lists(L1,L2):
    result = []
    for i in range(len(L1)):
        result.append(L1[i]+L2[i])
    return result
def combine_lists(L1,L2):
    result = []
    for i in range(len(L1)):
        result.append( (L1[i],L2[i]))
    return result

L1=[1,2,3,4]
L2=[10,20,30,40]

m=[5,30,45,20,22,17,50,24,30,42,10]
def m1(M):
    return abs(min (M)-max (M)) >= 15

def m2(m):
    diffs=0
    for i in range(len(m)-1):
        if abs(m [i]-m [i+1]) > 30:
            diffs = diffs+1
    return diffs>=3

def m3(m):
    diffs =  [ abs(x-y) for (x,y) in  zip( m,m[1:])]
    bigdiffs = [x for x in diffs if x >= 30]
    return len(bigdiffs)>=3


def add_word(corpus,key,value):
    # if corpus.has_key(key):
    #     corpus[key].append(value)
    # else:
    #     corpus[key] = [value]

    corpus.setdefault(key,[])
    corpus[key].append(value)
    

def printargs(*args):
    print args
    
def build_corpus(fn,n):
    wordstring = open(fn).read().lower()
    letters = "abcdefghijklmnopqrstuvwxyz "
    wordstring = [x for x in wordstring if x in letters]
    wordstring = "".join(wordstring)
    wordlist = wordstring.split()

    #tuples = zip(wordlist,wordlist[1:],wordlist[2:])
    #wordlist = ['one','two','three','four','five','six','seven','eight','nine','ten']
    L = [ wordlist[x:] for x in range(n)]
    tuples = zip(*L)
    #tuples = zip(wordlist,wordlist[1:],wordlist[2:])
    corpus={}
    #[ add_word(corpus, t[:-1],t[-1])  for t in tuples ]
    for t in tuples:
       add_word(corpus,t[:-1],t[-1])
    return corpus
    


corpus = build_corpus('corpus.txt',4)
#print corpus

key = random.choice(corpus.keys())
text = " ".join(key)
for i in range(200):
    next = random.choice(corpus[key])
    text = text + " "+next
    key = list(key)
    key = key[1:]
    key.append(next)
    key=tuple(key)

print text
