# trivia REST API
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
        "question": "In the 2011 TV anime series, &quot;THE iDOLM@STER&quot;, what was the name of Iori&#039;s stuffed toy bunny?",
        "category": "Entertainment: Japanese Anime & Manga",
        "type": "multiple",
        "difficulty": "medium",
        "correct_answer": "Charles",
        "incorrect_answers": [
            "Bubsy",
            "Kero",
            "Usagi"
        ],
        "id": 2
    }
]
```
2) By random and with filters
    - search OR category
 
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
