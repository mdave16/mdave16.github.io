---
title: Information Systems
tags:
  - Programming Tools
  - Information Systems
---

I have had this idea, but have been unable to come up for the vocabulary for it.

Consider the following framework for thinking about our work as software engineers. There is a product that you
maintain, and something is not working as the customer wants it to, either since it's a bug or a feature they want or
need. The first step is to use information at our disposal in order to learn about our product, so to make a decision of
the solution. The second step is to optimally implement that solution.

Given this framework, there are lots of books that tell you how to do the second step, for instance Clean Code or Design
Patterns. I'm more interested in the first step. Some examples of the first step:

- Should I add a rate limit on my application? Should I remove this feature, is it unused or being misused? ... which
  falls under the camp of Should I add a feature?
- Why does this feature show for this customer but not for this customer? Why does this customer get an NPE?... which
  fall under the camp of Why is there a bug?
- How is the payment mechanism working and can I use it to add my feature more easily? Is there an internal api that
  already does this job? aka Can I add this feature cheaper?

Now when we want to answer these questions, we actually have systems that can give us this information. By system, I
mean either a set of habits, so can be relied upon e.g. git commits or a programmatic system e.g. an API.

Some examples of such systems:

- The code itself; you can always read the code, whether you can understand it is an unrelated question. A benefit is
  that the code never lies, this is what is in production (after checking out the correct version).
- A work tracking tool, e.g. Jira, maybe you can search through the history and why find a certain change was made or
  why a decision was made. This is just an organised wiki, since it's all edited by humans and can be updated by anyone
  at anytime.
- A wiki, a disorganised work tracking tool, with the added disadvantage that it is easy to not keep up to date. A pro
  is that if people are effective writers, then the wiki can be really useful.
- Official documentation of a tool.
- A historian, like a wiki but worse since humans are worse at remembering things than machines are, but better since
  only one editor is allowed.
- git commits - pro: very close to the code, con: relies on humans and effective communication, also has multiple
  styles.
- pull requests - similar to git commits but better for providing a higher level overview of a change
- source code host search, e.g. github search or gitlab search
- slack messages - since slack is a Searchable Log of All Communication and Knowledge, it is certainly a place to look
  for information.
- Cloud provider API/UI - e.g. AWS that can tell you the version that is currently in prod
- Metrics - e.g. ELK, Prometheus + Grafana
- Direct db queries

Each system has a certain cost, to maintain it, and each system gets us some information with some degree of
reliability. One of the problems I would like to think about is how to manage the set of systems an engineering team
leverages in order to get the information they need for minimal cost? Another question, is that if one were to move to a
new team, where the set of systems is different, or perhaps organised differently, how quickly can one orient themselves
to the new set of systems.

Picture this scenario: You work somewhere, and you are very used to the set of systems available to you. You change your
working team, either by moving teams or by moving companies. The new team organises things totally differently, and you
feel lost because you're in a different kitchen. One can assume the new team has a set of systems, and is not just
running around in the dark like magicians or mute historians. You exclaim, "Hey team, you are not using one of the
systems I was reliant upon in my old team, and I feel out of place, can everyone start using my system?". Maybe you've
said these words, maybe you've heard them. Here's a more concrete example: "Hey, can everyone put jira ticket ids in
front of git commit messages and inside the git pull requests, I find it really useful and am annoyed that I'm the only
one doing it". Which leads to an interesting question of how does a system organically get added, and organically leave?
By asking people, and annoying them into it like a cop, you feel angry for forcing them, and they feel angry for being
micromanaged. Maybe the information that you want to introduce is only seen as valuable by you, maybe they have another
system which you have not found yet which gathers that information?

If you have better names for any of the things I am talking about, or want to discuss them just leave me a message and
some way of contacting you. Also if you know anyone who has written about this and already explored these topics, then
give me a shout, I'd love to read up on this. 

This is a follow-up post on 'Information Systems'. In order to think about the different systems available to us and
their pros and cons. But rather, we can think of this as a data problem.

Imagine having lots of different databases, each database has a cost of retrieving information based on various factors,
and there is a cost to lookup which tables are in which database. We are trying to minimise the total cost of retrieving
information from the system. With the added requirement that access should be role based.

Now the problem should be simpler to solve and think about, but before we do, I want to convince you that this is the
correct problem to solve.

Consider git commit logs, or code, or jira, or any other system mentioned in the previous post. Ultimately, this is a
datasource, that can be edited and read from. For this reason, I'm going to treat them like databases. Let's take code
as an example, to see what I mean by the costs.

The cost of looking up information from the code is how fast it takes a developer to find information they are after
within the code. If a team places high emphasis on readable code, it is to lower this cost, as much as possible. The
reason we use design patterns and not spaghetti code is purely to make the code as easy as it could be to read, and
lower the cost of looking up information from it. The information is generally valuable.

What is valuable information? I'm still not completely certain, and information which is valuable to me as an engineer
is maybe less valuable to a product manager, or a manager. I consider value to be a mixture of the following:

- reliability, how likely is this information going to be correct
- referenciability, can this information lead me to other information

I personally place the most emphasis on reliability and less on referenciability. Something which references the
reliable information is less valuable than the reliable information itself. Each layer of reference, makes it less
valuable.

Hopefully now, you are on board with treating this as a data problem. We have some statements which we know from common
sense and engineering practices.

- The fewer indicies in a datasource, the easier search is. Ultimately, we are iterating over all indicies and filtering
  out as much as possible. The less in each datasource the faster search is.
- Writing data to multiple data sources without a multiple-update system setup leads to inconsistencies of data, and
  then it becomes hard to know which data is correct.
- Having data relevant to a role being in the datasources that that role can access is good. (Think about replacing role
  with an application to see if this makes sense from an architecture standpoint)
- Giving structure to the data makes it easier to search, but this also imposes some standard which may be hard to
  change (think of a select from a structured table vs finding something from a document store)

Despite knowing these and probably more rules about data management, we often forget when it comes to these information
systems. We often put all our information in an unstructured brain dump in at least one central system, but also write
the same information in other systems. Perhaps after finishing a project, someone will write a summary in the readme
file, another brain dump in confluence and yet another in a recorded meeting. Sure enough the third is static and won't
be subject to edits, but it is not going to keep up with the project, and will be the slowest to gain information from.
