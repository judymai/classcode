import math
import random
import cProfile

def pyth_triple1(n):
    result=[]
    for a in range(1,n):
        for b in range(1,n):
            for c in range(1,n):
                if a*a + b*b == c*c:
                    result.append( (a,b,c))
    return result

def pyth_triple2(n):
    return [ (a,b,c)
        for a in range(1,n)
        for b in range(1,n)
        for c in range(1,n)
             if a*a+b*b==c*c]

def qsort(l):
    if len(l)<=1:
        return l
    pivot = random.choice(l)
    uh = [a for a in l if a > pivot]
    lh =  [a for a in l if a < pivot]
    return qsort(lh) + [pivot] + qsort(uh)

def make_random_list(n):
    return [random.randrange(100) for x in range(n)]
def sqlist1(l):
    result = []
    for item in l:
        result.append(item*item)
    return result

def copylist1(l):
    result=[]
    for item in l:
        result.append(item)
    return result

def copylist2(l):
    result = [ item for item in l]
    return result

l1=[1,2,3,4,5]
l2=[100,200,300,400,500]

def zipsum(l1,l2):
    #result = []
    #for i in range(len(l1)):
     #   result.append(l1[i]+l2[i])
    #return result
    return [ x + y for (x,y) in zip(l1,l2)]

mtns = [10,15,20,5,5,40,5,34,67,22,34,50,65]

def mountain1(mtns):
    return abs(min(mtns)-max(mtns)) > 15

def mountains2(L):
    peaks=0
    for i in range(len(L)-1):
        dif = math.abs(L[i]-L[i]+1)
        if dif>=30:
            peaks=peaks+1
    return peaks >= 3

def mountain3(mtns):
    diffs = [ abs(x-y) for (x,y) in zip(mtns,mtns[1:])]
    peaks = [x for x in diffs if x >= 30]
    return len(peaks)>=3


def add_word(corpus,key,value):
    #if corpus.has_key(value):
    #   corpus[key].append(value)
    #else:
    #   corpus[key]=[value]
    corpus.setdefault(key,[])
    corpus[key].append(value)

def printargs(*args):
    print args
    
def build_corpus(fn,n):
    wordstring = open(fn).read().lower()
    letters="abcdefghijklmnopqrstuvwxyx "
    wordstring = [ x for x in wordstring if x in letters]
    wordstring = "".join(wordstring)
    wordlist = wordstring.split()
    #print wordlist
    #wordlist = ["one",'two','three','four','five','six','seven','eight','nine','ten']
    L = [ wordlist[x:] for x in range(n)]
    tuples = zip(*L)
    #tuples = zip(wordlist,wordlist[1:],wordlist[2:])
    #print tuples[:10]
    corpus={}
    #    [ add_word(corpus,(a,b),c) for (a,b,c) in tuples]
    #for (a,b,c) in tuples:
    #   add_word(corpus,(a,b),c)
    for t in tuples:
       add_word(corpus,t[:-1],t[-1])
    #print corpus
    return corpus

corpus = build_corpus('corpus.txt',10)
#print corpus
key = random.choice(corpus.keys())
text=" ".join(key)
for i in range(200):
    next = random.choice(corpus[key])
    text = text + " " + next
    key = list(key)
    key = key[1:]
    key.append(next)
    key = tuple(key)

print text
