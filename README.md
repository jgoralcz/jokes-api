# Jokes REST API
221,000+ jokes stored into a postgres database taken from https://github.com/taivop/joke-dataset 
You can use the live instance with a rate limit of 60req/s at: `beta-jokes.bongo.best`

---
### How to Use:
There are a few ways to get your joke:
1) By id 
    - 1-495498 (there are "holes" in the database)

**Example**
```$xslt
GET /123456 HTTP/1.1
```
**Example Response**
```$xslt
[
    {
        "title": "What did the cool, beautiful, and popular blonde girl get dressed for?",
        "body": "The shalloween party.",
        "score": 0,
        "category": null,
        "reddit_id": "51xumn",
        "id": 12344,
        "r": 22772
    }
]
```

2) By random and with filters
    - search OR category    

**Example**
```$xslt
GET /?search=priest HTTP/1.1
```

**Example Response**
```$xslst
[
    {
        "title": "A masked priest just threw some holy water at me...",
        "body": "... I think it was a blessing in disguise.",
        "score": 146,
        "category": null,
        "reddit_id": "4lz5xc",
        "id": 43281,
        "r": 53056
    },
    .
    .
    .
]
```

**Example**
```$xslt
GET /?category=animal HTTP/1.1
```

**Example Response**
```$xslt
[
    {
        "title": "Yo Mama",
        "body": "yo mama so hairy and fat, that when she went to a museum they yelled \"the mammoth's alive!\"",
        "score": null,
        "category": "animal",
        "reddit_id": "16069",
        "id": 1095,
        "r": 11780
    },
    .
    .
    .
```

**Example**
```$xslt
GET / HTTP/1.1
```

**Example Response**
```$xslt
[
    {
        "title": "If you ever lost in the woods",
        "body": "don't panic! Start talking about politics and someone will show up to argue with you. Just follow them back when they leave.",
        "score": 84,
        "category": null,
        "reddit_id": "bk9y1i",
        "id": 432529,
        "r": 2860
    },
    .
    .
    .
]
```

list of categories:
```
    animal
    animals
    at work
    aviation
    bar
    bar jokes
    blind jokes
    blond
    blonde
    Blonde
    blonde jokes
    business
    children
    college
    computers
    crazy jokes
    deep thoughts
    english
    ethnic jokes
    Fake
    family, parents
    farmers
    food jokes
    gross
    heaven and hell
    holidays
    idiots
    insults
    knock-knock
    Knock-Knock Joke
    lawyer
    lawyers
    lightbulb
    light bulbs
    Long
    love & romance
    marriage
    medical
    men
    men / women
    military
    miscellaneous
    money
    music
    news / politics
    office jokes
    old age
    one liners
    other / misc
    police jokes
    political
    Politics
    puns
    Put a lightbulb on
    Racial
    redneck
    Religion
    religious
    school
    science
    sex
    Spoilers
    sports
    state jokes
    tech
    Walks into a bar
    women
    yo mama
    yo momma
```
