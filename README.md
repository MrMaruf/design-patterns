# Design patterns
A simple and small scale project to understand how certain design patterns work
and what problems they solve. This is done via implementation of said patterns in 
TypeScript. 
## Why Typescript of all languages?
At my work we are using TypeScript, so learning design patterns in the language used at 
work was the only way I could get into learning design patterns in my "Personal 
Development" time. 
## Which patterns?
### Visitor pattern
Although I personally don't think Visitor should ever be implemented in TypeScript or 
any language not supporting overloading methods, but still it's good to implement it just 
to see what it does and how.
### Iterator pattern
This is a very simple pattern, but it's good to see how it works. I would personally 
prefer to do it in more low level language or with more complex data structure. However,
I got the gist of it with the implementation done here.
### Chain of responsibility
Nice and slightly complex pattern with various application. I also learned in the 
process that there are two major designs under it. 
One is traditional way to implement the pattern. A chain where only one link is
handling the data, if it can. If it can't, data is passed to the next link in chain.
E.g. Support ticket system, you go through the chain of support handlers from billing to
general inquiry, until one of the handlers can help you out with the issue.


One is a bit more modern take on the idea of a chain. From the starting link and until 
the end of the chain, every link has to handle data in a certain way and then trigger 
next handler in chain. 
E.g. Authorization system for API requests - has a chain of handlers: 
- IP filter
- data validation
- cache register
- authentication
- authorization
All handlers have to parse request, before successfully concluding the request. And if 
one link fails, entire chain fails.

To clarify, it's not just two different ways to reach same goals. It's two entirely 
different implementations with different end goals in mind, that follow similar idea of 
chained handlers.
