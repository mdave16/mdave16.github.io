---
title: Information Systems
tags:
  - Programming Tools
  - Information Systems
---

Consider the following framework for thinking about our work as software engineers. There is a product that you
maintain, and something is not working as the customer wants it to, either since it's a bug or a feature they want or
need. The first step is to use information at our disposal in order to learn about our product, so to make a decision of
the solution. The second step is to optimally implement that solution.

Given this framework, there are lots of books that tell you how to do the second step, for instance Clean Code or Design
Patterns. I'm more interested in the first step. Some examples of the first step:

- Should I add a rate limit on my application? Should I remove this feature, is it unused or being misused? ... which
  falls under the camp of "Should I add a feature?"
- Why does this feature show for this customer but not for this customer? Why does this customer get an NPE?... which
  fall under the camp of "Why is there a bug?"
- How is the payment mechanism working and can I use it to add my feature more easily? Is there an internal api that
  already does this job? aka "Can I add this feature cheaper?"

Now when we want to answer these questions, we actually have systems that can give us this information. By system, I
mean either a set of habits, so can be relied upon e.g. git commits or a programmatic system e.g. an API.

Some examples of such systems:

- Code itself
- Code Comments
- Work Tracking Tool(s) e.g. Jira/Trello/Github Issues
- Wiki e.g. Atlassian or github wiki
- Historian i.e. most tenured member of the team
- Git Commits (or message of whatever VCS you use)
- Pull Requests
- Source Code Host Search
- Slack/Email
- Metrics
- Cloud Provider API/UIs
- Direct DB queries
- Tools built for developers
- Q/A websites
- Official documentation
- Recorded meetings

Each system has a few facets, some of the important ones are:

- reliability, how likely is this information going to be correct? (assuming this is well maintained, the reliablity is directly tied to how well the system is maintained)
- referenciability, can this information lead me to other information, e.g. commits messages with ids to tracking software
- maintainability, what is the cost of maintaining this system?
- searchability, how easy is it to look up information from this system?
- flexibility, are there multiple conflicting ways of using this system? how easy is it to transition between them?
- accessibility, what group of people is this valuable/not valuable for?

Reliability is the main facet, I can't think of any scenario in which it is bad. Similarly having low/no maintainence is ideal. Similarly still, having good searchability in the tool is ideal. For these three, it's very clear what you want from them.

Something which references the reliable information is less valuable than the reliable information itself. Similar to history/journalism where a second hand testimony is more valuable than a third-hand testimony.
Each layer of reference, makes it less valuable.
Indeed sometimes having referenciability at all can make other systems less valuable.
Consider the relationship between code and code comments. For a while, people insisted comments added readability to the code, and the comments referenced the code, effectively sharing the information across two systems.
However by reducing the number of comments, and only using them when necessary, we force ourselves to write better code.
Referenciability is not always a good thing.
It can be argued to be good if the context is different, e.g. the context of a git commit (technical) might be different to that of the work tracker tool (arguably a product-oriented context), and in such a case the information stored is different and you want to be able to link these two.
It can definitely be good if it's to link programmatic systems together. Imagine trying to run the CI without a git commit/branch, being able to link the CI runs to git commit allows you to easily say which commit broke the build.

Maybe you/your team will place different emphasis on different facets, and so choose your systems differently.

If we review a few key examples from above, assuming that the system is well maintained:

- Code itself
  - Reliable: This is the most reliable information
  - Usually not so referenciable, I've very rarely seen code itself reference other tools.
  - There is no extra cost for maintaining this information system, since by maintaining the application itself, we are already changing the code.
  - Searchability: Usually very good since you know which application to search in. Once you have found results, parsing is also easy if the system is well maintained/written.
  - Flexibility: This is a very flexible system, since many people write code in different ways. It is not always easy for an engineer to transfer from one style to another, either due to paradigm changes or due to unknown design patterns being used.
  - accessibility: This can only be accessed by engineers, since it has many barriers for entry (literacy with whatever language/framework/paradigm(s) were used to write the application(s))
- Work Tracking Tool(s) e.g. Jira/Trello
  - reliability: This is reliable if you want to find what was initially planned. In a well maintained system, cards are updated to acomodate new requirements if found during the initial implementation.
  - referenciability: This is usually the most referenced as well as the tool which is doing the most referencing.
  - maintainability: A lot of manual cost to interact with cards
  - searchability: Depends on tool used, but generally not very useful. A full search would search over all titles/bodies and sometimes comments, and even then the internal name of a product may have changed. Usually a full search is not implemented and only searching over titles and bodies. Leaving comments, where useful information may be hiding. Once the API search is completed, we still have to search through the text and parse the information, which may not have been written great.
  - flexibility: Usage of this tool varies from team to team, but the variance is not so large. It is fairly easy to transition from one to another, and one can even make expectations. Of course, such expectations may make it harder to notice any variance, and make the tool less reliable.
  - accessibility: This can be accessed by all people, but perhaps only really useful for management
- Wiki e.g. Atlassian or github wiki
  - reliability: Can easily become outdated, or no longer necessary, even when well maintained.
  - referenciability: If not the work tracking tool, this will be the tool that is doing the most referencing.
  - maintainability: Very manual, very difficult.
  - searchability: Not only is searching a wiki hard, but searching through an article to try to decipher what it means is also hard. Technical writing is hard.
  - flexibility: I have never seen variation on how this tool is used. To transition to another team, the wiki will be the same with no variance.
  - accessibility, This is accessible to all people, perhaps information which is useful for mangement/business/product can be placed here.
- Git Commits (or message of whatever VCS you use)
  - reliability: As this is close to the code, it is generally also very reliable.
  - referenciability: Some api systems will reference commits. Depending on the team or individuals the commit may reference another system - usually the work tracing tool. (e.g. fixes #10 or \[TEAM-10\])
  - maintainability: This is something many people have written extensively about, generally it is not so difficult.
  - searchability: Text searching through git log is an option, as is searching via the source code host search. While you do end up with text which I've previously written as hard to parse, I've generally managed to parse a lot of information from these.
  - flexibility: Many different and conflicting ways on how to use this tool, both with messages but also with merge types (linear history rebase merge vs neat squash merge). This is something people hold very dear, I assume because they find the system useful when used in their style and not in another style. Given how dear it is, I think transitioning is difficult.
  - accessibility, this is only useful for people who are git literate, so engineers who are working closely with the application.

Usually when a system is not useful, it does not get maintained. It has a cost that is higher than what it gives back. If you go through the above exercise, both individually and as a team, maybe you can come up with some set of systems that you find useful as a team and agree about how to maintain them. One of the dangers is that there is a system that is being maintained, to nobodys benefit. Or being maintained in a way that derives little/no benefit. This way, we can effectively put in the least amount of work and get the best return. Ultimately maintaining these systems is also something that eats into doing what we love, coding. Perhaps as a team, you value things differently to me. I personally believe that a system should only be maintained by those who find it useful. Another question that flexibility leads to is how well can a new person orient thmselves to a new set of systems?

Picture this scenario: You work somewhere, and you are very used to the set of systems available to you. You change your
working team, either by moving teams or by moving companies. The new team organises things totally differently, and you
feel lost because you're in a different kitchen. One can assume the new team has a set of systems, and is not just
running around in the dark like magicians. You exclaim, "Hey team, you are not using one of the
systems I was reliant upon in my old team, and I feel out of place, can everyone start using my system?". Maybe you've
said these words, maybe you've heard them. Here's a more concrete example: "Hey, can everyone put jira ticket ids in
front of git commit messages and inside the git pull requests, I find it really useful and am annoyed that I'm the only
one doing it". By asking people, and annoying them into it like a cop, you feel angry for forcing them, and they feel angry for being
micromanaged. Maybe the information that you want to introduce is only seen as valuable by you, maybe they have another
system which you have not found yet which gathers that information?

Accessibility also plays a large role, since by placing information in a more accessible system, the search for that system has to index over more entries and effectively becomes slower at least, and worse in practice. By keeping barriers, the information can be more effective, since the audience is smaller (and grouped together by a common reason). It's another unclear one, since while the search and infromation density rises, it can be unfriendly to not have complete visibility. 

## As a data problem

Imagine having lots of different databases, each database has a cost of retrieving information based on various factors,
and there is a cost to lookup which tables are in which database. We are trying to minimise the total cost of retrieving
information from the system. With the added concept that some databases can be accessed only by some people.

Now the problem should be simpler to solve and think about, but before we do, I want to convince you that this is the
correct problem to solve.

Consider git commit logs, or code, or jira, or any other system mentioned above. Ultimately, this is a
datasource, that can be edited and read from. For this reason, I'm going to treat them like databases. Let's take code
as an example, to see what I mean by the costs.

The cost of looking up information from the code is how fast it takes a developer to find information they are after
within the code. If a team places high emphasis on readable code, it is to lower this cost, as much as possible. The
reason we use design patterns and not spaghetti code is purely to make the code as easy as it could be to read, and
lower the cost of looking up information from it.

Hopefully now, you are on board with treating this as a data problem. We have some statements which we know from common
sense and engineering practices.

- The fewer indicies in a datasource, the easier search is. Ultimately, we are iterating over all indicies and filtering
  out as much as possible. The less in each datasource the faster search is.
- Writing data to multiple data sources without a multiple-update system setup leads to inconsistencies of data, and
  then it becomes hard to know which data is correct.
- Having data relevant to a role being in the datasources that that role can access is good. (Think about replacing role
  with an application to see if this makes sense from an architecture standpoint)
- Not having irrelevant data not accessible by any role that finds it irrelevant
- Giving structure to the data makes it easier to search, but this also imposes some standard which may be hard to
  change (think of a select from a structured table vs finding something from a document store)

Despite knowing these and probably more rules about data management, we often forget when it comes to these information
systems. We often put all our information in an unstructured brain dump in at least one central system, but also write
the same information in other systems. For instance, perhaps after finishing a project, someone will write a summary in the readme
file, another brain dump in confluence and yet another in a recorded meeting.

If we try to link this back to the comment about referenciability, we can think of code and comments being two datasources. By having two tables which frequently need a join, we complicate the database schema unnecessarily. We can have data which often gets joined in the original table and have to perform fewer lookups as well as having a simpler and more maintainable schema. It also forces us to think more about the data we want to store, and by forcing only one table, we can think about the structure of the data more. 
