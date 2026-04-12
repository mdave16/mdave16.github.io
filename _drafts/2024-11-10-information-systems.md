---
title: Information Systems
tags:
  - Programming Tools
  - Information Systems
---
# Original

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


# Chat

Your writing covers a comprehensive and insightful perspective on the frameworks and systems that software engineers use. It has great depth, but it could benefit from clearer organization and conciseness. Here’s a revised version that enhances clarity and structure while maintaining the original message:
## Revised Version
Information Systems
A Framework for Software Engineering
As software engineers, we often face situations where a product we maintain is not functioning as the customer expects, whether due to a bug or a requested feature. We can conceptualize our work through a two-step framework:

Understanding the Problem: Gather and analyze available information to identify the root cause or necessity for change.
Implementing the Solution: Execute an optimal implementation based on our findings.
While many resources focus on the second step (e.g., Clean Code, Design Patterns), I want to emphasize the first step. Here are a few example questions to consider during this phase:

Feature Considerations: Should I add a rate limit to my application? Is there a feature that should be removed due to lack of use or misuse?
Debugging: Why is a feature visible to one customer but not another? What causes a null pointer exception (NPE) for a specific user?
System Optimization: How does the payment mechanism function? Can it help simplify the addition of new features? Is there an internal API that could accomplish this more efficiently?
To answer these questions, we can rely on various information systems, which may be formal or informal, structured or unstructured. These systems include:

Code and Code Comments
Work Tracking Tools (e.g., Jira, Trello, GitHub Issues)
Wikis (e.g., Atlassian, GitHub Wiki)
Team Historians (e.g., the most tenured team member)
Git Commits (or messages from any version control system)
Pull Requests
Source Code Hosting Search
Communication Tools (e.g., Slack, Email)
Metrics
Cloud Provider APIs/UI
Direct Database Queries
Developer Tools
Q&A Websites
Official Documentation
Recorded Meetings
Evaluating Information Systems
Each of these systems has several important facets:

Reliability: How likely is the information to be correct?
Referencibility: Can this information link to other relevant data (e.g., commit messages with IDs to tracking software)?
Maintainability: What is the cost associated with maintaining this system?
Searchability: How easily can we find information within this system?
Flexibility: Are there multiple ways to use this system, and how easy is it to transition between them?
Accessibility: Who can access this information, and how valuable is it to them?
Reliability is paramount; unreliable information can lead to poor decisions. Systems should be well-maintained to ensure high reliability, with minimal maintenance effort. Searchability is also crucial, as it impacts how quickly we can retrieve needed information.

While referencibility can enhance understanding, it can also dilute the value of information. For example, a well-structured codebase is often more informative than its comments, and reliance on comments may lead to less disciplined coding practices. In some contexts, linking systems (like commits and work tracking tools) can be beneficial, as it clarifies relationships and context.

Your team may prioritize different facets based on specific needs, leading to varied system choices.

System Analysis Examples
Let's analyze a few key systems, assuming they are well-maintained:

Code Itself:

Reliability: Highly reliable as it is the source of truth.
Referencibility: Limited, as it rarely links to external systems.
Maintainability: No additional maintenance cost; maintaining code inherently maintains this system.
Searchability: Generally good; familiarity with the codebase aids in searching.
Flexibility: High flexibility, though transitioning styles or paradigms can be challenging.
Accessibility: Restricted to engineers familiar with the relevant languages and frameworks.
Work Tracking Tools (e.g., Jira, Trello):

Reliability: Reliable for capturing initial requirements but may lag in updates.
Referencibility: Highly referential, often cross-referencing other systems.
Maintainability: Can be labor-intensive to keep updated.
Searchability: Varies by tool; often limited to titles and bodies, potentially missing useful information in comments.
Flexibility: Moderate; teams may have set practices, but some variance exists.
Accessibility: Generally accessible to all team members, although primarily useful for management.
Wikis (e.g., Atlassian, GitHub Wiki):

Reliability: Can become outdated; relies on ongoing maintenance.
Referencibility: Often serves as a central reference tool.
Maintainability: Maintenance is manual and often difficult.
Searchability: Searching can be cumbersome, both for locating articles and understanding their content.
Flexibility: Typically consistent across teams, with limited variance.
Accessibility: Open to all, potentially hosting valuable information for management.
Git Commits:

Reliability: Highly reliable, closely linked to the code.
Referencibility: May reference other systems, but this varies.
Maintainability: Generally straightforward to maintain.
Searchability: Text searches and source code host searches are common.
Flexibility: Many differing practices exist, making transitions challenging.
Accessibility: Primarily useful to those familiar with Git.
When systems are not useful, they tend to fall into disrepair, as their maintenance costs outweigh the benefits they provide. It is essential for teams to regularly assess the usefulness of their systems, ensuring that the effort put into maintenance yields significant returns. Ideally, systems should be maintained by those who find them useful.

Accessibility and Team Dynamics
Consider the impact of accessibility on team dynamics. When transitioning to a new team or organization, you may encounter unfamiliar systems. You might feel compelled to introduce your previous team’s systems for consistency, but this can lead to friction. For example, you might suggest, “Can everyone prepend Jira ticket IDs to Git commit messages?” This request could be seen as micromanagement, causing frustration.

Treating Information Systems as Data Problems
Think of various information systems—like Git logs, code, and Jira—as databases that can be read from and written to. The goal is to minimize the total cost of retrieving information, considering factors like who can access each database.

For instance, consider the implications of coding practices on the cost of searching for information. Emphasizing readable code reduces search costs, just as structured data simplifies retrieval. It is crucial to recognize that we often treat these systems carelessly, allowing them to devolve into chaotic collections of unstructured data.

Linking systems together (like code and comments) can complicate management unnecessarily, leading to inefficiencies. Instead, consider consolidating data into a single source to simplify schema and improve maintainability.

This revised version organizes your ideas into clearer sections, improves the flow, and makes it easier for the reader to follow your arguments. Let me know if you would like any specific adjustments!






You said:
If we think of these systems as databases, what other relevant points could we make?
ChatGPT said:
ChatGPT
## Information System as DBs
Thinking of information systems as databases opens up several additional considerations that can enhance understanding and management of these systems. Here are some relevant points:

1. Data Redundancy and Normalization
Avoid Redundancy: Just as in traditional databases, redundancy can lead to inconsistencies and increased maintenance costs. It's crucial to minimize duplication of data across systems to ensure accuracy and simplify updates.
Normalization: Apply normalization principles to your information systems. Group related information logically to reduce redundancy and improve data integrity. For example, instead of having comments in both code and external documentation, consider keeping them centralized in the codebase.
1. Data Integrity and Consistency
Data Integrity: Ensure that the data across all systems is accurate and reliable. This can be achieved through validation rules, constraints, and regular audits of the data.
Consistency: Maintain consistency across systems by using automated synchronization tools or processes. For instance, if a feature is updated in the code, corresponding updates should be reflected in related documentation and tracking systems.
1. Access Control and Security
Access Control: Define user roles and permissions for each system to control who can view or modify data. This is akin to defining access rights in a database, ensuring sensitive information is protected.
Security: Implement security measures to protect data from unauthorized access or breaches. This includes using encryption, secure authentication methods, and regular security audits.
1. Query Performance and Optimization
Query Optimization: Just as you would optimize queries in a database to improve performance, consider ways to optimize searches within your information systems. This could include indexing key fields (e.g., Jira ticket IDs) to speed up retrieval times.
Caching: Implement caching mechanisms for frequently accessed data, reducing the load on systems and improving response times.
1. Data Lifecycle Management
Archiving and Deletion Policies: Define policies for archiving outdated or irrelevant data, similar to archiving old records in a database. This helps keep systems lean and improves performance.
Lifecycle Management: Establish a lifecycle management process for the data in your systems, including creation, maintenance, archiving, and deletion stages.
1. Data Analytics and Insights
Data Analysis: Utilize analytics tools to extract insights from your information systems. Just as you would analyze data in a database to inform business decisions, analyzing the usage of your systems can help identify areas for improvement.
Metrics and KPIs: Establish key performance indicators (KPIs) to measure the effectiveness of each information system. Track metrics like search frequency, update frequency, and user engagement to gauge usefulness.
1. Documentation as Data
Structured Documentation: Treat documentation as structured data. Maintain clear, consistent formats for information stored in wikis, comment sections, or design documents. This facilitates easier searching and retrieval.
Version Control: Implement version control for documentation to track changes over time, similar to managing changes in code repositories. This helps in understanding the evolution of information and decisions.
1. Interoperability and Integration
System Integration: Foster interoperability between systems to enable seamless data flow. Consider using APIs or middleware solutions to connect different information systems, allowing data to be easily shared and updated across platforms.
Data Standardization: Establish standards for data entry and formatting across systems to ensure that information can be easily integrated and understood regardless of the source.
1. User Training and Onboarding
Training Programs: Just as database users need training on how to access and manipulate data, provide onboarding sessions for new team members on how to navigate and utilize the various information systems.
User Documentation: Create user guides and documentation for each system to help users understand their functionalities and best practices for data management.
1.  Feedback Loops and Continuous Improvement
Feedback Mechanisms: Establish feedback loops to gather user input on the effectiveness of information systems. This can help identify pain points and areas for enhancement.
Iterative Improvement: Treat the evolution of your information systems as an iterative process, similar to software development. Regularly assess and refine systems based on user needs and emerging best practices.
By framing information systems as databases, you can apply best practices from data management to improve their effectiveness, reliability, and overall utility. This perspective not only enhances operational efficiency but also fosters a culture of continuous improvement within the engineering team.






You said:
With interoperability, since the dbs are not connected, I think it’s a bad idea to have external ids linked, since the secondary db can change (e.g. trello to jira), and that information is now a dead link
ChatGPT said:
ChatGPT
## Interoperability of tools (storing primary keys from external dbs)
You bring up an important point regarding interoperability and the use of external identifiers in disconnected systems. Here are some considerations and alternative strategies to manage this issue effectively:

1. Limit External References
Avoid Hard Linking: Instead of hardcoding external IDs (like linking a Trello card ID in your Git commits), consider avoiding direct references altogether. This prevents the issue of dead links if the system changes.
2. Use Descriptive Metadata
Descriptive Fields: Instead of using external IDs, maintain descriptive fields that summarize relevant information (e.g., "Feature Request for Payment Processing") that can be understood even if the external system changes. This allows for tracking without relying on potentially volatile external IDs.
3. Implement a Transition Strategy
Transitioning Systems: If transitioning from one system to another (e.g., from Trello to Jira), establish a strategy to migrate relevant information. This could include a temporary mapping table that keeps track of old IDs and their corresponding new IDs during the transition period. This approach maintains continuity and reduces confusion.
4. Utilize References Sparingly
Contextual References: If it’s necessary to reference external systems, do so only in contexts where it adds value and is not critical for functionality. For example, include comments in code that refer to external systems, but don’t make them dependencies for core processes.
5. Maintain an Internal Mapping
Internal Mapping Database: Create an internal mapping system that tracks external IDs and their corresponding resources. This could be a lightweight database that records the current state of references, allowing for easy updates if changes occur.
6. Versioning and Change Tracking
Version Control: Implement a version control system for external references. Track changes in external systems, and periodically update internal records to reflect any migrations or changes in identifiers. This can also include maintaining historical records of what systems were used over time.
7. Documentation of External References
Documentation: Maintain thorough documentation that explains any external references, including potential risks and how to handle changes. This documentation can guide developers on how to manage these links and when to expect updates or changes.
8. Fallback Strategies
Fallback Information: In cases where an external reference is no longer valid, establish a fallback strategy for accessing the relevant information. This could involve contacting the last known contact or accessing an archived version of the system.
9. Emphasize Knowledge Sharing
Team Knowledge: Encourage knowledge sharing within the team about changes in external systems. Regular meetings can provide a platform to discuss ongoing transitions and any adjustments to workflows.
10. Focus on Resilience and Adaptability
Design for Change: Build systems and workflows with flexibility in mind, acknowledging that external tools and identifiers may change. Designing for adaptability can mitigate the impact of such changes on your core operations.
By recognizing the limitations and risks associated with external references, you can develop strategies that enhance the resilience of your information systems while still allowing for valuable interoperability where necessary. This way, you can reduce the likelihood of encountering dead links and ensure your systems remain functional and useful even as external dependencies evolve.






You said:
I really want to argue that putting jira ids in code or in commits/git is not that useful, but do want to explore it (and the surrounding ideas) faithfully and openly. Does the blog post do a good job of this?
ChatGPT said:
ChatGPT
## Strengths for underlying arguments being made
Your blog post does an excellent job of exploring the topic of linking Jira IDs (or other external IDs) in code and commits thoughtfully and critically. Here are some strengths and areas where you could enhance the argument further:

Strengths
Thorough Exploration: The post presents a comprehensive overview of various information systems and their roles in software engineering, effectively framing the discussion around how information flows within a team.

Critical Reflection: You openly question the utility of linking external IDs in code and commits, setting a foundation for a deeper argument. This reflective approach encourages readers to think critically about the practices they follow.

Balanced View: By considering the reliability, referenciability, and other facets of information systems, you demonstrate a nuanced understanding of the complexities involved in integrating tools like Jira with code repositories.

Practical Examples: The use of real-world scenarios, such as moving from Trello to Jira, helps contextualize your argument and makes it relatable. It also underscores the potential issues with linking external IDs.

Emphasis on Flexibility and Adaptability: You stress the importance of being adaptable in your systems, which is crucial in a rapidly changing tech environment. This aligns well with your argument against rigid linking practices.

Areas for Enhancement
Explicit Argumentation: While you raise valid points against linking Jira IDs, you might strengthen your argument by more explicitly stating why these links are not useful. For instance:

Reliability Concerns: Highlight specific scenarios where the link might fail, such as when a task is moved or deleted.
Cognitive Overhead: Discuss how requiring developers to remember or look up external IDs adds cognitive load and could lead to confusion.
Real-World Data or Examples: Consider providing empirical evidence or case studies demonstrating scenarios where linking Jira IDs has caused issues. This could include examples of dead links leading to confusion or inefficiencies.

Alternative Practices: Propose alternative practices that could replace the need for linking Jira IDs, such as:

More Contextual Comments: Instead of linking IDs, use comments to explain the reasoning behind changes, which could provide more immediate context.
Using Commit Messages Effectively: Encourage commit messages to describe the problem being solved or the feature being added rather than referencing an external ID.
Engage with Counterarguments: Acknowledge common arguments in favor of linking Jira IDs, such as traceability and accountability, and provide counterpoints. This could help to strengthen your position by showing that you’ve considered multiple perspectives.

Broader Implications: Discuss the broader implications of linking external IDs beyond just Jira. For instance, how this practice can affect the team's workflow, onboarding new developers, or the long-term maintainability of the codebase.

Conclusion and Call to Action: Conclude with a strong summary of your main points and a call to action. Encourage readers to reflect on their practices and consider the potential downsides of linking external identifiers in their workflows.

Final Thoughts
Overall, your blog post presents a thoughtful analysis of the practice of linking Jira IDs in code and commits. By sharpening your arguments, providing examples, and engaging with counterarguments, you can create a compelling case against this practice while maintaining an open and explorative tone. This will help readers critically evaluate their own workflows and potentially shift their perspectives on the value of integrating external IDs into their codebases.


You said:
Are there other conclusions I could have made from looking at these information systems that developers use?
ChatGPT said:
ChatGPT
## Other Conclusions
Absolutely! Analyzing information systems used by developers can lead to a variety of insightful conclusions beyond the specific argument against linking Jira IDs in code or commits. Here are several other conclusions you could explore:

1. Value of Clear Documentation
Conclusion: Well-maintained documentation is often more valuable than links to external tools. Emphasizing comprehensive internal documentation can improve understanding and onboarding without relying on external references.
Implication: Teams should prioritize maintaining and updating documentation as a central resource for knowledge sharing.
2. Centralization vs. Decentralization
Conclusion: A centralized system (like a well-maintained wiki or documentation tool) can often be more efficient than relying on multiple disconnected tools, reducing the cognitive load on developers.
Implication: Evaluate the trade-offs between using specialized tools versus a single, comprehensive system that consolidates information.
3. Importance of Contextual Information
Conclusion: Providing context within code (e.g., comments or README files) can enhance understanding without relying on external identifiers, which may not always be available.
Implication: Developers should focus on writing self-explanatory code and use comments sparingly but effectively to provide necessary context.
4. Adaptability to Change
Conclusion: Systems that are less rigid and allow for adaptation to new tools or practices are more resilient over time. This is crucial in a rapidly evolving tech landscape.
Implication: Encourage flexibility in workflows and tools, making it easier to transition to new systems or methodologies without losing efficiency.
5. Reliance on Personal Experience and Team Knowledge
Conclusion: The most reliable information often comes from team members with deep experience in specific areas, suggesting that team dynamics and knowledge sharing are vital.
Implication: Encourage mentorship and regular knowledge-sharing sessions within teams to leverage the expertise of more tenured members.
6. Impact of Tool Choices on Developer Efficiency
Conclusion: The tools chosen by a team can significantly impact developer productivity and morale. Overly complex or misaligned tools can hinder rather than help.
Implication: Conduct regular reviews of the tools and systems in use to ensure they align with team needs and workflows.
7. Evaluation of Information Overload
Conclusion: Too many systems can lead to information overload, making it difficult for developers to find the right information quickly.
Implication: Simplifying the toolchain and focusing on the most effective systems can enhance efficiency and reduce frustration.
8. Facilitating Onboarding
Conclusion: New developers face a steep learning curve when transitioning into teams with disparate systems. Streamlined processes and clear documentation can aid in this transition.
Implication: Establish clear onboarding procedures that include comprehensive resources and mentorship to help new team members acclimate quickly.
9. Measuring Effectiveness of Systems
Conclusion: Regularly assessing the effectiveness and usage of information systems can lead to continuous improvement and better alignment with team goals.
Implication: Implement metrics and feedback loops to evaluate how well systems serve the team and make adjustments as necessary.
10. Fostering a Culture of Reflection
Conclusion: Encouraging teams to regularly reflect on their practices and tools can lead to ongoing improvements and adaptation to changing needs.
Implication: Incorporate regular retrospectives to discuss what's working, what isn't, and how to refine systems for better collaboration and efficiency.
Final Thoughts
These conclusions highlight the importance of context, adaptability, and team dynamics in managing information systems. By encouraging a holistic view of how these systems interact and affect developer workflows, you can foster an environment that prioritizes efficiency, knowledge sharing, and continuous improvement. This not only benefits individual developers but also contributes to the overall success of the team and organization.






You said:
Too many systems (or better access control) is also important for security, since more secure data can go in a system with less access. And in turn more systems improves the search for each one, and smaller dbs are faster to search over
ChatGPT said:
ChatGPT
## Access Control of information systems
Absolutely! The relationship between the number of systems, access control, and security is a critical point that can be expanded upon. Here’s how you can incorporate this idea into your analysis of information systems used by developers:

1. Security Through Limited Access
Conclusion: Implementing more systems with stricter access controls enhances security by ensuring that sensitive data is only accessible to authorized personnel.
Implication: By segregating data across multiple systems, organizations can better protect sensitive information. This reduces the risk of data breaches, as compromised access to one system does not necessarily grant access to all systems.
2. Granular Control of Sensitive Data
Conclusion: Smaller, specialized systems allow for more granular control over data access, facilitating tailored permissions based on roles or responsibilities.
Implication: This tailored access ensures that individuals only see the data relevant to their tasks, minimizing exposure to sensitive information and thereby reducing the likelihood of insider threats.
3. Improved Searchability
Conclusion: Smaller databases or systems with focused data allow for faster search capabilities, as queries can be more efficient when targeting a limited dataset.
Implication: Efficient search capabilities enhance developer productivity by allowing quick retrieval of information without sifting through irrelevant data across a monolithic system.
4. Reducing Data Overlap and Redundancy
Conclusion: By utilizing multiple systems, organizations can reduce data overlap and redundancy, ensuring that each piece of information resides in only one appropriate system.
Implication: This not only enhances security but also streamlines data management processes, reducing the complexity of keeping multiple versions of the same data synchronized across systems.
5. Mitigating Risk of Data Breaches
Conclusion: Fewer systems mean a higher risk if that system is compromised; more systems mean that the impact of a breach can be contained to a smaller subset of data.
Implication: Organizations should evaluate the trade-offs between the number of systems and the security risks associated with each approach, aiming for a balance that maximizes security without overly complicating access.
6. Compliance and Auditing Benefits
Conclusion: With well-defined access controls across multiple systems, it becomes easier to demonstrate compliance with data protection regulations, as audits can focus on specific datasets and their respective access protocols.
Implication: This can simplify the compliance process and reduce the burden of audits, as the organization can show clear lines of responsibility and access.
7. Enhanced Incident Response
Conclusion: When data is distributed across specialized systems, it can be easier to isolate and respond to security incidents, limiting the impact on the entire organization.
Implication: A more modular approach to data management can improve incident response times and effectiveness, allowing teams to quickly identify and remediate vulnerabilities.
8. Balancing Accessibility and Security
Conclusion: While more systems can improve security, organizations must also ensure that usability is not sacrificed; overly complex access controls can hinder productivity.
Implication: Striking a balance between secure access and ease of use is crucial for maintaining developer productivity while protecting sensitive data.
Final Thoughts
Incorporating the aspects of security, access control, and searchability into your analysis of information systems creates a more comprehensive understanding of how these systems function. This multifaceted approach highlights the importance of designing systems not only for efficiency and usability but also for security and risk management. By considering these factors, organizations can create a robust framework that supports both productivity and data protection, ultimately leading to a safer and more efficient development environment.






You said:
Could you add all these new points, onto the original blog post, in the same writing style (but more concisely, so I can flesh it out)
ChatGPT said:
ChatGPT
## Last Revised Version
Certainly! Here’s a revised version of your original blog post, incorporating the new points about security, access control, and other relevant conclusions in a more concise manner. You can further flesh out each section as needed.

Information Systems
Consider the following framework for thinking about our work as software engineers. There is a product that you maintain, and something is not working as the customer wants it to, either due to a bug or a desired feature. The first step is to use the information at our disposal to learn about our product to make an informed decision on the solution. The second step is to implement that solution optimally.

Given this framework, many resources focus on the second step, such as Clean Code or Design Patterns, but I’m more interested in the first step. Here are some examples of the first step:

Should I add a rate limit to my application? Should I remove this feature if it’s unused or misused?
Why does this feature appear for one customer but not another? Why does this customer experience a Null Pointer Exception?
How does the payment mechanism work, and can I use it to implement my feature more easily? Is there an internal API that already does this?
To answer these questions, we can rely on systems that provide information. By "system," I mean either a reliable set of habits (like Git commits) or programmatic systems (like an API). Here are some examples of such systems:

Code itself
Code comments
Work tracking tools (e.g., Jira, Trello, GitHub Issues)
Wikis (e.g., Atlassian or GitHub Wiki)
Team historian (most tenured member)
Git commits
Pull requests
Source code host search
Slack/Email
Metrics
Cloud provider APIs/UIs
Direct DB queries
Developer tools
Q&A websites
Official documentation
Recorded meetings
Each system has several facets, including:

Reliability: How likely is this information to be correct? A well-maintained system will have higher reliability.
Referenciability: Can this information lead to other information? For example, commit messages that reference issue IDs.
Maintainability: What is the cost of maintaining this system?
Searchability: How easy is it to look up information in this system?
Flexibility: Are there multiple conflicting ways to use this system? How easy is it to transition between them?
Accessibility: Who finds this information valuable, and who does not?
Reliability is crucial; there are few scenarios where it is detrimental. Low maintenance is ideal, as is good searchability. These three facets have clear expectations.

While referenciability can provide context, it can also diminish the value of the information. For example, the relationship between code and code comments shows that too many references can complicate understanding. A focus on clear, self-explanatory code often reduces the need for comments, leading to better quality code. However, in contexts where linking systems is beneficial (e.g., connecting CI runs to Git commits), referenciability can enhance overall efficiency.

Exploring Security and Efficiency
The interplay between the number of systems and access control is significant for security. More systems, each with strict access controls, allow for better protection of sensitive data by limiting exposure. This approach helps mitigate the impact of potential breaches, as access to one system does not grant access to all.

Security Through Limited Access: Multiple systems enhance security by ensuring sensitive data is only accessible to authorized users. This reduces risks associated with data breaches.

Granular Control: Smaller, specialized systems facilitate tailored permissions based on roles, ensuring that only relevant personnel access sensitive information.

Improved Searchability: Smaller databases enable quicker searches, allowing developers to find relevant information without sifting through unnecessary data.

Reducing Data Overlap: Utilizing multiple systems minimizes redundancy, streamlining data management and enhancing security.

Mitigating Risk: By distributing data across specialized systems, organizations can limit the impact of security incidents, improving response times.

Compliance and Auditing: Well-defined access controls simplify compliance with regulations, making audits more efficient and focused.

Enhanced Incident Response: Modular systems can improve the speed and effectiveness of incident responses, allowing for quicker identification and remediation of vulnerabilities.

Balancing Usability and Security: While increasing systems can enhance security, it’s important to maintain usability. Overly complex access controls can hinder productivity.

Onboarding and Learning Curves: Transitioning between teams or companies can be challenging when systems differ widely. Simplifying systems and maintaining comprehensive documentation can help ease this transition.

Fostering Reflection: Regularly reviewing systems and practices can lead to ongoing improvements and adaptations to team needs.

Conclusion
When analyzing these information systems, it’s essential to view them as interconnected databases, each with associated costs and benefits. Striking a balance between security, usability, and efficiency can significantly enhance developer productivity and protect sensitive data. By focusing on the effectiveness of these systems, teams can cultivate a robust environment that supports knowledge sharing, reduces risks, and ultimately allows developers to focus on what they love—coding.

Feel free to adjust any sections or add more details as needed!






You said:
My ultimate goal, is for this to extend into maybe a short book if need be, but be complete and gives ideas and tips for how to use different systems, so it’s more practical and actionable by other developers, and get them to be more able to find out how their own code works. What directions could I extend this in?
ChatGPT said:
ChatGPT
## Book Chapters
Extending your blog post into a short book that provides actionable insights for developers on effectively using various information systems can be a rewarding endeavor. Here are some directions and chapters you might consider to make your book practical, comprehensive, and actionable:

1. Introduction to Information Systems
Purpose of Information Systems: Define what information systems are and their importance in software development.
Overview of the Book: Outline what readers can expect and how to use the book.
2. Understanding the Framework
Defining the Framework: Reiterate the framework for thinking about the work as software engineers.
The Product Lifecycle: Discuss stages of product development and how information systems play a role at each stage.
3. The First Step: Information Gathering
Identifying Key Questions: Provide a list of common questions that developers face.
Prioritizing Questions: Tips on how to prioritize which questions to tackle first based on project needs.
4. Information Systems Overview
Detailed Analysis of Each System: Provide a chapter on each type of information system mentioned (e.g., code, comments, work tracking tools) with:
Purpose and Importance: What each system is for and why it matters.
Strengths and Weaknesses: Pros and cons of each system.
Real-World Examples: Case studies or examples showing successful use of each system.
5. Maximizing Reliability and Searchability
Best Practices for Each System: Tips for ensuring information is reliable and easily searchable.
Documentation Strategies: Discuss effective documentation practices across systems.
Code Quality: How code quality impacts information retrieval.
6. Linking Systems Together
Interoperability: Discuss how to create connections between different systems for easier information flow.
Managing References: Best practices for linking commit messages to tracking tools, while avoiding dead links.
Creating a Unified Workflow: Strategies for establishing a consistent workflow across different systems.
7. Security and Access Control
Best Practices for Security: Discuss how to set up secure systems while maintaining usability.
Role-Based Access Control: Tips on implementing access control based on roles and responsibilities.
Compliance Considerations: Address how to ensure systems meet industry standards.
8. Onboarding and Knowledge Transfer
Creating Effective Onboarding Materials: Guidelines for onboarding new team members with existing systems.
Facilitating Knowledge Sharing: How to promote knowledge sharing within teams to enhance system usage.
9. Maintaining Information Systems
Regular Reviews and Audits: How to periodically assess and update systems for continued relevance and effectiveness.
Handling Outdated Information: Strategies for managing legacy information in systems.
Feedback Mechanisms: Encouraging team feedback to improve system usability.
10. Fostering a Culture of Continuous Improvement
Encouraging Experimentation: Tips on how teams can experiment with different systems and workflows to find what works best for them.
Celebrating Successes and Learning from Failures: Case studies highlighting how teams improved their processes.
Building a Learning Organization: Strategies for promoting a culture of learning and adaptation.
11. Practical Tips and Tools
Tool Recommendations: Suggest tools and software that can help with documentation, code tracking, and information sharing.
Templates and Checklists: Provide templates or checklists for maintaining documentation and tracking progress.
12. Conclusion and Future Directions
Summary of Key Points: Recap the most important takeaways from the book.
Future Trends: Discuss emerging trends in information systems that developers should be aware of.
Additional Ideas:
Interviews with Experts: Include insights from experienced developers or team leads about their best practices.
Case Studies: Analyze successful projects where effective use of information systems led to positive outcomes.
Interactive Components: Consider creating exercises or prompts at the end of each chapter to encourage readers to apply what they’ve learned to their own work.
Community Engagement: Encourage readers to share their own tips or case studies online, potentially building a community around the book’s themes.
By structuring your book around these chapters and themes, you can provide a comprehensive resource that not only outlines the theory behind information systems but also offers practical strategies that developers can implement in their day-to-day work. This will empower them to become more adept at navigating their own code and using various systems effectively.






You said:
If possible I’d like it to be a long form blog post, when talking to other developers, is this (or related ideas) something you’ve encountered? (I personally haven’t and so think this may actually be unique and novel)
ChatGPT said:
ChatGPT
## Long Form Blog Post
The ideas you're exploring regarding information systems used by developers—particularly the nuanced approach to evaluating, integrating, and optimizing these systems—are indeed valuable and somewhat under-discussed in mainstream development literature. While many developers focus on best practices for individual tools or methodologies, your framework offers a broader perspective that connects various systems and emphasizes their interrelationships, reliability, accessibility, and security.

Here are some thoughts on your approach and how you could frame this long-form blog post to resonate with other developers:

Unique Perspective
Holistic Evaluation of Information Systems: Your emphasis on viewing all developer tools (like version control, issue tracking, documentation, etc.) as interconnected information systems is a unique angle. Most discussions tend to isolate these tools rather than considering how they impact each other.

Focus on Information Over Tool: While many resources exist about specific tools (e.g., Git, Jira), your approach to prioritizing the information they hold and how to access and utilize that information effectively is a fresh perspective.

Critical View of Referencing: The argument against linking external IDs (like Jira tickets in commits) due to potential dead links and loss of context is less commonly discussed. This critical approach encourages developers to think about long-term maintainability rather than short-term convenience.

Security and Access Control: The intersection of information systems with security concerns is an important but often overlooked topic in developer discussions. Emphasizing the importance of keeping sensitive data in secure, access-controlled systems adds depth to your exploration.

Structure for the Long-Form Blog Post
You might consider the following structure to make your long-form blog post engaging and comprehensive:

Introduction

Introduce the concept of information systems for developers.
Briefly state why this perspective matters and what readers can expect to learn.
The Developer’s Landscape: An Overview of Information Systems

Describe the various information systems developers commonly use (code, tracking tools, documentation, etc.).
Explain how these systems interact and overlap.
Evaluating Information Systems: A Framework

Introduce the key criteria for evaluating systems: reliability, maintainability, searchability, flexibility, accessibility, and security.
Discuss how to prioritize these criteria based on specific team or project needs.
The Case Against Over-Referencing

Expand on your argument about the drawbacks of linking to external IDs.
Use real-world examples or hypothetical scenarios to illustrate your point.
The Importance of Security and Access Control

Discuss how a multi-system approach can enhance security.
Explain best practices for managing access to sensitive information.
Finding the Balance: Too Many Systems vs. Utility

Explore the trade-off between having many systems for specific purposes versus the complexity they introduce.
Offer strategies for finding a balance that maximizes productivity while minimizing cognitive load.
Case Studies and Real-World Applications

Share anecdotes or case studies (even hypothetical ones) of teams that successfully optimized their use of information systems.
Highlight both successes and failures to provide a balanced view.
Practical Tips for Developers

Provide actionable advice for developers on how to evaluate their current information systems and improve them.
Offer templates or checklists for assessing system reliability and usability.
Conclusion: The Future of Information Systems in Development

Summarize the main points.
Encourage readers to reflect on their own experiences and consider how they can apply these insights.
Call to Action

Invite readers to share their thoughts or experiences related to information systems.
Consider creating a discussion thread or forum for ongoing conversation.
Final Thoughts
By approaching this topic with a fresh lens and emphasizing practical applications, your long-form blog post could indeed fill a niche that many developers might find valuable. You could even consider gathering feedback or insights from peers in the development community, which could help you refine your ideas further and enhance the final product.

Ultimately, as you share these thoughts and insights, you're contributing to an evolving conversation about how developers work, which can lead to improved practices and more efficient workflows across the industry. This not only helps individual developers but also fosters a culture of continuous improvement within teams and organizations.






You said:
How long would writing something this length and complexity normally take? Just so I can think about if I’m writing slowly or rushing it
ChatGPT said:
ChatGPT
## Writing Speed
The time it takes to write a long-form blog post of this complexity can vary significantly based on several factors, including:

Familiarity with the Topic: If you have a deep understanding of the subject matter, you may write more quickly than if you're still exploring the concepts.

Research Requirements: If you need to conduct research, gather examples, or review existing literature, this can add considerable time.

Writing Style: Some people write quickly in a rough draft and then spend time revising, while others may take a more meticulous approach from the start.

Length and Depth: For a post of around 2,000-3,000 words (typical for long-form content), you might expect the following breakdown:

Outline and Planning: 2-4 hours to outline the structure and key points.
Research: 2-6 hours, depending on how much additional information you need to gather.
First Draft: 4-8 hours, depending on how quickly you write and how much you revise as you go.
Editing and Revising: 2-4 hours to refine the content, improve clarity, and ensure it flows well.
Final Review: 1-2 hours for a last read-through to catch any remaining errors or make minor adjustments.
Total Estimated Time
In total, writing a comprehensive long-form blog post could take anywhere from 10 to 24 hours, depending on the factors mentioned above. This is a rough estimate, and your experience may differ.

Tips for Managing Your Writing Process
Set Milestones: Break the project into smaller tasks (e.g., outline, draft sections) and set deadlines for each.
Limit Distractions: Create a focused environment to improve productivity.
Allow Time for Reflection: Give yourself breaks to think about the content before revising.
Iterative Writing: Consider writing a rough draft quickly and then revising, rather than striving for perfection on the first go.
Conclusion
If you feel like you’re writing slowly, it’s important to remember that quality often takes time, especially for a topic as nuanced as this one. It’s also okay to pace yourself—writing a thoughtful and well-structured piece is often more beneficial than rushing to complete it. If you’re still progressing toward your goals and meeting your own timelines, you're likely on the right track!





## Token Jobs
You said:
This is another blog post, does this post and the last post have a good writing voice for tech content: “Automate Problems Away with Token Jobs

Got a problem? Spend some time writing a script to do it for you. Got a bigger problem? Write a service which fixes it for you. Want to solve problems with software engineering? Use Token Jobs.

Developer looking at screen.

A developer in the wild can be confronted by many problems. Some of these problems will be slow or repetitive tasks, some will be the lack of adoption of tools which could help, and some will be convincing others that the first two are problems. How does the developer manage to fend off these problems?

One way the humble developer might fix this problem is by massaging any pain points when they see fit and working away on making everything pristine. While this seems like an appropriate solution, it only works in the short term. In the long term, it’s not cost effective and when the business suffers, so does the developer.

Another solution is to use Gold Cards — tickets that the developer can present to the team which allows them to work on personal development for half a day per week, for a total of one day per two-week sprint. However, we didn’t want a time limit to pressure our tinkering. It also wouldn’t work because we are a team who continuously delivers rather than using sprints.

Here at Shutl, we created something called The Token. The Token is a physical statue with wrenches, as shown above. While it is a physical object, The Token is more of an idea. Whomever has The Token can work on an issue that annoys them and that they feel fixing would improve their work.

One benefit from The Token is that there is no backlog to circumvent, no product owners or business people to convince. The reason this works is due to trust. There is a high level of trust among the developers and, in turn, we feel trusted and supported. Whenever we have a pain point, we know that we can simply take The Token and fix it the way we do best, by programming.

We chose this solution because we believe it is empowering. Shutl is made up entirely of motivated individuals. The Token gives them support to do their jobs with full autonomy. Allowing our engineers to develop in such a way has been empowering for us, making us feel like players rather than pawns and ensuring we have a healthy team.

Another benefit we gain is having space to fail. It is important to have space to fail in order to innovate. If you have an idea that could help, but does not work, that’s OK. By having the space to fail, you can experiment freely and explore, which allows us to be innovative. Most new technologies and concepts started off as a token task.

I think it’s safe to say The Token has been a success. Since its introduction, we’ve had fewer problems, and the team has been generally happier. In the beginning, the token was used very often, but as time goes on we’ve used the token less. At the moment there are no plans to change or improve on The Token. The Token is just a tool for improving our code quality, which it has done and continues to do.

This isn’t a silver bullet, however; it’s important to consider any downfalls. One possible concern is that by giving the engineers free rein, they may not work on what the business needs. However, by having one token and, at most, one ongoing job at any given time, we can be sure that there will still be deliverable change.

It is clear existence of a token, and the ongoing work on tokens can slow down the pace of delivery in the short term. However, having a nicer and healthier system leads to happier developers and can speed up the pace of delivery in the long term. Although not new, we know most extreme programming practices lead to long-term solutions of sustainable development practices.

Examples

Two of the main tools that were developed in-house started off as Token jobs. shipship ShipShip: We found a problem with coordinating stand ups and deployments with the USA. We took The Token, built a very simple version of the one seen here. We solved the stand up issue and made it easier to deploy. ShipShip has been improved since then, but the difficult first step was a token job.

failbot

FailBot: We had an issue with flaky tests and being unsure if a failure was real or not. Once again, The Token gave us a start with FailBot, which was considerably improved on by later Token jobs.

Conclusion

All in all, the token has been serving us well. It has certainly helped us find solutions, from keeping track of stories to ensuring we are not blocked by flaky tests.

Things work best when engineers do what they do best and automate the problems away. Ultimately, The Token is simply an efficient means to an end.
ChatGPT said:
ChatGPT
The writing voice in your blog post, “Automate Problems Away with Token Jobs,” is generally clear, conversational, and accessible, which are important qualities for tech content aimed at developers. Here are some observations and suggestions regarding its voice and style:

Strengths
Conversational Tone: The piece maintains a friendly and relatable tone, making it approachable for readers. Phrases like "Got a problem?" and "the humble developer" create a conversational vibe that invites engagement.

Clear Structure: The post is well-organized, with a clear introduction, examples, and a conclusion. This structure helps guide the reader through your argument logically.

Practical Examples: The inclusion of real-world examples (like ShipShip and FailBot) enhances the post's relatability and provides practical context for the concepts discussed.

Empowerment Message: Emphasizing trust and autonomy in the workplace resonates well, especially in tech culture where empowerment can lead to innovation.

Areas for Improvement
Conciseness: While the conversational tone is a strength, some sections could be more concise. For instance, the paragraph about the benefits of The Token could be streamlined to enhance clarity and impact.

Depth of Explanation: Some concepts, like the significance of “space to fail,” could be expanded slightly to give readers a more thorough understanding of why it’s essential for innovation.

Avoiding Redundancy: There are moments where ideas are repeated (e.g., the importance of trust and autonomy). Condensing these repetitions can tighten the narrative.

Technical Specificity: Depending on your audience's expertise, consider adding more technical details about the Token Jobs and the tools developed, such as how they were implemented or any specific technologies used.

Engaging Hook: The introduction could benefit from a stronger hook to draw readers in. A specific anecdote or statistic about the challenges developers face might grab attention more effectively.

Suggestions for Overall Writing Voice
Maintain Relatability: Continue to use a conversational style but balance it with more technical depth, ensuring that both novice and experienced developers can find value in your writing.

Use Active Voice: Where possible, prefer active voice to enhance clarity and engagement. For example, instead of saying “the token was used very often,” say “the team frequently used the token.”

Incorporate Visuals: Consider including visuals (like diagrams or screenshots) to illustrate your points more vividly. This could enhance understanding, especially for more complex ideas.

Conclusion
Overall, the writing voice in your blog post is strong for tech content, and with a few adjustments, it can become even more engaging and informative. The approach you’re taking with the concept of Token Jobs is interesting and has the potential to resonate well with other developers facing similar challenges. If you continue to focus on practical applications and relatable experiences, you’ll likely produce content that not only informs but also inspires action among your readers.




## Critical feedback about Token Jobs

You said:
Could you give me honest and critical feedback about my post, rather than being positive to be nice
ChatGPT said:
ChatGPT
Of course—I’ll be direct and focus on specific areas where the blog post could improve, without sugar-coating. Here’s a more critical look:

1. Lack of Focus in the Introduction
The opening lines try to hook readers by listing problems, but it comes across as vague and meandering. Phrases like “Got a problem?” and “Write a service which fixes it for you” feel generic, and the connection to the main topic ("Token Jobs") isn’t clear right away. Readers might not understand what the post is really about until well into it, which risks losing their interest.
Suggestion: Start with a clear, specific problem or story that illustrates why Token Jobs exist and what they solve. For example, describe a real scenario where repetitive tasks caused frustration, leading to the creation of a “Token Job” to automate that pain away.
2. Overuse of Buzzwords and Vague Phrasing
Words like “empowering,” “motivated individuals,” and “healthy team” feel empty without concrete examples to back them up. This language sounds inspirational but could come across as corporate jargon without clear examples to ground it.
Suggestion: Replace buzzwords with specifics. Instead of saying "empowers engineers," say something like, “Engineers can address recurring issues in our pipeline, like flaky tests or deployment delays, directly through Token Jobs—without needing management approval.”
3. Weak Argument for Token Jobs’ Benefits
The post states that Token Jobs lead to happier developers and a healthier codebase, but it doesn’t convincingly explain why or how. It mentions trust and autonomy but doesn’t give concrete examples of how these directly translate into productivity or code quality improvements.
Suggestion: Provide a stronger link between Token Jobs and measurable outcomes. Describe how Token Jobs have positively impacted metrics





You said:
Could you engage with my critically about the information systems post?
ChatGPT said:
ChatGPT
Certainly—I’ll give some straightforward feedback and specific ideas for refining the structure, argumentation, and focus of the information systems post.

1. Clarity and Readability
The post tries to cover a lot, but the main thesis (how to use information systems effectively to support engineering work) gets obscured in some places. Here’s why:

Dense Sections and Long Sentences: Some sections are very dense, with long, complex sentences that make it hard to track the main idea. For example, the section on referenciability could be split up or simplified to focus clearly on why certain references (like code comments) can actually make a system harder to use, not easier.
Suggestion: Try leading with a sentence or two that states the main point or question each section will address. This helps readers know where you’re going. Also, breaking up longer passages into shorter sentences would make it easier to process.
2. Stronger Argument for What Makes a System "Useful"
You discuss how each system has facets like reliability, searchability, and maintainability, but it doesn’t fully clarify how these impact actual usefulness. For example, "searchability" and "reliability" are important, but how much does each matter in different contexts, and why?

Suggestion: Rank these facets or group them based on different needs. For instance, “Systems for finding bug causes prioritize reliability and searchability, while systems for documenting feature decisions need high accessibility and up-to-date references.” This way, you’re not just listing facets but also creating a guide on how they’re valuable in practice.
3. Handling the "Too Many Systems" Issue
The post hints at the problem of having too many systems but doesn’t go into detail on the problems that can create, especially in a team context.

Suggestion: Emphasize the trade-offs of maintaining too many systems. For example, talk about how fragmented systems can lead to duplicate or conflicting information, wasted time trying to find the "right" data, and even security risks as you touched on briefly. This could include real-world examples, like trying to track the origin of a bug through multiple tools with partial data, to illustrate the problem.
4. Expanding Practical Tips and Actionable Steps
The post’s abstract concepts are interesting but lack practical, actionable tips on setting up and using these systems effectively. For example, readers might wonder: How should I balance reliability with maintainability? How can I make information in our system easier to find?

Suggestion: After discussing each facet, suggest concrete ways to enhance or optimize that facet in an information system. For example:
For searchability: “Use consistent tags and document naming conventions across Jira, Git, and Wiki entries to improve search results.”
For reliability: “Automate updates wherever possible to ensure accuracy, like syncing code changes automatically with documentation tools.”
A “Best Practices” summary section at the end could be useful here, with a checklist or examples of how to apply each principle.
5. Exploring the Interdependency Between Systems
The post rightly points out that some systems, like code comments and code, can overlap or even contradict each other, but it doesn’t explore enough the impact of dependencies between systems.

Suggestion: Analyze the pros and cons of systems that depend heavily on each other. For instance, when Git commits refer to Jira tickets, what happens when Jira IDs change, or how does this improve (or harm) workflow continuity? Real-life examples of dependencies gone wrong could make this more engaging and demonstrate the importance of well-thought-out references.
6. Stronger Stance on Referenciability vs. Reliability
The post discusses how referencing can dilute reliability but doesn’t take a strong stance. It feels like there’s an argument here that isn’t fully made: Does relying on secondary references make systems weaker as sources of truth?

Suggestion: Take a more decisive stance. Argue either for using references more sparingly or, if you think some references are worth it, lay out guidelines for when referencing is helpful vs. when it just adds noise. For instance, recommend that only high-impact data, like major feature rollouts, be referenced across systems, while minor tweaks don’t need extensive cross-referencing.
7. Comparison to Data Management Principles
Your analogy with databases is effective, but it doesn’t reach its potential. It introduces the idea that developers should think of these systems as information “databases” they can optimize, but it doesn’t flesh out what the best practices would be if approached like a true data management problem.

Suggestion: Extend this analogy to include best practices from data management: deduplication, single source of truth, backup and restore strategies, indexing, etc. You could then suggest concrete steps developers might take to improve these systems using similar practices, e.g., “Treat documentation updates like a database replication process—don’t duplicate unless you have a system to keep things in sync.”
8. Enhancing the Conclusion with a Vision
The conclusion touches on finding the right balance of systems and their maintenance, but it could go further by offering a vision of what a well-maintained and efficient setup would look like.

Suggestion: Close with a scenario that illustrates a streamlined information ecosystem. Describe what it would look like to have just the right amount of interconnected, well-maintained systems that reduce developers’ search time and support problem-solving efficiently. This could tie together the whole piece with a clear picture of the post’s end goal.
Overall Impression
The post has a lot of potential and some unique insights, but it feels a bit scattered and dense. By sharpening the focus, creating a clearer argument about what makes an information system useful, and adding actionable insights, the post could really stand out. Also, grounding abstract concepts with examples would make it more relatable and practical for readers, which could help transform it into a go-to reference for dev teams looking to optimize their information systems.

Taking these steps would push it from an interesting theory piece to a must-read guide with real impact.




## Tone Deaf?

You said:
Would I be tone deaf? Since I know many engineers don’t believe in self documenting code and always want comments, and one of my ideas is the comments are a bad system, to be used in emergencies and generally code should be self documenting 
ChatGPT said:
ChatGPT
It’s a good question to think about, as challenging conventional wisdom always carries some risk. However, being willing to argue that comments aren’t always beneficial—when done thoughtfully—could actually make your post stand out as bold and refreshing, especially if you address this topic with respect to why engineers do use comments.

Many engineers value comments, so here are some ways to ensure your point doesn’t come across as dismissive but rather as insightful and actionable:

1. Acknowledge Why Comments Are Valuable
Start by validating the reasons people rely on comments, like clarifying non-obvious logic, helping onboard new team members, and documenting edge cases or specific decisions. This shows you understand the other side and aren’t simply dismissing comments as unimportant.

You could say something like:

“Comments are an invaluable resource in many teams, often used to clarify complex logic, capture decisions that impact the code, or guide team members through intricate systems.”

2. Clarify When Comments Are Needed vs. When They Might Be Harmful
Explain that comments can add value in specific, targeted situations—e.g., explaining complex algorithms or documenting the rationale behind a surprising decision. However, over-relying on comments can create a “second system” where the comments and code diverge over time.

Point out that self-documenting code (using meaningful naming, modular design, etc.) creates fewer ongoing maintenance burdens, as it reduces the chance of information becoming out-of-sync. You might phrase this as:

“Comments can clarify complex or domain-specific logic, but when relied on too heavily, they can also become outdated or misleading, which can harm understanding more than help it. This is why emphasizing self-documenting code whenever possible can reduce the need for additional upkeep and make the code itself the single source of truth.”

3. Provide Practical Tips for Self-Documenting Code
Rather than just advocating for self-documenting code, provide concrete examples of how to achieve it. For instance, offer tips on naming conventions, avoiding overly complex logic, and breaking code into small, well-named functions. This way, you’re not simply saying “don’t use comments”; you’re offering a constructive alternative.

An example might be: “Choosing descriptive variable and function names, keeping functions small, and limiting layers of abstraction can all help your code read like the logic it represents. If it’s obvious from the name and structure, you need fewer comments overall.”
4. Address the Pragmatic Realities of Different Codebases
Some codebases—especially those dealing with legacy systems or very complex algorithms—may require comments because rewriting or restructuring isn’t feasible. Acknowledge this upfront. This nuance shows you’re not taking a black-and-white stance but instead encouraging a mindful approach to comments.

You might say: “In certain cases, particularly with legacy code or highly specialized algorithms, self-documenting code isn’t always realistic. In these cases, comments can be a lifeline for teams. The key is to evaluate carefully whether a comment adds enduring clarity or whether code structure can convey the intent directly.”
5. Summarize the Benefits of a Minimalist Commenting Approach as a Long-Term Win
Frame the self-documenting code approach as a way to improve readability and reduce technical debt over time. Highlight that while some upfront effort is required to write clear, self-explanatory code, the long-term benefits are worth it in terms of reduced maintenance and onboarding time.

“By making code more self-documenting, teams can reduce dependencies on comments and build more resilient, understandable systems. The initial investment in naming and structuring code pays off when future engineers can work directly with the code without needing extensive annotations.”

6. Add Some Personal Experience or Real-World Examples
If you have seen firsthand how code with excessive or outdated comments became confusing, that story could help make your point more relatable. It’s easier for readers to consider a new perspective when it’s grounded in real experiences rather than theory alone.

Ultimately, your post can argue against heavy use of comments without being dismissive by showing an understanding of why comments are used and offering self-documenting code as a positive alternative. Emphasizing that it’s not about getting rid of comments altogether but rather about achieving clear, maintainable code will come across as pragmatic and insightful rather than tone-deaf.

# Data Management With Information Systems

## Intro
What is an information system, why is concept useful?
What can readers expect to learn/think about. Why does my perspective matter?

As engineers, we need to make decisions about our applications. We can make better decisions when we have more information about our systems. For example, it helps to have logs when trying to debug a production incident, and knowing what changes to make to fix said issue, equally if we want to know which feature may be used the most. Based on the decision we make, we want to be able to observe the effects, and make further decisions. 

We can think of the systems that we retrieve and enter these bits of information into, as information systems. Once we acknowledge that we're retrieving and entering data into a system, we can see that they're databases in a sense. And as engineers, we can reason much better about databases.

Over this blog post, I'll try to go over my perspective on how these databases are used at different companies, and from this you should be able to understand how you may be able to update how you use a database to improve your (personal/team/company?) workflow.

## Databases

When building applications, we often use databases. These databases should be picked for the optimal usage, and then changed as and when the cost of maintaining the system is higher than the value being derived from it. This is true also for information systems. The questions that we need to answer of information systems are a superset of the questions we need to answer for tranditional databases, as some new questions arise.

For the purpose of consistency, i'll refer to db entries/rows/documents/key-value-pairs as entries.

when picking a single database, we have the following questions:

- data integrity
  - how reliable/accurate is the information? this should be our top concern when considering databases/information systems
- data maintainability
  - how much effort is it to Create entries
  - how much effort is it to Read an entry?
  - how much effort is it to Update an entry?
  - how much effort is it to Delete an entry?
- searchability
  - how easy is it to add indexes
  - how easy is it to use an index to search through the data, to get the entry with certain properties
- flexibility/data normalisation
  - is there a prescribed usage?
  - how easy is it to transition between different prescribed usages?
  - how easy is it to transition between different solutions of the same system. 
  - is it possible to automate the data normalisation?
  - is it possible to group related information?
- access control/security
  - how easy is it to grant access to the db?
  - how easy is it to add access control to the db?
  - how easy is it to obtain information you should not have access to?
  - how secure is the data being stored?
- redundancy
  - how much redundant data is being stored?
  - how easy is it to find redundant data?
- archive/delete policies
  - how easy is it to set up a clear archive/delete policy?
- extensibility?
  - is the db extensible if i want more columns
  - who has the power to extend the database?
  - will extending the database only affect the team that needs it?

when picking multiple databases, we naturally have more questions.

- data consisency
  - if data is duplicated, it should be updated in all places
  - how can we ensure data consistency
- referenciability
  - how easy is it to link between two systems?
  - is the link manual?
  - is the link programmatical?
  - how error prone is it?
  - is it possible to set a db level constraint?
- searchability
  - indexing on external primary keys
  - caching?
- data analysis 
  - usage of which systems
  - how to tell when system is not used for R, and only for C/U
- metrics
  - how effective is this system (is #R much higher or #C much higher)
  - search freq.
  - update freq.
  - user engagement
- structure useful, or not?
- user docs (and if user docs not read, delete it??)
- feedback loops on information systems?
- 
## Examples

### Git Commits 
### GH PRs
### Tracking Tools (Jira/Trello/Github Issues)
### Code
### Code Comments
### Wiki
### Historian
### Git search
### Communications (Slack/Email/Teams)
### Code Metrics (grafana/splunk/datadog)
### Cloud Provider APIs/UIs
### Direct DB queries
### Developer Tools
### Q/A Websites (e.g. Stackoverflow)
### Official Docs for libs/frameworks
### Recorded Meetings
### 
## Further Thoughts/Conclusions
### Keeping Primary Key of JIRA ID in the commit message