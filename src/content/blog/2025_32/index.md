---
title: "Dear Tech Job Hunters: You Keep Using Those Words. I Do Not Think They Mean What You Think They Mean"
description: "Wake-up call to tech graduates and professionals ."
publishDate: 2025-08-05
author: "Pouya Barrach-Yousefi"
---

![Princess Bride](./images/princessbride4.jpg)

Last week, I advised my umpteenth "AI Engineer" of the month. When I asked them to show me something they'd built with AI, they pulled up ChatGPT and typed a prompt. That was it. That was their demonstration of AI engineering expertise.

"You keep using that word," I wanted to say, channeling my inner Inigo Montoya. "I do not think it means what you think it means."

## The Great Disconnect: A Tale of Two Realities

Here's what happened. Somewhere between the classroom and the job market, an entire generation convinced themselves that knowing *about* something is the same as knowing *how to do* something. They throw around terms like "AI Engineer," "Agentic AI," and "Data Scientist" like they're Pokemon cards, collecting titles without understanding the game.

The numbers tell the story: Despite [2.5 million STEM graduates annually in India alone and 900,000 in the US](https://ncses.nsf.gov/pubs/nsb202332/international-comparisons-of-s-e-higher-education), we can't fill critical roles. Why? Because [only 12% of IT professionals actually possess the AI skills they claim to have](https://www.informationweek.com/it-leadership/the-ai-skills-gap-and-how-to-address-it).

Let me paint you a picture of what I see every day.

## The Parade of Paper Tigers

**The "AI Engineer" who's never deployed a model.** They can explain transformers and attention mechanisms, sure. But ask them to productionize a simple sentiment analysis model? Crickets. They've never heard of MLflow, don't understand model drift, and think "deployment" means running a Jupyter notebook on their laptop. CI/CD? That's a blank stare. "You mean I can't just email the model file to ops?" No, kid. No, you can't.

**The "Data Scientist" who's never cleaned real data.** They aced their statistics courses and can derive the math behind gradient descent. But hand them a 10GB CSV with missing values, inconsistent formatting, and duplicate records? They're lost. Worse, they can't tell me what this data actually means for the business. "What user actions affect these metrics?" I ask. Silence. "What decisions will stakeholders make based on this analysis?" More silence. They've never connected data to reality.

**The "Developer" who's never written a unit test.** They solved LeetCode problems for months, memorized every sorting algorithm, but have never written a single unit test. Automation? That's something other people do. They code like it's 2010, manually testing everything, oblivious to the fact that modern developers automate everything they touch. Their GitHub profile? Either empty or filled with forked tutorials they never touched.

**The "Graph Expert" who doesn't know RDF.** They put "Graph Databases" and "Knowledge Graphs" all over their resume. Neo4j? "Oh yeah, I've heard of it." But ask them about RDF, SPARQL, or ontologies? Blank stares. They think a knowledge graph is just any database with relationships. They've never built a proper triple store, never written a SPARQL query, never designed an ontology. They're not graph experts—they're people who once saw a picture with circles and arrows.

The kicker? [Computer science graduates face unemployment rates of 6.1-7.8%](https://www.entrepreneur.com/business-news/college-majors-with-the-lowest-unemployment-rates-report/491781) while we're desperate for talent. It's not a supply problem—it's a reality problem.

## The Tool Revolution They're Missing

And here's what really gets me: We're living in the golden age of AI-assisted development. Cursor is right there. MCP servers can automate half your workflow. Cline can write boilerplate faster than you can type. But what do I see in interviews?

They open VS Code—plain vanilla VS Code—and start typing. Every. Single. Character. By. Hand.

"Do you use any AI coding assistants?" I ask.
"Oh yeah, sometimes I ask ChatGPT for help."

I die a little inside.

Listen, if you're not using Cursor or similar tools to 10x your productivity, you're competing with developers who are. While you're typing out your 1000th for-loop, they've already built, tested, and deployed the entire feature. You're bringing a knife to a gunfight where everyone else has lightsabers.

## The "I'm Not Technical" Excuse Is Dead

And before you non-developers tune out thinking this doesn't apply to you—sit back down. We need to talk.

Last month, I interviewed a "Senior Business Analyst" who'd been working in tech for five years. Five. Years. I asked them to review a requirements document in our Git repository.

"Oh, I don't use Git. I'm not technical. I usually just email documents."

I'm not technical. In 2025. Working in tech. Using email for version control.

Another one: A project manager managing AI initiatives who'd never used any GenAI tools beyond asking ChatGPT to write their emails. A UX designer who manually creates every variation of their designs instead of using AI tools. A graphics designer still using Photoshop like it's 2010, completely unaware that Midjourney, DALL-E, and ComfyUI exist.

Let me be crystal clear: **If you work in tech—ANY role in tech—and you don't know Git, you're not qualified.** Period. I don't care if you're a business analyst, project manager, product owner, designer, or the coffee machine maintenance person. Git isn't "for developers." It's for anyone who creates anything that changes over time. Which is everyone.

And GenAI? If you're not GenAI-native by now, you're competing against people who are doing 5x the work in half the time. That business analyst who "isn't technical"? They're being replaced by one who uses Claude to analyze requirements, GitHub Copilot to write SQL queries, and automation tools to generate reports. That project manager? Outpaced by someone using AI to predict project risks, automate status reports, and generate meeting summaries.

The era of "I'm not technical" in tech is over. Dead. Buried. If you're still clinging to it, you're not just behind—you're obsolete.

## What These Words Actually Mean (Since You Asked)

Let me break it down for you, because apparently, nobody else will:

**AI Engineer:** Someone who can take a model from research to production. They understand infrastructure, monitoring, and scaling. They know the difference between training and inference optimization. They've set up CI/CD pipelines that automatically test, validate, and deploy models. They've actually deployed models that serve real users and stayed up at night when those models failed. If you think deployment means "save model.pkl and we're done," you're not an AI Engineer—you're a hobbyist.

**Data Scientist:** A detective who happens to use math. They don't just analyze data—they understand the business problem, design experiments, and communicate findings to non-technical stakeholders. They can tell you exactly which user actions influence the metrics, what external factors might skew the results, and most importantly, what decisions the business should make based on the analysis. They've presented to executives and changed company strategy based on their insights. If you can't explain why a 2% lift in conversion rate matters to the CFO, you're not a Data Scientist—you're a statistician.

**Agentic AI Specialist:** Someone who builds systems that act autonomously. They understand tool use, planning, and orchestration. They've implemented MCP (Model Context Protocol), built agent workflows, and debugged the inevitable chaos when agents do unexpected things. (Spoiler: If you had to Google "MCP" just now, you're not ready for this role.)

## The Entitlement Epidemic

Here's what kills me: [41.2% of recent graduates](https://www.newyorkfed.org/research/college-labor-market) are underemployed, yet they walk into interviews acting like they're doing me a favor. They haven't researched our company, can't articulate how they'd add value, and seem genuinely confused when I ask about their side projects.

"I have a degree," they say, as if that's supposed to impress me.

Meanwhile, the [average new grad requires 3-9 months to become productive and costs $20,000 per month during ramp-up](https://hackernoon.com/engineer-onboarding-the-ugly-truth-about-ramp-up-time-7e323t9j). You know what I need? Someone who can contribute in week one, not month nine.

## The GitHub Ghost Town

Want to know the first thing I check? Your GitHub. Not for the green squares—I don't care if you commit daily. I'm looking for evidence that you give a damn about this craft.

What do I usually find? Tumbleweeds. Or worse, a graveyard of forked repositories with zero original commits. You claim to be passionate about AI but have never contributed to an open-source project? Never built a tool to solve your own problem? Never shared knowledge with the community?

In India, [only 10% of 1.5 million engineering graduates are expected to find jobs](https://www.business-standard.com/finance/personal-finance/only-10-of-india-s-1-5-mn-engineering-graduates-set-to-secure-jobs-this-yr-124091600127_1.html). You know who's in that 10%? The ones with GitHub profiles that tell a story. The ones who built something because they couldn't sleep until they solved that problem.

## The Real Skills Desert

Let's talk about what's actually missing. You say you know AI, but:

- **Have you ever used MCP or agentic workflows?** I'm not talking about ChatGPT. I mean building systems where AI agents use tools, make decisions, and automate complex workflows.
- **Can you deploy a model to production?** Not on Hugging Face Spaces. I mean real production with monitoring, A/B testing, and rollback procedures. With actual CI/CD pipelines that don't require human intervention.
- **Have you written a unit test this year?** This decade? Ever? If your code coverage is 0%, you're not a developer—you're a typist who creates future problems.
- **Do you understand the craft?** This isn't about memorizing algorithms. It's about understanding that we're craftsmen building tools that impact millions of users. It's about automating everything that can be automated, testing everything that can break, and thinking about the business impact of every line of code.

[65% of technology leaders report significant skills gaps](https://www.synergisticit.com/tech-companies-not-hire-computer-science-graduates/), and it's getting worse. The demand for Large Language Model skills increased [3,600% in one year](https://www.ibm.com/think/insights/ai-skills-gap), yet most graduates' experience with LLMs stops at copying ChatGPT responses for their homework.

## What Actually Impresses Me (A Hiring Manager's Confession)

You want to know what makes me sit up in an interview? Here's the secret sauce:

**1. You did your homework.** You know what Pouya Data does. You've looked at our projects, understand our challenges, and come prepared with ideas. One candidate recently opened with, "I noticed your data pipeline processing times in your tech blog. I built a proof of concept that could reduce that by 40%." Hired.

**2. You're part of the community.** You attend meetups (virtual counts!). You've contributed to open source. You answer questions on Stack Overflow. You have opinions about the latest papers because you actually read them. You understand this is a craft, and craftsmen learn from each other.

**3. You build things.** Not for class, not for your resume—because you can't help yourself. Show me the Discord bot you built to automate your gaming group's scheduling. The script that scrapes your favorite recipe site. The model that predicts your commute time. I want to see you solve real problems.

**4. You work like it's 2025, not 2015.** You use Cursor for pair programming with AI. You've set up MCP servers to handle repetitive tasks. Your commits show you understand CI/CD. You write tests because you're professional, not because someone told you to. When I see your screen share, I should think "this person gets it," not "did their IDE time-travel from a decade ago?"

**5. You make my life easier.** Stop telling me what you want to learn. Tell me what you can do for me TODAY. Can you automate our testing? Improve our documentation? Build a dashboard for metrics we're tracking in spreadsheets? Be specific about the value you bring.

## The Brutal Truth About Modern Tech Hiring

Here's the reality: [Entry-level positions represent only 2.5% of tech job postings](https://www.techtarget.com/whatis/feature/Tech-job-market-statistics-and-outlook). For every opening, hundreds apply. The ones who succeed aren't the ones with the best GPAs—they're the ones who understand this fundamental truth:

**We don't need bodies. We need builders.**

The market has spoken with compensation. [AI-skilled workers see wages rising twice as fast](https://www.ibm.com/think/insights/ai-skills-gap) as others. MLOps Engineers average [$137,844 annually](https://www.testgorilla.com/blog/closing-tech-skills-gap/). But here's the catch—you need actual skills, not buzzwords.

## A Path Forward (If You're Brave Enough)

Look, I'm not heartless. I remember being young and clueless. But the difference is, when someone told me I was clueless, I did something about it. Here's your roadmap:

**Stop collecting certificates. Start building.** I don't care if you have a dozen Coursera certificates. Show me one thing you built that someone else actually uses.

**Join the community before you need a job.** The best time to network isn't when you're desperate. Contribute to open source. Attend meetups. Help others. The job offers will follow.

**Master the tools we actually use.** Learn Git properly. Understand Docker. Deploy something to the cloud. Use AI to build AI—if you're not using Cursor, Cline, or similar tools to accelerate your development, you're already behind. Set up MCP servers to automate your repetitive tasks. If you're still coding like it's 2015, you're not ready for 2025.

**Develop opinions.** Read papers, try frameworks, break things. Come to interviews ready to discuss why you prefer PyTorch over TensorFlow, or why you think RAG is overhyped. Show me you think about this stuff.

**Understand the business.** Tech skills are table stakes. Can you explain ROI? Do you understand why we measure what we measure? Can you connect your work to business outcomes?

## The Bottom Line

The tech industry faces a [$5.5 trillion loss by 2026](https://my.idc.com/getdoc.jsp?containerId=prUS52128824) due to skill shortages. That's not because we lack graduates—it's because we lack graduates who understand what we actually need.

You want to stand out? Stop being a "recent graduate looking for opportunities to learn and grow." Start being a "builder who solves problems and happens to be early in their career."

The choice is yours. You can join the [41.2% who are underemployed](https://www.newyorkfed.org/research/college-labor-market), blaming the market and complaining about unfair requirements. Or you can join the builders, the craftsmen, the ones who understand that "AI Engineer" isn't a title you claim—it's a skill set you demonstrate.

Next time you apply for a job, ask yourself: Am I selling what they're buying? Or am I just another person using words I don't understand, hoping someone won't notice?

The market has already decided. The question is: What are you going to do about it?

---

*P.S. - If you read this and thought, "This guy's a jerk," you're missing the point. If you read this and thought, "I need to build something tonight," send me your GitHub link in six months. We'll talk.*
