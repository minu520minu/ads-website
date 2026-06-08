/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { 
  motion, 
  AnimatePresence 
} from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft,
  Globe, 
  Zap, 
  BarChart3, 
  Users, 
  ChevronRight,
  Menu,
  X,
  Target,
  Search,
  MessageSquare,
  TrendingUp,
  Award,
  CheckCircle2,
  Calendar,
  Sparkles,
  BarChart,
  Layout,
  ExternalLink,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  ChevronDown,
  Plus,
  Check,
  Smartphone,
  Type,
  CheckCircle,
  Star,
  PenTool
} from 'lucide-react';

// --- Types ---

type ViewState = 'home' | 'chinese-marketing' | 'case-studies' | 'case-detail' | 'free-seo-audit' | 'insights' | 'insight-detail';

interface Article {
  id: string;
  category: string;
  title: string;
  desc: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
}

const INSIGHTS_ARTICLES: Article[] = [
  {
    id: 'beyond-wechat-rednote',
    category: 'Chinese Market',
    title: 'Beyond WeChat: The Hidden Potential of Rednote (Xiaohongshu)',
    desc: 'Why North American brands are seeing 3x higher engagement on Rednote compared to Instagram.',
    date: 'April 2026',
    readTime: '4 min read',
    image: 'https://i.guim.co.uk/img/media/7c9ac3c25d0e8ab755c86c147ca9a6bccc31ce24/0_0_6888_4592/master/6888.jpg?width=465&dpr=1&s=none&crop=none',
    content: `If you are trying to reach Chinese consumers in North America, chances are someone has already told you to get on WeChat. And they are not wrong. WeChat is essential. But if that is the only platform you are using, you are leaving a significant opportunity on the table.

Rednote, also known as Xiaohongshu or Little Red Book, is the platform where Chinese consumers actually discover new brands. And most North American businesses have never even heard of it.

**What Is Rednote?**

Think of Rednote as Instagram and Google combined into one app. People use it to search for restaurant recommendations, find out if a skincare product is worth buying, discover new fashion brands, and share their honest experiences with just about everything.

The key word there is honest. Unlike Instagram, where your feed is full of polished advertising and sponsored content, Rednote is built around genuine peer reviews. Real people sharing real opinions. When a product is good, the community talks about it. When it is not, they talk about that too.

This matters enormously for brands because trust drives purchases. And on Rednote, trust is everything.

**Why It Works Better Than Instagram for Reaching Chinese Audiences**

When you run ads on Instagram targeting Chinese audiences, you are competing with every other brand on the platform for a few seconds of attention. The audience is passive. They are scrolling and your ad appears whether they want it or not.

On Rednote, the dynamic is completely different. Chinese consumers are actively searching. They type in "best moisturiser for dry skin" or "good Italian restaurant in Vancouver" and they are looking for answers. If your brand shows up in those search results with authentic content, you are reaching someone who is already in buying mode.

That is why brands consistently see 3x higher engagement on Rednote compared to Instagram for Chinese market campaigns. The audience is not just scrolling past. They are genuinely looking for what you are offering.

**Three Things You Need to Know Before Getting Started**

First, you need a verified brand account. Without verification, you cannot run ads or access analytics. The process takes a few weeks and requires specific documentation, but it is worth doing properly from the start.

Second, organic content comes before paid advertising. Before you spend a single dollar on ads, post 20 to 30 genuine, helpful pieces of content about your product or service. Think guides, how-to posts, and real use-case examples. This gives the platform's algorithm something to work with and builds credibility before you start promoting.

Third, smaller creators outperform bigger ones on this platform. A food blogger with 12,000 highly engaged local followers will drive more real purchases than a celebrity influencer with 500,000 followers. On Rednote, trust beats reach every time.

**Who Should Be on Rednote Right Now**

If your brand sells anything in beauty, skincare, food, fashion, lifestyle, health, home decor, or local services and you want to reach Chinese consumers in Toronto, Vancouver, Los Angeles, New York, or San Francisco, Rednote should be a core part of your strategy today.

The brands building their presence now are setting themselves up for a significant long-term advantage. The brands that wait will find the space considerably more competitive and considerably more expensive.

WeChat keeps you connected to your existing community. Rednote helps new customers find you. You need both.`
  },
  {
    id: 'website-visibility-google',
    category: 'SEO & Content',
    title: 'Why Your Website Is Not Showing Up on Google (And How to Fix It)',
    desc: 'The most common SEO mistakes small businesses make, and what to do about them.',
    date: 'April 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1616499452581-cc7f8e3dd3c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `You have a great business and a decent website. But when you search for what you do on Google, you are nowhere to be found. Your competitors are showing up. You are not. What is going on?

The frustrating truth is that most small and medium-sized businesses are making the same handful of SEO mistakes. The good news is that most of them are fixable without a technical background or a large budget.

**Mistake 1: Your Website Does Not Say What You Actually Do**

This sounds obvious, but it is the most common problem we see. A business will have a homepage that says something like "Welcome to our family-owned company committed to excellence" and nothing else above the fold.

Google needs clear signals to understand what your business does, who it serves, and where it operates. Your homepage should state your service, your city, and your customer in plain language. "Toronto-based Italian catering for corporate events and weddings" tells Google exactly what you are. "Excellence in every bite" tells Google nothing.

Fix it by writing a clear headline on your homepage that includes what you do and where you are located. Simple and direct always beats creative and vague when it comes to SEO.

**Mistake 2: You Are Ignoring Google Business Profile**

For local businesses, your Google Business Profile is more important than your website for driving foot traffic and calls. It is what shows up in Google Maps and the local results section.

Many businesses either have not claimed their profile or have filled it in partially and forgotten about it. Incomplete profiles rank lower and convert worse.

Spend one hour on your Google Business Profile this week. Make sure your hours, phone number, photos, and service descriptions are complete and accurate. Then ask your most recent satisfied customers to leave a review. Reviews are one of the strongest local ranking signals Google uses.

**Mistake 3: You Have No Content That Answers Real Questions**

When people search on Google, they are usually looking for an answer to a question. "Best sushi in Markham." "How much does a kitchen renovation cost in Calgary." "What to wear to a business casual interview."

If your website has no content that answers the questions your potential customers are asking, you will not appear for those searches. It is that straightforward.

You do not need a complicated content strategy to fix this. Start by writing one blog post or FAQ page that answers the three most common questions your customers ask you in person. Real answers to real questions. That alone will start generating organic traffic for long-tail searches your competitors are ignoring.

**Mistake 4: Your Website Is Too Slow on Mobile**

More than half of all Google searches happen on a mobile phone. If your website takes more than three seconds to load on a phone, a significant percentage of your visitors will leave before they see anything. Google knows this and factors page speed into rankings.

Test your site at Google PageSpeed Insights (it is free). If your mobile score is below 50, this is likely hurting your rankings. The most common fix is compressing your images, which a developer can usually do in under an hour.

**The One Thing to Do This Week**

If you only take one action from this article, let it be this: Google your own business by searching for what you do plus your city. See who shows up above you. Then look at their website and notice what they are doing that you are not.

Most of the time, the gap is not complicated. They have clearer language, more complete Google profiles, and a few pieces of content that answer real questions. All of that is fixable, and none of it requires a large budget.`
  },
  {
    id: 'kol-vs-koc-trust',
    category: 'Influencer Marketing',
    title: 'KOL vs KOC: Why Smaller Influencers Are Driving Bigger Results',
    desc: 'The shift from big name creators to everyday community voices in the North American market.',
    date: 'March 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1517605817225-1a38c494d974?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5mbHVlbmNlcnxlbnwwfDB8MHx8fDI%3D',
    content: `For years, the logic of influencer marketing was simple: bigger following equals bigger results. If you could get a creator with a million followers to post about your product, a million people would see it. The math seemed to work.

In 2026, that model is broken. And the brands that have figured out what replaced it are getting dramatically better results for less money.

**The Difference Between a KOL and a KOC**

A KOL, or Key Opinion Leader, is a professional content creator. Their full-time job is building an audience and posting content. They are polished, consistent, and experienced at integrating brand partnerships into their feed.

A KOC, or Key Opinion Consumer, is just a regular person who happens to have a social following. They have a few thousand followers who are mostly people they actually know or who share a very specific interest. They post about products because they genuinely want to, not because it is their job.

The reason KOCs are outperforming KOLs right now comes down to one thing: trust. Audiences have become very good at recognising when a creator is being paid to say something positive. A polished post from a large influencer often feels like an ad, because it is. A genuine post from someone who feels like a real person feels like a recommendation from a friend.

**The Numbers Make the Case**

A single macro-influencer post might cost $10,000 to $20,000 and reach 500,000 people with an engagement rate of around 1% to 2%. Plenty of impressions. Not much actual buying behaviour.

The same budget spread across 30 to 40 micro-KOCs, each with 3,000 to 20,000 highly engaged followers, typically generates comparable total reach, engagement rates of 6% to 12%, and content that continues surfacing organically for months after the campaign ends. The conversion rate is higher because the recommendation feels genuine.

This is especially true in the Chinese community market. Platforms like Rednote and WeChat are fundamentally built around community trust. A genuine recommendation from a real community member carries enormous weight. A polished sponsored post from a large creator is often scrolled past entirely.

**How to Find the Right KOCs for Your Brand**

You are not looking for people with large followings. You are looking for people who genuinely love your category and whose community clearly trusts them.

Search your product category on Rednote or Instagram and look for posts that have genuine engagement. Not just likes, but comments where people are asking follow-up questions or sharing their own experiences. Those are the creators you want.

Reach out simply and honestly. Send them your product. Tell them you would love their genuine opinion. Do not write a script. Do not demand a specific angle. The authenticity of their response is the entire point.

The brands winning at influencer marketing right now are not the ones with the biggest budget. They are the ones with the most genuine community presence, built one real recommendation at a time.`
  },
  {
    id: 'facebook-ads-fatigue',
    category: 'Advertising Strategy',
    title: 'Why Your Facebook Ads Seem to Stop Working (And What to Do About It)',
    desc: 'Understanding ad fatigue, audience saturation, and how to keep your campaigns performing.',
    date: 'February 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=1200',
    content: `You launch a Facebook or Instagram campaign and the first two weeks are great. Your cost per click is low, your cost per purchase is profitable, and you start scaling your budget. Then somewhere around week three or four, everything starts going in the wrong direction. The cost per click rises. The cost per purchase climbs. The results that looked so promising start looking worrying.

This is one of the most common problems in paid social advertising, and it has a name: ad fatigue. Understanding why it happens and how to prevent it will save you a significant amount of money.

**What Is Ad Fatigue?**

Ad fatigue happens when the same people see the same ad too many times. They stop engaging with it. They start ignoring it. Sometimes they even hide it or mark it as irrelevant, which tells Facebook's algorithm the ad is not worth showing.

Facebook tracks something called frequency, which is the average number of times each person in your target audience has seen your ad. When frequency rises above three or four, engagement typically starts to drop and costs start to rise.

The smaller your target audience and the higher your budget, the faster this happens. A highly targeted audience of 50,000 people and a $500 per day budget will saturate very quickly.

**Fix 1: Refresh Your Creative Regularly**

The single most effective solution to ad fatigue is changing what your ads look like on a regular basis. New images, new videos, new hooks, new angles on the same product. The audience has not changed. What they are seeing has.

As a general rule, if your frequency is above three and your costs are rising, it is time for new creative. Build a process where you are producing new ad content at least once or twice per month so you always have fresh material ready to rotate in.

**Fix 2: Expand Your Audience**

If you are targeting a very narrow audience, you will saturate it faster. One of the most effective ways to extend campaign life is to introduce lookalike audiences built from your best customers.

Upload your customer list to Facebook and create a 1% to 3% lookalike audience of people in your target geography who share similar characteristics to your existing buyers. This gives you a fresh audience that has not seen your ads before and is statistically likely to respond well.

**Fix 3: Test Different Messaging Angles**

Often the issue is not just the visual but the angle of the message. If you have been running ads focused on the product features, try ads focused on the customer result. If you have been showing the product in a studio, try showing it in real use. Different messages resonate with different people, and testing gives you data on what works rather than assumptions.

**The Bigger Picture**

Ad fatigue is normal. It happens to every campaign eventually. The brands that maintain consistently strong paid social performance are not the ones who found a magic ad that never gets tired. They are the ones who have built a system for continuously testing and refreshing creative so there is always something new and relevant to show their audience.

If your ads are declining, the answer is almost never to turn them off and give up. The answer is usually a new creative with a fresh angle. Test it, and the results will often come back.`
  },
  {
    id: 'grow-into-new-market',
    category: 'Growth Strategy',
    title: 'How to Grow Your Business Into a New Community Market Without Starting Over',
    desc: 'A practical guide for brands ready to expand into ethnic and cultural consumer segments.',
    date: 'January 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    content: `You have a business that is working. You have customers, a brand, and a product or service worth paying for. Now you want to grow. One of the most underused growth strategies available to North American businesses right now is expanding into specific cultural consumer communities, and one of the most accessible of those is the North American Chinese market.

The question most business owners ask at this point is: do I need to build a completely separate brand? The answer is no. But you do need to think about your expansion differently from how you would approach any other marketing channel.

**Why Cultural Communities Are Such a Good Growth Opportunity**

The North American Chinese market, which includes approximately 7.2 million consumers across Canada and the United States, represents an estimated $150 billion or more in annual purchasing power. Despite this, the number of mainstream North American businesses actively and thoughtfully marketing to this community is surprisingly small.

That gap creates an unusual opportunity. In the general market, you are competing against hundreds of other businesses for every customer's attention. In a cultural community where very few competitors have bothered to show up, the first business to show up well often captures a disproportionately large share of the market and earns strong word of mouth that continues driving growth for years.

**The Key Insight: You Are Not Translating. You Are Adapting.**

The most common mistake businesses make when expanding into cultural markets is treating it as a translation project. Take the existing marketing materials, translate them into Mandarin, post them on WeChat, and wait.

This rarely works. It often backfires.

Chinese consumers, like consumers in any community, respond to content that feels made for them, not content that was made for someone else and converted. The message, the tone, the cultural references, and the platform need to feel native to the community.

This does not mean you need to reinvent your brand. It means your brand's story needs to be told through a cultural lens that resonates with this specific audience. A restaurant that emphasises family, heritage, and shared meals will land very differently with Chinese consumers if the family story is told in a way that connects to Chinese family values, not just translated from English.

**Three Practical Starting Points**

Start by understanding where your target community spends its time online. For Chinese consumers in North America, that means WeChat for communication and community, Rednote for discovery and recommendations, and TikTok and Instagram for the younger and more acculturated segment. Being on the right platforms matters more than having the perfect message.

Find two or three community members or micro-influencers who genuinely like your product and let them talk about it in their own voice. Authentic community recommendations are the most powerful form of marketing in tight-knit cultural communities. One genuine recommendation from a trusted community voice is worth more than a month of translated advertising.

Invest in one cultural moment before anything else. Chinese New Year, Mid-Autumn Festival, and Singles Day are three of the highest consumer spending periods of the year. A well-executed campaign around any one of these events, even a simple one, will generate far more visibility and goodwill than a generic campaign with no cultural context.

**The Long-Term View**

Cultural community marketing builds differently from general market advertising. It is slower to start and faster to compound. In the first few months, you are building presence and trust. By month six, word of mouth begins to do significant work on your behalf. By year two, you may find that the Chinese consumer segment has become one of your most reliable and highest-value customer groups.

The brands that start now will own the relationship. The brands that wait will pay much more to earn the same ground later.`
  },
  {
    id: 'website-hurting-rankings',
    category: 'SEO & Content',
    title: 'Is Your Own Website Hurting Your Google Rankings?',
    desc: 'How too much low-quality content can drag down your entire site\'s performance.',
    date: 'January 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1674027326238-8a505791cdea?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `Here is something that surprises most business owners when they hear it: removing pages from your website can improve your Google rankings.

It sounds backwards. More content means more chances to be found, right? Not always. In fact, having a lot of low-quality or outdated content on your site can actively work against you.

**How Google Evaluates Your Website**

Google does not just look at each page on your site individually. It also forms an overall impression of your website's quality based on everything you have published. Think of it like a restaurant with a menu of 200 items. A few are great. Most are average. Some are bad. The overall impression is mediocre, because the weak items drag down the perception of the whole experience.

When a significant portion of your website's pages are outdated, thin, or not useful to anyone searching, Google's assessment of your whole site can suffer. This can suppress your better pages from ranking as highly as they should, even when those pages are genuinely good.

**What Low-Quality Content Actually Looks Like**

You might be thinking your website does not have this problem. But low-quality content is more common than most people realise. It includes blog posts from several years ago that contain outdated information. It includes pages that were created to target specific search keywords but that do not actually say anything useful. It includes duplicate pages covering the same topic with slightly different wording.

If your website has been around for more than three years and you have been adding content regularly without ever removing or updating anything, there is a good chance you have content that is hurting more than helping.

**The Simple Audit You Can Do Right Now**

Open Google Search Console, which is a free tool Google provides for website owners. Go to the Performance section and look at your pages sorted by impressions over the past 12 months. Look for pages that have received almost no impressions and almost no clicks in the past year.

For each of those pages, ask yourself honestly: does this page help anyone? Does it answer a genuine question? Does it say something useful that is not better said elsewhere on my site?

If the answer is no, you have three options. Update the page with genuinely useful, current information. Combine it with a related page that covers the same topic better. Or remove it entirely and redirect anyone trying to visit it to a more useful page.

**The Result**

When businesses go through this process and clean up their low-performing content, they typically see the ranking performance of their remaining pages improve within 60 to 90 days. Google's overall assessment of the site improves, and the good content rises.

More is not always more in SEO. Better is always better. And sometimes getting to better requires letting go of what is not working.`
  },
  {
    id: 'bilibili-opportunity-tech',
    category: 'Chinese Market',
    title: 'Bilibili: The Platform North American Tech and Gaming Brands Are Missing',
    desc: 'Why China\'s version of YouTube is a huge untapped opportunity for the right brands.',
    date: 'December 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
    content: `When most North American brands think about reaching Chinese consumers, the conversation centres on WeChat and Rednote. These are the right starting points for most categories. But if your brand is in technology, gaming, software, consumer electronics, or anything that benefits from in-depth demonstration and explanation, there is a platform you are almost certainly overlooking. That platform is Bilibili.

**What Is Bilibili?**

Bilibili is China's equivalent of YouTube, but with a very specific and extremely valuable audience. It started as an anime and gaming community and has grown into the dominant long-form video platform among young, educated, tech-savvy Chinese consumers.

The key word there is long-form. While TikTok and Douyin are built for 15 to 60 second clips, Bilibili's content regularly runs 10, 20, and 30 minutes or longer. The audience does not just tolerate this. They expect it. They come to Bilibili specifically to learn things in depth: product reviews, tutorials, technical comparisons, gaming walkthroughs, and detailed explorations of topics they care about.

This makes Bilibili fundamentally different from every other platform in the Chinese digital ecosystem, and it makes it ideal for brands with complex or high-consideration products.

**Why Long-Form Video Matters for Tech and Gaming Brands**

If you sell a piece of software, a gaming peripheral, a consumer gadget, or any product where the value is not immediately obvious in a quick glance, short-form video puts you at a serious disadvantage. You cannot explain why your product is meaningfully better than a competitor in 30 seconds.

On Bilibili, you do not have to. A 15-minute honest product review, a 20-minute tutorial showing exactly what your software can do, or a detailed side-by-side comparison with competing products are all content formats the Bilibili audience actively seeks out and engages with deeply.

Bilibili's users are also among the most influential consumers within the North American Chinese community. They tend to be students and young professionals in technology and business fields. They are early adopters. They share recommendations in WeChat groups and write reviews on Rednote. Reaching them on Bilibili often creates a ripple effect across multiple platforms.

**How to Get Started Without Overcomplicating It**

The simplest entry point is through creator partnerships. Bilibili has established content creators in every tech and gaming subcategory who have spent years building trust with exactly the right audience. Partnering with two or three of them for in-depth, honest coverage of your product will generate far more credibility than a brand-produced ad ever could.

When selecting creators, prioritise the depth and quality of their content over their subscriber count. A creator with 60,000 highly engaged subscribers who produces thorough, well-researched reviews will deliver more value than a creator with 400,000 subscribers whose content has become more entertainment than information.

You can also create a brand channel and post genuinely useful content: tutorials, product deep-dives, and honest discussions of what your product does well and where it has limitations. Bilibili's audience respects transparency and rewards it with long-term loyalty.

**The Timing Advantage**

Almost no North American tech or gaming brands have a meaningful Bilibili presence today. That will change over the next two to three years as more brands discover the platform. The brands that move now will build community authority while the space is still open. The brands that wait will spend considerably more to achieve the same result in a much more competitive environment.`
  },
  {
    id: 'stop-obsessing-roas',
    category: 'Advertising Strategy',
    title: 'Why You Should Stop Obsessing Over Your Ad Platform\'s ROAS Number',
    desc: 'The metric your dashboard shows you and the metric that actually matters are often very different things.',
    date: 'November 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1625296276703-3fbc924f07b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `Return on ad spend, known as ROAS, has become the default scorecard for digital advertising. Most business owners and marketing teams look at their Meta or Google dashboard, see their ROAS number, and use it to decide whether their campaigns are working. Higher ROAS means good campaigns. Lower ROAS means bad campaigns. Cut the bad ones. Scale the good ones.

The problem is that the ROAS number your ad platform shows you is not measuring what you think it is measuring. And making budget decisions based on it can quietly damage your business over time.

**Why Platform ROAS Is Not the Whole Story**

When someone clicks your ad and makes a purchase, the platform records that as a conversion attributed to your campaign. The ROAS is calculated by dividing the revenue from those attributed conversions by the amount you spent.

But here is what the platform cannot tell you: would those people have bought anyway, even without seeing your ad?

Retargeting campaigns, which show ads to people who have already visited your website, typically report very high ROAS numbers. This makes them look like your best-performing campaigns. But many of those people were already planning to come back and buy. Your ad appeared in their feed just before they did something they were going to do regardless. The platform gives your campaign full credit for a sale that was already going to happen.

Meanwhile, your brand awareness campaigns, which introduce your product to people who have never heard of you, often show low or unpredictable ROAS. They look like they are not working. But they are filling the top of the funnel with the new customers who will become your retargeting audience next month. Cut them and your retargeting campaigns will eventually run out of people to convert.

**The Simple Test That Reveals the Truth**

The most honest way to measure whether a campaign is actually working is called an incrementality test, and a simple version of it requires no technical expertise.

Take your retargeting audience and split it in half randomly. Show ads to one half and show nothing to the other half for two weeks. At the end of the two weeks, compare the conversion rate of the group that saw the ads to the group that did not. The difference between the two groups is your actual incremental lift, meaning the purchases that genuinely happened because of your advertising that would not have happened otherwise.

Most businesses that run this test for the first time are surprised by the results. Retargeting campaigns that looked highly efficient in the dashboard often show modest actual lift, because a large percentage of those conversions were going to happen anyway. Brand awareness campaigns that looked inefficient often show strong actual lift, because the new customers they bring in would not have found the business without them.

**What to Do With This Information**

You do not need to abandon your ROAS tracking. It is still a useful directional signal. But treat it as one input among several rather than the single measure of whether your advertising is working.

Test your best-performing campaigns with an incrementality split at least once every few months. The results will almost certainly change how you allocate your budget, usually by investing more in awareness and brand-building and slightly less in retargeting campaigns that are efficiently converting buyers who were already convinced.

Also look at the overall picture rather than campaign by campaign. The right question is not "what is the ROAS of this specific campaign" but "is our total investment in advertising generating more revenue than it costs, and are we growing the number of new customers who enter our world each month?" Those two questions will lead you to better decisions than the dashboard number alone ever can.`
  },
  {
    id: 'chinese-new-year-campaign',
    category: 'Chinese Market',
    title: 'How to Run a Chinese New Year Campaign That Actually Works',
    desc: 'Most brands show up with red and gold graphics. Here is how to do it properly.',
    date: 'May 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1579626362137-b6d68a1ebba6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmVzZSUyMG5ldyUyMHllYXJ8ZW58MHwwfDB8fHwy',
    content: `Chinese New Year is the single largest consumer spending event in the Chinese community calendar. Families buy new clothes, give gifts, book restaurant meals, redecorate their homes, and treat themselves to experiences they save for this time of year. For North American brands, it is the single best opportunity to make a meaningful first impression with Chinese consumers.

And yet most brands get it completely wrong.

The most common mistake is treating Chinese New Year as a visual exercise. Change the banner to red and gold. Add some lantern graphics. Write "Happy Lunar New Year" in English with a small Chinese subtitle. Post it on Instagram. Done.

This approach does not resonate with Chinese consumers. It signals that the brand noticed the holiday exists but did not bother to understand what it actually means. The community has seen enough of these posts to recognise them immediately for what they are: performative rather than genuine.

Here is what a campaign that actually works looks like instead.

**Start With the Emotional Core**

Chinese New Year is fundamentally about family, reunion, renewal, and good fortune. It is one of the most emotionally significant times of the year for Chinese families, particularly for those living far from extended family in mainland China. The emotional resonance of the holiday runs deep.

Your campaign should connect to one of these core themes in a way that is authentic to your brand. A food brand can lean into the family gathering theme. A home brand can connect to the idea of renewal and starting fresh. A beauty brand can align with the concept of presenting your best self for a new year. The connection should feel earned, not forced.

**Timing Is Everything**

Most brands that run Chinese New Year campaigns post something on the day of Chinese New Year itself, which is roughly equivalent to running a Christmas campaign on December 25th. By that point, the buying decisions have already been made.

The preparation period, known as Little New Year, begins two weeks before the main celebration. This is when Chinese consumers are actively shopping for gifts, food, clothing, and home items. Your campaign should be live and generating awareness at least three weeks before the Lunar New Year date.

The celebration itself extends for 15 days, ending with the Lantern Festival. Each part of the period has its own traditions and spending patterns. A campaign that runs only on New Year's Day misses the entire purchasing window on both sides.

**The Platforms That Matter Most**

For Chinese New Year specifically, WeChat and Rednote are your most important channels. WeChat is where Chinese Canadians send red envelopes to each other digitally, share family updates, and discuss where to spend and celebrate. Being present on WeChat during this period with relevant, culturally aware content positions your brand inside the conversation rather than outside it.

Rednote is where gift ideas, restaurant recommendations, and product discoveries are shared ahead of the holiday. A well-placed KOL post on Rednote in early January can drive significant search traffic to your brand for weeks leading up to the celebration.

Meta and Google ads targeting Chinese-language audiences are also effective for driving direct purchases during the shopping period. Bilingual creative, with a genuine translation rather than machine-translated copy, significantly outperforms English-only creative for this audience.

**What to Actually Offer**

Chinese New Year is a gifting occasion. Limited edition packaging, gift sets, and bundle offers are highly effective during this period. Red packaging is genuinely appreciated, not because Chinese consumers expect every brand to go red, but because red is the colour of celebration and good fortune and it signals that the brand has made a real effort.

Avoid the number four in any pricing, quantities, or groupings. The word for four in Mandarin sounds like the word for death and is considered deeply unlucky. This is not superstition to be dismissed. It is a genuine cultural sensitivity that any brand serious about this market should know and respect.

Lean into the concept of good fortune in your messaging. Words and phrases associated with prosperity, health, family harmony, and success are genuinely resonant during this period in a way they would not be at other times of year.

**The Long-Term View**

Brands that run a genuine, well-executed Chinese New Year campaign for the first time almost always report that it becomes one of their highest-performing seasonal campaigns. More importantly, it builds the kind of community goodwill that pays back far beyond the two-week holiday window.

Chinese consumers have long memories for brands that respected their culture and equally long memories for brands that did not.`
  },
  {
    id: 'wechat-getting-started-guide',
    category: 'Chinese Market',
    title: 'WeChat for Local Businesses: A Practical Getting-Started Guide',
    desc: 'You do not need a large budget or a tech team. Here is how to set up WeChat and start reaching local Chinese customers.',
    date: 'May 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1611746869696-d09bce200020?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `The most common reason North American businesses never get started on WeChat is not budget. It is confusion. WeChat is a fundamentally different platform from anything most Western marketers have used before, and the registration process for non-Chinese businesses has enough steps that most people give up before completing it.

This guide exists to remove that confusion. If you run a local business and want to reach Chinese customers in your city, here is exactly what you need to do.

**What WeChat Actually Is**

WeChat is not just a messaging app. For Chinese consumers, WeChat is the internet. It is where they message family and friends, read news, pay for things, discover restaurants, follow brands, and book appointments. Over a billion people use WeChat monthly, and the Chinese community in North America uses it as their primary communication platform regardless of how long they have lived here.

A WeChat Official Account is the business version of the platform. Think of it as a combination of a Facebook Page, an email newsletter, and a mini website all inside one app. When someone follows your Official Account, you can send them content directly, they can contact you through the platform, and you can run promotions exclusively for your WeChat audience.

For a local business trying to reach Chinese customers, a well-maintained WeChat Official Account is more valuable than almost any other digital asset.

**The Two Types of Official Accounts**

WeChat offers two types of Official Accounts for businesses: Subscription Accounts and Service Accounts.

Subscription Accounts allow you to send one message per day to your followers. They appear in a dedicated folder in the user's chat list rather than in the main chat feed. These are better for content-heavy brands like media, restaurants sharing daily specials, or any business that wants to publish regular updates.

Service Accounts send messages that appear directly in the user's main chat list, which gives them significantly higher visibility. You can only send four messages per month with a Service Account. They also unlock more advanced features like WeChat Pay integration and mini program capabilities. For most local businesses, a Service Account is the right choice.

**How to Register**

The registration process requires a few things that often catch North American businesses off guard. You need a valid business registration document, a business email address that does not use a free email provider, a local phone number for verification, and a payment of approximately $99 USD for the annual account fee.

The interface for registration is primarily in Chinese. If you do not read Mandarin, this is where most businesses stall. You have two options. You can use a browser translation extension to navigate the process, or you can work with an agency or consultant who has done this before and can handle the setup for you. If your business is serious about the Chinese market, the second option saves significant time and avoids common registration errors that can delay your account approval by weeks.

Approval typically takes two to four weeks after submitting your documentation.

**Your First 30 Days**

Once your account is approved, resist the urge to immediately start promoting your business. The first 30 days should be focused on building a content foundation.

Post three to five pieces of content before you invite anyone to follow you. These posts should introduce your business, tell your story, and give followers a reason to care. Chinese consumers are highly attuned to whether a brand is genuinely trying to connect with their community or simply selling at them. Content that tells a real story always outperforms content that leads with a promotion.

The content itself should be bilingual where possible. A mix of Chinese-primary and Chinese-English content works well for North American Chinese audiences, who span a range of language preferences from recent newcomers who prefer Chinese to second-generation community members who are comfortable in both languages.

**Growing Your Following**

The most effective way to grow your WeChat following as a local business is through offline conversion. Put a QR code linking to your Official Account at your point of sale, on your packaging, on your receipts, and on any printed materials. When a Chinese customer is in your store or restaurant, they are the perfect person to follow your WeChat account right there and then.

Run a simple incentive for following: a discount on the next visit, a free item, or entry into a giveaway. Chinese consumers are very comfortable with WeChat-based promotions and respond well to them.

A KOL partnership or a mention from a community influencer can also generate a burst of followers quickly. One well-placed recommendation from a trusted Chinese community voice can add hundreds of genuinely engaged followers to your account overnight.

**The Bottom Line**

WeChat setup takes time and effort upfront. But once your account is established and you have a small, engaged following, you have a direct communication channel to Chinese customers that no algorithm can take away. Your messages land directly in their chat list. No ad spend required.

For a local business, that is an exceptionally valuable asset.`
  },
  {
    id: 'chinese-consumer-trust-reviews',
    category: 'Chinese Market',
    title: 'Why Chinese Consumers Trust Reviews More Than Ads (And What to Do About It)',
    subtitle: 'Understanding the trust economy of the Chinese community is the key to unlocking it.',
    date: 'April 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `If you have tried running standard digital ads to reach Chinese consumers and found they underperform compared to your general market campaigns, you are not alone. It is a common experience and it almost always comes down to the same root cause. Chinese consumer culture is built on community trust, and community trust cannot be bought with a display ad.

Understanding why this is the case, and what to do about it, is the difference between a Chinese market strategy that produces results and one that spends money without moving the needle.

**The Community Trust Dynamic**

Chinese consumer culture places enormous weight on peer recommendation. Before trying a new restaurant, buying a new product, or choosing a service provider, Chinese consumers are far more likely to consult their WeChat groups, search Rednote for reviews from people they relate to, or ask family and friends than they are to respond to paid advertising from a brand they do not yet know.

This is not scepticism of advertising in general. It is a cultural prioritisation of social proof over brand claims. The logic is straightforward: a brand will always say its product is excellent. What matters is whether real people who have actually used the product agree.

On platforms like Rednote, this dynamic is built into the architecture of the app. The most visible and most-shared content is genuine user reviews, not brand advertising. The algorithm explicitly favours authentic community content over polished promotional material. You cannot buy your way to the top of Rednote's feed the way you can on other platforms.

**What This Means for Your Strategy**

The practical implication is that your Chinese market strategy needs to invest in building social proof before, or at minimum alongside, any paid advertising.

Social proof in the Chinese community context means a few specific things. It means having a presence on the platforms where Chinese consumers do their research, particularly Rednote and WeChat, so that when someone searches for your category they find genuine content about your brand. It means having real reviews from real Chinese customers that community members can find and trust. And it means having at least a few KOC or micro-KOL voices in relevant community niches who have talked about your product genuinely.

Once that foundation exists, paid advertising becomes significantly more effective. A Chinese consumer who sees your ad after having already encountered your brand through community content is in a completely different state of receptivity than someone seeing you for the first time through an ad.

**The Review Acquisition Strategy**

Getting your first Chinese-language reviews requires a deliberate effort. Your existing Chinese customers are your most valuable resource here. After a purchase, reach out personally via WeChat or email and ask them to share their experience on Rednote or Google. Make it easy by providing direct links and a simple prompt.

A small incentive, such as a discount on their next purchase or a genuine thank you gift, can meaningfully increase response rates. The key is that the incentive is for their time and effort in sharing, not for a positive review. Authentic mixed reviews build more trust than uniformly glowing ones, because the community is sophisticated enough to notice when something looks too good to be true.

**Turning Trust Into Sales**

Once you have a base of genuine community trust, the conversion path for Chinese consumers is actually faster than for general market audiences. When a Chinese consumer decides to trust a brand, they tend to commit fully. Average order values among Chinese consumers are consistently higher than general market averages in most categories. Repeat purchase rates are strong. And perhaps most valuably, Chinese consumers who genuinely love a brand become active community advocates, recommending it in WeChat groups and on Rednote without any prompting.

The trust economy is harder to enter than the attention economy. But once you are inside it, the returns compound in ways that paid advertising simply cannot replicate.`
  },
  {
    id: 'new-arrivals-vs-established',
    category: 'Chinese Market',
    title: 'New Arrivals vs. Established Community: Why Your Chinese Market Strategy Needs to Reach Both',
    subtitle: 'The North American Chinese market is not one audience. It is two very different ones.',
    date: 'March 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200',
    content: `One of the most important and most overlooked distinctions in Chinese market marketing is the difference between recent newcomers and established Chinese Canadian or Chinese American community members. These two groups share an ethnic background, but they have quite different digital habits, platform preferences, purchase behaviours, and even language preferences. A strategy designed for one group will often miss the other almost entirely.

Understanding this distinction will help you build a more targeted and more effective approach.

**Recent Newcomers**

Recent newcomers, meaning those who have arrived in North America within the last five to ten years, tend to maintain very strong digital connections to Chinese platforms and content. They use WeChat daily for communication with family and friends back in China. They are active on Rednote and may also use Douyin, Weibo, and Bilibili. Their primary language of consumption is Mandarin, and they tend to be more comfortable making purchase decisions based on Chinese-language content than English-language content.

This group is often more brand-conscious and more brand-loyal than general market consumers. Many arrive already familiar with international luxury and lifestyle brands, and they bring strong purchasing power particularly in real estate, premium food and beverage, beauty, education, and financial services.

To reach recent newcomers effectively, your content needs to be primarily in Simplified Chinese, distributed through WeChat and Rednote, and informed by current Chinese cultural trends and platform aesthetics. A campaign that looks current and culturally relevant in the Chinese digital ecosystem will resonate immediately. One that looks dated or translated from Western concepts will not.

**Established Community Members**

Established Chinese Canadian and Chinese American community members, including those who have been in North America for 10 or more years and second-generation community members, have a significantly different profile. They are bilingual, often consuming English and Chinese content with equal comfort. Their platform mix includes Instagram, TikTok, and Facebook alongside WeChat and Rednote. They are integrated into mainstream North American consumer culture but maintain strong cultural identity and community connections.

This group often responds well to bilingual content that acknowledges both dimensions of their identity. A campaign that speaks to them as North American consumers who also have a Chinese cultural heritage can resonate more strongly than one that treats them as purely Chinese or purely mainstream. They appreciate cultural references without being reduced to cultural stereotypes.

**Where the Two Groups Overlap**

Both groups use WeChat. It is the one platform that spans the entire spectrum of Chinese North American digital life. A WeChat presence is relevant regardless of which segment of the community you are targeting.

Both groups also respond strongly to community trust signals, peer recommendation, and genuine cultural respect from brands. The specific form of that trust may differ, but the underlying dynamic is the same.

**Building a Strategy That Reaches Both**

The most effective Chinese market strategies serve both groups without sacrificing relevance for either. This typically means a content strategy that includes Chinese-primary content for newcomer-oriented platforms like Rednote and WeChat, alongside bilingual content for platforms where the established community is more active.

KOL and KOC partnerships should ideally span both segments as well. A recent-newcomer micro-KOL on Rednote and an established community voice on Instagram serve two different but equally important roles in building your brand's credibility across the full spectrum of Chinese consumers in North America.

The brands that make this distinction deliberately will build a far more complete and durable presence in the Chinese consumer market than those who treat it as a single undifferentiated audience.`
  },
  {
    id: 'biggest-mistakes-chinese-ads',
    category: 'Chinese Market',
    title: 'The 5 Biggest Mistakes North American Brands Make in Chinese Market Ads',
    subtitle: 'A direct look at what goes wrong and how to fix it before you spend another dollar.',
    date: 'February 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=1200',
    content: `After running Chinese market campaigns for North American brands across multiple categories, the same mistakes come up repeatedly. Most of them are not expensive to fix. They are just unknown. Here are the five most common ones and what to do about each.

**Mistake 1: Using Machine Translation for Ad Copy**

This is the most widespread and most damaging mistake. A brand will write strong English ad copy, run it through Google Translate or a similar tool, and use the result as their Chinese-language creative. The problem is that machine-translated Chinese ad copy reads exactly like machine-translated Chinese ad copy. The grammar is often technically correct but the tone, phrasing, and cultural register are all wrong. It signals to Chinese consumers immediately that the brand did not invest in genuine communication with the community.

The fix is straightforward: use a human translator who understands marketing language and Chinese cultural context. Not just someone who speaks Mandarin, but someone who understands how brands communicate in the Chinese digital ecosystem. The cost difference between machine translation and a qualified human translator is small. The difference in results is significant.

**Mistake 2: Targeting Chinese Consumers With Non-Chinese Creative**

Many brands run their existing English-language creative on Meta and simply target a Chinese-speaking demographic. The visual content, the cultural references, and the settings in the ad are designed for a Western audience, and the only Chinese element is a translated caption.

Chinese consumers notice this immediately. The most effective Chinese market creative is designed for the audience from the beginning, not adapted from something else after the fact. This does not mean you need a completely separate creative team. It means that when you brief your creative on Chinese market campaigns, the brief explicitly accounts for visual aesthetics, cultural references, and communication style that resonate with Chinese consumers specifically.

**Mistake 3: Ignoring the Platforms Where Chinese Consumers Actually Are**

A common version of this mistake is running only Facebook and Instagram ads while ignoring WeChat, Rednote, and TikTok Chinese audience targeting. Facebook and Instagram do reach Chinese Canadians and Chinese Americans, particularly the more acculturated segment. But for recent newcomers and for the high-trust community discovery behaviour that drives actual purchases, the brand also needs to be present on platforms native to the Chinese digital experience.

The channel mix matters. A strategy that only uses Western platforms will reach some of the Chinese market some of the time. A strategy that includes native Chinese platforms reaches the full market consistently.

**Mistake 4: Running a Campaign Once and Calling It Done**

Chinese market trust is built over time, not through a single campaign. A brand that runs a Chinese New Year campaign in February, sees moderate results, and does not return to the market until the following year will find that community recognition has not built in the interim. Chinese consumers need to see a brand consistently before they begin to trust it.

The brands that build lasting presence in the Chinese community treat it as an ongoing investment, not a seasonal activation. Even a modest but consistent presence across WeChat and Rednote throughout the year will build more cumulative trust than a large one-off campaign.

**Mistake 5: Not Measuring the Right Things**

Standard digital advertising metrics, such as click-through rate and last-click ROAS, do not capture the full value of Chinese market campaigns because so much of the purchase journey happens through community channels that are not tracked by standard pixels. A consumer might see your ad, discuss your brand in a WeChat group, read three Rednote reviews, and then purchase directly. The ad gets no credit because the conversion path went through untracked channels.

Measuring Chinese market campaign effectiveness requires a combination of direct response tracking, community growth metrics such as WeChat followers and Rednote engagement, and qualitative indicators like review volume and community mention frequency. Sales data during and after campaign periods, compared against periods of no activity, gives the most honest picture of whether the investment is working.

Fixing these five mistakes before your next campaign will not just improve the results. It will change the nature of what you are building from a series of disconnected attempts into a genuine, compounding community presence that gets stronger every month.`
  }
];

interface Project {
  id: string;
  client: string;
  title: string;
  category: string;
  result: string;
  tags: string[];
  bg: string;
  accent: string;
  challenge: string;
  solution: string;
  resultsNarrative: string;
  image?: string;
}

// --- Data ---

const CLIENT_LOGOS = [
  { name: 'Exploding Kittens' },
  { name: 'Her Fantasy Box' },
  { name: 'Koodo' },
  { name: 'Nonna Lia' },
  { name: 'The Fidget Game' },
  { name: 'Warren London' },
  { name: 'Hero Cosmetics' },
  { name: 'Clean Cubes' },
  { name: 'Simpletics' },
  { name: 'Cangshan' },
  { name: 'New Star Foodservice' },
  { name: 'AKON Sushi' },
  { name: 'UFC' },
  { name: 'NY Loft' },
  { name: 'Make Time Wellness' },
  { name: 'Alta Medical' },
  { name: 'tiny circuits' },
];

const GENERAL_SERVICES = [
  {
    id: 'paid',
    title: 'Paid Media',
    tagline: 'Performance advertising that actually performs.',
    description: 'We manage paid media across every major platform—always senior-level, never outsourced. Our focus is profitable customer acquisition, not impression counts.',
    icon: Target,
    items: [
      { name: 'Google Ads', desc: 'Search, Shopping, Performance Max & YouTube' },
      { name: 'Meta Ads', desc: 'Facebook & Instagram — prospecting and retargeting' },
      { name: 'Amazon Ads', desc: 'Sponsored Products, Brands & Display' },
      { name: 'TikTok Ads', desc: 'In-feed, TopView & Spark Ads' },
      { name: 'Pinterest Ads', desc: 'Shopping, Idea Pins & Collections' }
    ],
    highlights: [
      'Full-funnel strategy from awareness to conversion',
      'Creative testing and iteration built into every campaign',
      'Weekly reporting with revenue attribution, not just clicks'
    ]
  },
  {
    id: 'seo',
    title: 'SEO',
    tagline: 'Organic growth that compounds over time.',
    description: 'Search engine optimization that goes beyond keywords—we build the technical foundation and content authority that earns durable rankings.',
    icon: Search,
    badge: 'FREE SEO REPORT',
    items: [
      { name: 'Technical SEO', desc: 'Site architecture & schema' },
      { name: 'Content Strategy', desc: 'Keyword & editorial planning' },
      { name: 'Link Building', desc: 'Authority-building campaigns' },
      { name: 'Local SEO', desc: 'Google Business Profile & Maps' }
    ],
    highlights: ['90-day roadmap', 'Transparent reporting', 'Bilingual SEO']
  },
  {
    id: 'influencer',
    title: 'Influencer Marketing',
    tagline: 'Authentic voices that drive real purchases.',
    description: 'We connect brands with the right creators—from mega-influencers to niche micro-KOLs—and manage every step from discovery to ROI.',
    icon: Users,
    items: [
      { name: 'Creator Discovery', desc: 'Vetted global network' },
      { name: 'Campaign Mgmt', desc: 'Briefs & contract handling' },
      { name: 'Chinese KOLs', desc: 'WeChat, Rednote & Douyin' },
      { name: 'UGC Strategy', desc: 'Content licensing for ads' }
    ],
    highlights: ['Niche community access', 'Conversion tracking', 'Cultural resonance']
  },
  {
    id: 'chinese',
    title: 'Chinese Market Marketing',
    tagline: 'The market your competitors can\'t reach.',
    description: 'We help North American brands reach and convert the North American Chinese community—one of the most brand-loyal segments.',
    icon: Globe,
    badge: 'FREE MARKET REPORT',
    items: [
      { name: 'WeChat Marketing', desc: 'Official accounts & Mini-programs' },
      { name: 'Rednote', desc: 'KOL seeding & content creation' },
      { name: 'Douyin Marketing', desc: 'Short-form social commerce' },
      { name: 'Chinese-Targeted Paid Ads', desc: 'Laser-targeted bilingual creative' },
      { name: 'Bilingual Copy', desc: 'Localization, not translation' }
    ],
    highlights: [
      'Native cultural intelligence that makes your brand feel local, not foreign',
      'Full platform setup and verification handled for you, including WeChat Official Account',
      'Precision targeting to reach high-spending Chinese consumers across North America'
    ]
  }
];

const PACKAGES = [
  {
    name: 'Reach',
    badge: 'Starter',
    tagline: 'Get visible in the Chinese community for the first time.',
    features: [
      'North American Chinese Consumer Market Audit',
      '1 platform managed (WeChat or Rednote)',
      '8 bilingual posts per month',
      'Platform account setup & verification',
      'Community management (comments & DMs)',
      'Monthly performance report'
    ],
    ideal: 'Ideal for local shops, restaurants & service businesses'
  },
  {
    name: 'Grow',
    badge: 'Most Popular',
    featured: true,
    tagline: 'Build presence and drive traffic with paid ads.',
    features: [
      '2 platforms (WeChat + Rednote)',
      '16 bilingual posts per month',
      'Facebook & Instagram ads — Chinese targeting',
      'Paid ad spend management included',
      'Active community management',
      'Bi-weekly performance reports',
      'Seasonal campaign planning (CNY, Mid-Autumn)'
    ],
    ideal: 'Ideal for retailers, real estate & e-commerce brands'
  },
  {
    name: 'Scale',
    badge: 'Full Service',
    tagline: 'Dominate every channel your target customer uses.',
    features: [
      'All platforms + Google (Chinese keywords)',
      '24 bilingual posts per month',
      'Full paid ad spend management',
      '1 micro-KOL campaign per month',
      'TikTok Ads management',
      'Full seasonal campaign execution',
      'Weekly reporting & monthly strategy call'
    ],
    ideal: 'Ideal for established brands serious about North American Chinese market growth'
  }
];
const PROJECTS: Project[] = [
  {
    id: 'hero-cosmetics',
    client: 'Hero Cosmetics',
    title: 'Scaling a hero SKU to national retail with paid media',
    category: 'Beauty & Skincare',
    result: '3.2x revenue growth and 41% lower cost per acquisition in six months',
    tags: ['Meta Ads', 'Google Ads', 'Amazon'],
    bg: 'bg-[#FFF0F5]',
    accent: 'text-[#C2185B]',
    image: 'https://images.ctfassets.net/2c85gj41xf35/3K7rDR6hMTn6G356Ek9Vsy/4d98c7c234ff1e791db4d7d22410f486/AllProducts_Final__2_.png?w=750&h=422&q=70&fm=png&bg=transparent',
    challenge: 'Hero Cosmetics had genuine momentum. The Mighty Patch had earned organic love from beauty editors and dermatologists, and word of mouth was strong. But their paid media hadn\'t kept pace. Campaigns ran on broad audiences with no testing discipline, creative was generic, and CAC was climbing every quarter. On Amazon, where acne patch buyers were actively searching, they had a presence but no real strategy. Sponsored ads were set and forgotten, listings were unoptimized, and category placements were going to competitors with inferior products.',
    solution: 'We rebuilt the entire paid media operation from the ground up. On Meta, we restructured the account architecture and introduced a weekly creative testing framework, launching three to five new concepts simultaneously and prioritizing UGC and before and after content that consistently outperformed polished brand creative. On Amazon, we rebuilt Sponsored Products and Brands campaigns from scratch, launched DSP retargeting against lapsed viewers, and rewrote every listing with new imagery, A+ content, and bullet points matched to actual search behaviour. On Google, we built out Shopping campaigns with properly structured feeds and layered in search campaigns to capture high intent buyers at the bottom of the funnel.',
    resultsNarrative: 'Revenue grew 3.2x within six months. Cost per acquisition dropped 41%. Blended ROAS peaked at 4.6x. Amazon ACoS fell from 38% to 19% within 90 days, and the brand secured top three placements across key category searches.'
  },
  {
    id: 'nonna-lia',
    client: 'Nonna Lia',
    title: 'Growing a Local Italian Dessert Brand Through Influencers, Partnerships and Paid Ads',
    category: 'Food & Beverage',
    result: '4x online orders and 6 new delivery partnerships in 90 days',
    tags: ['Influencer', 'Instagram', 'Paid Ads', 'SEO'],
    bg: 'bg-[#FFF8E1]',
    accent: 'text-[#F57F17]',
    image: 'https://nonnalia.ca/cdn/shop/files/Nonna-Lia-Thai-Tea-Cake-02.jpg?crop=center&height=1080&v=1732568091&width=1080',
    challenge: 'Nonna Lia makes some of Toronto\'s finest handcrafted tiramisù, with delicate layers of mascarpone, espresso soaked ladyfingers, and imported Italian ingredients that have earned them a fiercely loyal following. But almost none of that story existed online. No active social presence, no delivery app listings, and a website that barely communicated what made them special. Growth was entirely word of mouth, which meant it was slow and unpredictable. Any digital presence had to feel genuinely earned because polished and corporate would have killed what made them worth finding.',
    solution: 'We started with the foundation, building a new website around storytelling first and conversion second, with local SEO baked into the structure from day one. On Instagram, we developed a content programme around the food, the craft, and the people behind it. Real kitchen footage, the handmaking process, the heritage behind the recipes, all content that felt like Nonna Lia rather than a brand trying to look like Nonna Lia. We partnered with local food micro creators who had genuine community trust, briefing them to share what honestly interested them about the product. In parallel, we brokered partnerships with delivery apps, specialty grocery stores, and a local meal kit service, opening new distribution channels while the digital audience was being built.',
    resultsNarrative: 'Online orders grew 4x within four months. Six new delivery and retail partnerships launched within 90 days. Instagram grew by 12,000 followers in the same window with well above average engagement. The website reached page one for high value local dessert search terms within 60 days. Most importantly, the brand that came out the other side felt more like itself, the real thing finally visible to the people looking for it.'
  },
  {
    id: 'exploding-kittens',
    client: 'Exploding Kittens',
    title: 'Turning an Evergreen Game Catalogue into a Performance Ads Machine',
    category: 'Games & Entertainment',
    result: '58% lower CAC and 2.1x sales volume increase across two quarters',
    tags: ['Amazon Ads', 'Meta Ads', 'Google'],
    bg: 'bg-[#F3E5F5]',
    accent: 'text-[#7B1FA2]',
    image: 'https://www.explodingkittens.com/cdn/shop/files/EKOEAngled_1300x.png?v=1741032953',
    challenge: 'Exploding Kittens had already won the internet once. Their Kickstarter became one of the most backed campaigns in the platform\'s history. But sustaining revenue from an evergreen card game catalogue is a different problem than a viral launch. By the time they came to Lumio, paid media was underperforming across the board. Amazon ads were heavily weighted toward branded terms, capturing existing demand rather than creating new demand. Meta and Google campaigns had accumulated years of legacy decisions that made true attribution nearly impossible. With multiple SKUs in the catalogue, there was no systematic approach to identifying which products deserved more investment.',
    solution: 'We treated this as a portfolio problem first. A full audit across every channel and SKU gave us a clear picture of which games were genuinely profitable and which were consuming budget without meaningful contribution. We rebuilt Amazon campaigns with a tiered keyword structure, separating branded, competitor, and category terms into distinct campaigns, and expanded aggressively into competitor conquesting against top selling titles in adjacent party and family game categories. Listings for the top five titles were rewritten and redesigned with new lifestyle imagery and video content. On Meta, we introduced a structured creative testing programme focused on video including unboxing moments, gameplay reactions, and gift giving context, and built a dedicated holiday gifting campaign for Q4. On Google, we cleaned up Shopping feeds and introduced YouTube pre roll to build upper funnel awareness.',
    resultsNarrative: 'CAC dropped 58%. Total sales volume increased 2.1x over the following two quarters. Amazon conversion rates improved 34% across top titles following the listing rebuild. The Q4 gifting campaign delivered the brand\'s strongest holiday performance on paid channels to date.'
  },
  {
    id: 'clean-cubes',
    client: 'Clean Cubes',
    title: 'Launching a First of Its Kind Product to Number One on Amazon',
    category: 'Home & Lifestyle',
    result: 'Number one Amazon category ranking within 90 days of launch',
    tags: ['Amazon Ads', 'SEO'],
    bg: 'bg-[#E0F2F1]',
    accent: 'text-[#00796B]',
    image: 'https://m.media-amazon.com/images/I/812ovnpRnIL._AC_UF894,1000_QL80_.jpg',
    challenge: 'Clean Cubes had a genuinely innovative product, portable disposable waste bins for outdoor events and tailgates, but faced the classic challenge of a novel category. Nobody was searching for it because nobody knew it existed yet. They needed to educate the market before they could convert it, establish Amazon dominance quickly before competitors spotted the opportunity, and do all of this with creative and SEO carrying significant educational weight before standard conversion campaigns could work efficiently.',
    solution: 'We built around category creation rather than keyword targeting. SEO content was structured around the occasions and problems the product solved including outdoor entertaining, festival logistics, and tailgate gear, so people found Clean Cubes while searching for solutions to real problems rather than a product type they didn\'t know existed. On Amazon, we launched with aggressive auto campaigns to surface keyword discovery data fast, then rapidly migrated winning terms to tightly controlled manual campaigns. We pushed early reviews through Vine and rewrote listings around occasion photography showing the product in use at a tailgate, at a festival, and at a campsite, making the value proposition immediately obvious. Paid social targeted event organizers and outdoor lifestyle segments with short video showing the before and after of managing waste at an event.',
    resultsNarrative: 'Clean Cubes reached the number one ranking in their Amazon category within 90 days. Reviews grew to over 200 in 60 days at a 4.7 star average. Organic search traffic from occasion based content became a meaningful acquisition channel within four months. Amazon ACoS settled at 18%, well below the category benchmark, as organic rank improvements reduced the need for paid placement at the top of search results.'
  },
  {
    id: 'simpletics',
    client: 'Simpletics',
    title: 'Building a Men\'s Hair Brand Through Influencer Content and Meta Ads',
    category: 'Hair Care',
    result: '3x higher click through rate and 38% lower cost per acquisition in four months',
    tags: ['Meta Ads', 'Creative', 'Video'],
    bg: 'bg-[#E8F5E9]',
    accent: 'text-[#2E7D32]',
    image: 'https://www.upwork.com/att/download/portfolio/persons/uid/1699828775739473920/profile/projects/files/9b183d73-8b55-4608-8449-d69a6a8f89ea',
    challenge: 'Simpletics makes all natural hair styling products for young men including sea salt spray, hair clay, and texture powder designed to deliver volume and effortless style without the chemical laden formulas that dominate drugstore shelves. The products were genuinely good and had an existing customer base, but growth had plateaued. They were running Meta ads without a real creative strategy and the content wasn\'t connecting. In a crowded men\'s grooming space, looking like everyone else is the same as being invisible.',
    solution: 'We built the campaign around influencer partnerships first, then fed the best performing content directly into paid ads. We identified creators in the men\'s style and grooming space whose audiences matched Simpletics\' target demographic, young men aged 18 to 30 who cared about how they looked but didn\'t want a complicated routine. Each creator was given the product and a loose brief focused on one idea: show your real hair, show what the product does, keep it honest. The content that came back was varied, specific, and far more engaging than anything produced in a traditional ad shoot. We then ran those creator assets across Meta and Instagram as paid ads, testing different creators, different hooks, and different audience segments simultaneously to find what resonated. Winning combinations were scaled quickly and underperformers were cut fast. The whole system was built to learn and compound.',
    resultsNarrative: 'Repeat purchase rates increased significantly within the first 90 days of the programme. The top performing influencer content outperformed previous best performing ads by over 3x on click through rate. Cost per acquisition dropped 38% over four months as the winning creative and audience combinations scaled. The influencer content also continued driving organic reach beyond the paid campaigns, extending the return on each creator partnership well past the initial posting window.'
  },
  {
    id: 'ufc-coconut',
    client: 'UFC Coconut Water',
    title: 'Breaking Into the Canadian Market Through the North American Chinese Community',
    category: 'Beverage · Chinese Market Marketing',
    result: '312% sales increase and 2.4 million impressions in the North American Chinese community',
    tags: ['KOL', 'WeChat', 'Rednote'],
    bg: 'bg-[#E3F2FD]',
    accent: 'text-[#0D47A1]',
    image: 'https://ufcrefreshcoco.com/wp-content/uploads/2022/02/CCWT.jpg',
    challenge: 'UFC Coconut Water was entering the Canadian market with a clear strategic priority: establish a foothold within the North American Chinese community, one of the highest per capita coconut water consuming demographics in the country. The cultural familiarity with coconut as an ingredient, combined with strong interest in functional wellness beverages, made this community a natural fit. The challenge was access. North American Chinese consumers are deeply networked through their own digital ecosystems and are largely unreachable through conventional advertising. They trust recommendations from creators they follow on Rednote and WeChat far more than they trust brand ads. An ad that feels like an ad performs poorly. A recommendation from a creator they genuinely follow performs exceptionally.',
    solution: 'We designed the entire campaign around KOL credibility rather than reach metrics. We identified 22 micro and mid tier creators in the North American Chinese community, selecting for audience quality concentrated in cities with the highest Chinese consumer density, content category fit across health, fitness, food, and lifestyle, and authentic engagement patterns that signalled real community trust. Creators were given product samples and a deliberately open brief. Here is what the product is, here is the story, share what genuinely interests you about it. Some focused on post workout hydration, some positioned it as a cleaner alternative to sports drinks, and some leaned into taste. None of it was scripted and the content was significantly more persuasive for it. On WeChat, we distributed content through relevant lifestyle channels timed to coincide with high engagement seasonal windows. On Rednote, we amplified creator content through paid promotion to extend reach to lookalike segments beyond each creator\'s organic audience. We also coordinated with the brand to ensure product was on shelf in Chinese grocery retailers across Toronto, Vancouver, and the Bay Area before the campaign launched, so the awareness being generated had somewhere to convert immediately.',
    resultsNarrative: 'The campaign generated 2.4 million impressions across Rednote, Instagram, WeChat, and TikTok. Sales in the North American Chinese community segment increased 312% compared to the prior period. Sell through in Chinese grocery retail partners outpaced projections by 40%, requiring emergency restocking in several markets. The brand\'s Rednote account gained 8,400 followers over the campaign window, creating an owned channel that continued building audience well after the campaign concluded.'
  },
  {
    id: 'warren-london',
    client: 'Warren London',
    title: 'Scaling a Premium Pet Brand to 4x Amazon Revenue Through Ads and Creative',
    category: 'Pet Grooming',
    result: '4.1x Amazon revenue growth and ACoS down from 42% to 18%',
    tags: ['Amazon Ads', 'Meta Ads', 'Google'],
    bg: 'bg-[#FBE9E7]',
    accent: 'text-[#BF360C]',
    image: 'https://www.upwork.com/att/download/portfolio/persons/uid/1829733478503024709/profile/projects/files/f0402433-daf8-4f1d-b816-d1fc4e3fe4b4',
    challenge: 'Warren London made premium grooming products for dogs, a genuinely differentiated proposition in a pet category growing increasingly crowded with mass market brands and DTC challengers. The products were high quality, the brand story was compelling, and existing customers were loyal. But their Amazon presence was significantly underperforming the brand\'s potential. Listings were functional but not compelling, advertising was heavily weighted toward branded keywords, and there was no video content despite video being one of the strongest conversion drivers in the pet category. On Meta and Google, campaigns had been running without meaningful creative refresh for over a year, leading to rising CPAs and ad fatigue.',
    solution: 'We rebuilt the Warren London presence across Amazon, Meta, and Google simultaneously. On Amazon, listings were redesigned around lifestyle imagery showing real dogs being groomed rather than product on white background shots, and video content was produced for the top five SKUs showing application technique and visible results. A+ content was rewritten around the quality story covering ingredients, manufacturing standards, and the thinking behind the formulations. On the advertising side, we expanded aggressively into competitor targeting and built a systematic category conquesting programme targeting high intent searches like dog conditioner and natural dog grooming products. On Meta, we launched a UGC programme working with existing customers to generate authentic content featuring their dogs and grooming routines, and restructured prospecting campaigns around premium pet care and high income pet owner segments. On Google, we added properly segmented Shopping campaigns and branded and non branded search campaigns to capture the full range of purchase intent.',
    resultsNarrative: 'Amazon revenue grew 4.1x over the engagement period. ACoS dropped from 42% to 18% as organic rank improvements reduced dependence on paid placement. On Meta, cost per acquisition dropped 38% following the creative refresh and ROAS stabilized at levels that made scaling the channel economically viable for the first time.'
  },
  {
    id: 'fidget-game',
    client: 'The Fidget Game',
    title: 'Converting a Viral Moment into a Durable Amazon Business',
    category: 'Toys & Games',
    result: '5.2x ROAS and bestseller badge achieved within 60 days',
    tags: ['Amazon PPC', 'DSP', 'Creative'],
    bg: 'bg-[#EDE7F6]',
    accent: 'text-[#4527A0]',
    image: 'https://www.upwork.com/att/download/portfolio/persons/uid/1829733478503024709/profile/projects/files/708de43a-6bab-4c56-9ca3-6dba1d4edd84',
    challenge: 'The Fidget Game had a genuinely viral product, a satisfying and well made fidget toy that had earned organic social attention and real word of mouth. But converting a viral moment into durable Amazon revenue is a completely different challenge. When they came to Lumio, their Amazon advertising was almost entirely misaligned with the opportunity in front of them. Basic Sponsored Products with auto targeting and minimal budget were capturing a small fraction of the search demand their social moment had generated. Competitor products were aggressively bidding on the terms The Fidget Game should have owned. With no DSP strategy, there was no way to retarget the large and growing pool of shoppers who had visited the listing but not converted.',
    solution: 'We treated this as a time sensitive opportunity from day one. The first 30 days were entirely about capturing the demand that already existed before it went to competitors. We built a full Sponsored Products architecture from scratch, separating exact, phrase, and broad match keywords into distinct campaigns with differentiated bid strategies, and launched aggressive competitor conquesting against every major fidget and sensory toy brand on Amazon. We set up DSP retargeting for shoppers who had viewed the listing without purchasing and ran DSP prospecting against in market segments for toys, gifts, and sensory products to expand reach beyond search intent. The listing was rebuilt around in hand photography showing the tactile experience of the product, critical for fidget toys where feel is the entire selling point, with video content and A+ pages addressing the primary buyer questions around durability, noise level, and age appropriateness. A review acquisition programme targeting Vine and the Request a Review feature accelerated the social proof velocity needed to cement organic ranking before the viral moment faded.',
    resultsNarrative: 'The Fidget Game achieved bestseller badge status in their primary Amazon category within 60 days. ROAS across the combined PPC and DSP programme reached 5.2x. Organic rank for top category keywords moved from page three to the top half of page one. Review count grew from 47 to over 800 in 90 days at a 4.6 star average. The brand converted a viral moment into a durable Amazon business with compounding organic momentum.'
  },
  {
    id: 'velocity-performance',
    client: 'Velocity Performance',
    title: 'Using Local SEO and Google Maps to Drive Organic Bookings for an Auto Performance Shop',
    category: 'Auto Performance · Local SEO',
    result: 'Top 3 Google Maps ranking and 80% more organic bookings in 90 days',
    tags: ['Local SEO', 'Google Maps', 'Reviews'],
    bg: 'bg-[#F8F8F8]',
    accent: 'text-blue-800',
    image: 'https://img1.wsimg.com/isteam/ip/dc6c19f5-e6c0-4f3a-885a-49790621822e/IMG_8136_jpg.jpg',
    challenge: 'Velocity Performance was already one of the most respected auto performance shops in the city. Gearheads who knew them were fiercely loyal, and their reputation for quality tuning, modifications, and performance work was genuine. But that reputation lived almost entirely offline. When someone searched for performance shops, tuning services, or even basic auto work in their area, Velocity was nowhere to be found. Competitors with less expertise and lower quality work were ranking above them simply because they had invested in their online presence and Velocity had not. The shop was busy enough to survive on referrals, but they were leaving a significant volume of high value bookings on the table every single month. The problem was not their work. It was that no one outside their existing network could find them.',
    solution: 'We started with a full local SEO and Google presence audit. The Google Business Profile was thin, with inconsistent business information, no service descriptions, and almost no photo content beyond a few poorly lit exterior shots. Reviews were sparse and had gone unanswered for months. The website had no locally optimized content and was not structured in a way that helped Google understand what services Velocity offered or which areas they served. Citation consistency across local directories was poor, with the business name and address listed differently across multiple platforms, which actively hurt their local ranking signals. We rebuilt the Google Business Profile from scratch. Every service category was added in full, from performance tuning and engine modifications to suspension work and exhaust upgrades. Professional photography was shot across the shop floor, the team at work, and finished builds, giving both Google and prospective customers a genuine look at the quality of the operation. Hours, location attributes, and service areas were fully populated. Every existing review received a thoughtful and specific response, and we trained the front desk team on how and when to ask satisfied customers for a review before they left the shop. On the website, we rebuilt the local SEO architecture around the specific services and search terms that high intent customers were actually using. Pages were created for each core service with location specific content that gave Google clear signals about what Velocity did and where. Structured data schema was implemented to help Google correctly categorize the business in automotive searches. We also built out citations across every major local and automotive specific directory with perfectly consistent business information across all platforms.',
    resultsNarrative: 'Within 90 days, Velocity Performance moved from effectively invisible to a top three result in Google Maps for their highest value local search terms including performance tuning, car modifications, and auto performance shop in their area. Organic website traffic increased 2.8x. Online booking requests grew 80% as new customers who found Velocity through search converted into appointments. Review count grew from 28 to over 150 in four months, holding a 4.9 star average that became one of the strongest trust signals in their local market. The shop went from surviving on referrals to having a consistent, predictable pipeline of new customers finding them organically every week.'
  }
];

const HERO_SLIDES = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=100&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Market Momentum'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1739950839930-ef45c078f316?q=100&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Precision Growth'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1556764900-fa065610b0e4?q=100&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'High-End Execution'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1571168136613-46401b03904e?q=100&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Strategic Vision'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1776802792422-6f436418ec56?q=100&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Creative Excellence'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1739980155900-36562bcb7857?q=100&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Global Impact'
  }
];

function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {HERO_SLIDES[index].type === 'image' && (
            <img 
              src={HERO_SLIDES[index].url} 
              alt={HERO_SLIDES[index].label} 
              className="w-full h-full object-cover bg-lumio-ink"
              referrerPolicy="no-referrer"
              loading="eager"
            />
          )}
          {/* Multi-layered overlay for premium feel - Dynamic based on photo contrast needs */}
          <div className={`absolute inset-0 backdrop-blur-[1px] ${[0, 3, 4].includes(index) ? 'bg-lumio-ink/60' : 'bg-lumio-ink/25'}`} />
          <div className={`absolute inset-0 bg-gradient-to-b via-transparent ${
            [0, 3, 4].includes(index) 
              ? 'from-lumio-ink/50 to-lumio-ink/80' 
              : 'from-lumio-ink/20 to-lumio-ink/40'
          }`} />
          {[0, 3, 4].includes(index) && (
            <div className="absolute inset-0 bg-gradient-to-tr from-lumio-ink/40 via-transparent to-transparent" />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const FAQS = [
  { q: 'Do I need a WeChat account before getting started?', a: 'No. We handle the full setup and verification of your WeChat Official Account as part of onboarding. This is the most complex step for North American brands — we\'ve done it many times and make it painless.' },
  { q: 'How long until we see results?', a: 'Paid ads can drive traffic within 2 to 4 weeks. Organic social media growth typically takes 60 to 90 days to build community. KOL campaigns often generate the fastest visible impact. We set realistic expectations at the start of every engagement.' },
  { q: 'We\'re a small business with a limited budget. Is this right for us?', a: 'Yes. Lumio was built specifically for SMBs and growing brands. Our Reach package is designed to be accessible for businesses starting their North American Chinese market journey. Contact us for a custom quote and we will always be honest about fit.' },
  { q: 'Do you work with businesses outside of Canada?', a: 'Yes. All services are delivered remotely and we work with brands across Canada and the United States. North American Chinese communities are concentrated in Toronto, Vancouver, Calgary, Montreal, Los Angeles, San Francisco, and New York.' },
  { q: 'What makes Lumio different from a general marketing agency?', a: 'Most agencies cannot execute North American Chinese market campaigns. They do not have the platform knowledge, cultural intelligence, or bilingual capability. We are built specifically for this. We understand both sides of the equation: the North American brand and the Chinese consumer.' }
];

const CHINESE_SEASONS = [
  { icon: '🧧', name: 'Chinese New Year', date: 'Jan / Feb — Lunar Calendar', desc: 'The single largest Chinese consumer spending event. Gifts, food, fashion, and family experiences all peak.' },
  { icon: '🥮', name: 'Mid-Autumn Festival', date: 'September / October', desc: 'Gifting, mooncakes, family gatherings. Strong for food & beverage, wellness, and premium retail.' },
  { icon: '🛍️', name: 'Singles\' Day', date: 'November 11', desc: 'The world\'s largest shopping event. North American Chinese consumers actively participate.' },
  { icon: '🐉', name: 'Dragon Boat Festival', date: 'June — Lunar Calendar', desc: 'Community events, food, and outdoor brands have strong resonance during this celebration.' },
  { icon: '✈️', name: 'Golden Week', date: 'October 1–7', desc: 'Travel, dining, and luxury spending surge. Major window for hospitality and premium brands.' },
  { icon: '💝', name: 'Qixi Festival', date: 'August — Lunar Calendar', desc: 'Chinese Valentine\'s Day — jewellery, beauty, dining and gifting brands perform exceptionally well.' }
];

const CHINESE_SERVICES = [
  {
    name: 'WeChat Marketing',
    desc: 'Full registration and verification of your WeChat Official Account.',
    plats: ['WeChat OA', 'Mini Programs', 'WeMoments'],
    icon: 'MessageSquare'
  },
  {
    name: 'Rednote & Douyin',
    desc: 'Content strategy, KOL seeding, and community building on the platforms that drive the most purchase intent among North American Chinese consumers.',
    plats: ['Organic', 'KOL Seeding', 'Paid Boost'],
    icon: 'Smartphone'
  },
  {
    name: 'KOL Campaign Management',
    desc: 'We source, vet, and manage key opinion leaders across all major Chinese platforms. From nano-KOLs to established content creators with proven audiences.',
    plats: ['Rednote', 'WeChat', 'TikTok', 'Instagram'],
    icon: 'Users'
  },
  {
    name: 'Chinese-Targeted Paid Ads',
    desc: 'Facebook, Instagram, and Google campaigns laser-targeted to Chinese-speaking audiences in North America. Bilingual creative that actually converts.',
    plats: ['Meta Ads', 'Google Ads', 'TikTok Ads'],
    icon: 'BarChart'
  },
  {
    name: 'Bilingual Copywriting',
    desc: 'Culturally adapted Chinese and English copy for ads, websites, email, and social content. Not just translation, real cultural localization that resonates.',
    plats: ['Simplified Chinese', 'Traditional Chinese'],
    icon: 'Type'
  },
  {
    name: 'Seasonal Campaign Management',
    desc: 'Full campaign execution for Chinese New Year, Mid-Autumn Festival, Singles\' Day, and Golden Week. The highest consumer spending moments of the year.',
    plats: ['CNY', 'Mid-Autumn', 'Singles\' Day'],
    icon: 'Calendar'
  }
];

const CHINESE_ADDONS = [
  {
    name: 'Market Audit',
    desc: 'Full visibility audit, competitive gap analysis, and a 90-day recommended action plan. Credited toward your first retainer month.',
    icon: 'Search'
  },
  {
    name: 'WeChat Account Setup',
    desc: 'Full registration and verification of your WeChat Official Account.',
    icon: 'CheckCircle'
  },
  {
    name: 'KOL Campaign',
    desc: 'One micro-KOL partnership on Rednote, Instagram, or TikTok. Includes sourcing, outreach, brief, and performance tracking.',
    icon: 'Star'
  },
  {
    name: 'Seasonal Campaign',
    desc: 'CNY, Mid-Autumn, Singles\' Day, or Golden Week. Full campaign strategy, content, and ads included.',
    icon: 'Zap'
  },
  {
    name: 'Bilingual Copywriting',
    desc: 'Chinese and English marketing copy, culturally adapted, not just translated. For ads, web pages, email, or print.',
    icon: 'PenTool'
  },
  {
    name: 'Ads Management Only',
    desc: 'Facebook, Instagram & Google ads targeting North American Chinese audiences.',
    icon: 'TrendingUp'
  }
];

const CHINESE_MARKET_STEPS = [
  { id: '01', title: 'Market Audit', description: 'We assess your brand\'s current visibility and opportunity within the North American Chinese community, including competitive gaps and platform fit.' },
  { id: '02', title: 'Platform Setup', description: 'We handle WeChat Official Account registration, Rednote profile setup, and all technical verification. The hardest step for non-Chinese brands, done for you.' },
  { id: '03', title: 'Content & Campaign', description: 'Our bilingual team creates culturally resonant content, manages KOL partnerships, and runs paid campaigns targeted at the right audiences.' },
  { id: '04', title: 'Growth & Scale', description: 'We optimize based on real conversion data, expand to new platforms, and layer in seasonal campaigns around key Chinese cultural moments.' }
];

// --- Components ---

interface NavbarProps {
  currentView: ViewState;
  setView: (v: ViewState) => void;
  setActiveServiceId: (id: string) => void;
}

function Navbar({ currentView, setView, setActiveServiceId }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On sub-pages, we always want the dark/solid nav style because they have white backgrounds
  const useDarkNav = isScrolled || currentView !== 'home';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${useDarkNav ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <button 
          onClick={() => { setView('home'); window.scrollTo(0, 0); }} 
          className={`text-2xl font-serif transition-colors duration-300 ${useDarkNav ? 'text-lumio-ink' : 'text-white'}`}
        >
          Lumi<span className="text-lumio-accent">o</span>
        </button>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => { setView('home'); window.scrollTo(0,0); }}
            className={`text-sm font-medium transition-all duration-300 ${
              currentView === 'home' 
                ? 'text-lumio-accent' 
                : useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            Home
          </button>
          <div className="relative group">
            <button className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 ${useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'}`}>
              Services <ChevronDown size={14} className="opacity-50" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-lumio-ink/5 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="p-2 space-y-1">
                {GENERAL_SERVICES.map(svc => (
                  <button 
                    key={svc.id}
                    onClick={() => {
                      setView('home');
                      setActiveServiceId(svc.id);
                      setTimeout(() => {
                        const el = document.getElementById('services');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-lumio-ink-soft hover:bg-lumio-accent-light hover:text-lumio-accent rounded-lg transition-colors"
                  >
                    {svc.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button 
            onClick={() => { setView('free-seo-audit'); window.scrollTo(0,0); }}
            className={`text-sm font-medium transition-all duration-300 ${
              currentView === 'free-seo-audit' 
                ? 'text-lumio-accent' 
                : useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            Free SEO Audit
          </button>
          <button 
            onClick={() => { setView('chinese-marketing'); window.scrollTo(0, 0); }}
            className={`text-sm font-medium transition-all duration-300 ${
              currentView === 'chinese-marketing' 
                ? 'text-lumio-accent' 
                : useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            Chinese Market Marketing
          </button>
          <button 
            onClick={() => { setView('case-studies'); window.scrollTo(0,0); }}
            className={`text-sm font-medium transition-all duration-300 ${
              currentView === 'case-studies' 
                ? 'text-lumio-accent' 
                : useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            Case Studies
          </button>
          <button 
            onClick={() => { setView('insights'); window.scrollTo(0, 0); }}
            className={`text-sm font-medium transition-all duration-300 ${
              currentView === 'insights' || currentView === 'insight-detail' 
                ? 'text-lumio-accent' 
                : useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            Insights
          </button>
          <button 
            onClick={() => {
              if (currentView === 'home') {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              } else {
                setView('home');
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 500);
              }
            }}
            className={`btn ${useDarkNav ? 'btn-primary' : 'bg-white text-lumio-ink hover:bg-lumio-accent hover:text-white'} text-sm py-2.5 transition-all duration-300`}
          >
            Let's talk
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden transition-colors duration-300 ${useDarkNav ? 'text-lumio-ink' : 'text-white'}`}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-lumio-ink/5 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              <button onClick={() => { setView('home'); setIsOpen(false); window.scrollTo(0,0); }} className="text-left py-2 font-medium text-lumio-ink hover:text-lumio-accent transition-colors">Home</button>
              <button onClick={() => { setView('free-seo-audit'); setIsOpen(false); window.scrollTo(0,0); }} className="text-left py-2 font-medium text-lumio-ink hover:text-lumio-accent transition-colors">Free SEO Audit</button>
              <button onClick={() => { setView('chinese-marketing'); setIsOpen(false); window.scrollTo(0,0); }} className="text-left py-2 font-medium text-lumio-ink hover:text-lumio-accent transition-colors">Chinese Market Marketing</button>
              <button onClick={() => { setView('case-studies'); setIsOpen(false); window.scrollTo(0,0); }} className="text-left py-2 font-medium text-lumio-ink hover:text-lumio-accent transition-colors">Case Studies</button>
              <button onClick={() => { setView('insights'); setIsOpen(false); window.scrollTo(0,0); }} className="text-left py-2 font-medium text-lumio-ink hover:text-lumio-accent transition-colors">Insights</button>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  if (currentView === 'home') {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setView('home');
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                  }
                }} 
                className="btn btn-primary w-full"
              >
                Let's talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function SectionTitle({ eyebrow, title, description, dark = false }: { eyebrow: string; title: string; description?: string; dark?: boolean }) {
  return (
    <div className="mb-12">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lumio-accent block mb-3">
        {eyebrow}
      </span>
      <h2 className={`text-3xl md:text-5xl font-serif mb-4 ${dark ? 'text-white' : 'text-lumio-ink'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg max-w-xl leading-relaxed ${dark ? 'text-white/60' : 'text-lumio-ink-muted'}`}>
          {description}
        </p>
      )}
    </div>
  );
}

interface ServiceAccordionProps {
  setView: (v: ViewState) => void;
  activeId: string;
  setActiveId: (id: string) => void;
}

function ServicesTabs({ setView, activeId, setActiveId }: ServiceAccordionProps) {

  return (
    <div className="flex flex-col lg:flex-row border border-lumio-ink/10 rounded-2xl overflow-hidden bg-white shadow-sm min-h-[550px]">
      {/* Left Sidebar Navigation */}
      <div className="w-full lg:w-64 bg-lumio-surface border-r border-lumio-ink/5 flex flex-col shrink-0">
        {GENERAL_SERVICES.map((svc) => (
          <button
            key={svc.id}
            onClick={() => setActiveId(svc.id)}
            className={`w-full flex items-center justify-between px-6 py-5 text-left border-b border-lumio-ink/5 last:border-0 transition-all duration-200 group ${
              activeId === svc.id 
                ? 'bg-lumio-accent text-white' 
                : 'text-lumio-ink hover:bg-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`font-semibold text-xs tracking-tight ${activeId === svc.id ? 'text-white' : 'text-lumio-ink-soft group-hover:text-lumio-ink'}`}>
                {svc.title}
              </span>
              {svc.badge && (
                <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${
                  activeId === svc.id ? 'bg-white/20 text-white' : 'bg-lumio-teal-light text-lumio-teal'
                }`}>
                  {svc.badge}
                </span>
              )}
            </div>
            {activeId === svc.id ? (
              <ChevronDown size={12} className="opacity-80" />
            ) : (
              <span className="text-[10px] opacity-20 text-lumio-ink font-bold">›</span>
            )}
          </button>
        ))}
        <div className="flex-grow bg-lumio-surface" />
      </div>

      {/* Right Content Area */}
      <div className="flex-grow p-8 md:p-12 lg:px-16 lg:py-12 bg-white">
        <AnimatePresence mode="wait">
          {GENERAL_SERVICES.map((svc) => (
            svc.id === activeId && (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-lumio-accent mb-4">
                  {svc.title}
                </div>
                
                <h3 className="text-2xl md:text-4xl font-serif text-lumio-ink mb-6 leading-tight tracking-tight">
                  {svc.tagline}
                </h3>
                
                <p className="text-lumio-ink-muted leading-relaxed mb-8 max-w-2xl text-[14px]">
                  {svc.description}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 mb-10">
                  {svc.items.map((item) => (
                    <div key={item.name} className="p-4 bg-lumio-surface rounded-xl border border-lumio-ink/5">
                      <div className="font-bold text-[13px] text-lumio-ink mb-1">{item.name}</div>
                      <div className="text-[11px] text-lumio-ink-muted leading-relaxed">{item.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-10">
                  {svc.highlights.map((hl) => (
                    <div key={hl} className="flex items-center gap-3 text-[14px] text-lumio-ink-soft">
                      <div className="w-1 h-1 rounded-full bg-lumio-accent shrink-0" />
                      {hl}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-lumio-ink/5">
                  {svc.id === 'chinese' && (
                    <button 
                      onClick={() => { setView('chinese-marketing'); window.scrollTo(0,0); }}
                      className="text-xs font-bold text-lumio-accent flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Get Your Free Chinese Market Audit <ArrowRight size={14} />
                    </button>
                  )}
                  {svc.id === 'seo' && (
                    <button 
                      onClick={() => { setView('free-seo-audit'); window.scrollTo(0,0); }}
                      className="text-xs font-bold text-lumio-accent flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-4 decoration-lumio-accent/20"
                    >
                      Get your Free SEO Audit <ArrowRight size={14} />
                    </button>
                  )}
                  {svc.id === 'paid' && (
                    <a href="#contact" className="text-xs font-bold text-lumio-accent flex items-center gap-2 hover:gap-3 transition-all">
                      Scale Your Customer Acquisition <ArrowRight size={14} />
                    </a>
                  )}
                  {svc.id === 'influencer' && (
                    <a href="#contact" className="text-xs font-bold text-lumio-accent flex items-center gap-2 hover:gap-3 transition-all">
                      Find The Right Creators <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-lumio-ink py-16 px-6 scroll-mt-24">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <SectionTitle 
            eyebrow="Get in touch" 
            title="Reach the market others miss." 
            description="Tell us about your brand and goals. We'll get back to you within one business day."
            dark
          />
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 p-10 rounded-2xl text-center"
          >
            <div className="w-12 h-12 bg-lumio-accent rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-serif text-white mb-2">We got your message!</h3>
            <p className="text-white/60 text-xs">Our team will be in touch within one business day.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#181c28] border border-white/5 p-6 md:p-8 rounded-2xl space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold uppercase tracking-wider text-white/40">First Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Jane" 
                  className="w-full bg-lumio-ink border border-white/10 rounded-lg px-4 py-2 text-white text-xs placeholder:text-white/20 focus:border-lumio-accent outline-none transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold uppercase tracking-wider text-white/40">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Smith" 
                  className="w-full bg-lumio-ink border border-white/10 rounded-lg px-4 py-2 text-white text-xs placeholder:text-white/20 focus:border-lumio-accent outline-none transition-colors"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold uppercase tracking-wider text-white/40">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="jane@company.com" 
                  className="w-full bg-lumio-ink border border-white/10 rounded-lg px-4 py-2 text-white text-xs placeholder:text-white/20 focus:border-lumio-accent outline-none transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold uppercase tracking-wider text-white/40">Company Name</label>
                <input 
                  type="text" 
                  placeholder="Your Company" 
                  className="w-full bg-lumio-ink border border-white/10 rounded-lg px-4 py-2 text-white text-xs placeholder:text-white/20 focus:border-lumio-accent outline-none transition-colors"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-bold uppercase tracking-wider text-white/40">Service Interest</label>
              <select className="w-full bg-lumio-ink border border-white/10 rounded-lg px-4 py-2 text-white text-xs appearance-none focus:border-lumio-accent outline-none transition-colors">
                <option value="">Select a service...</option>
                <option>Paid Media</option>
                <option>SEO</option>
                <option>Influencer Marketing</option>
                <option>Chinese Market Marketing</option>
                <option>Full-Service / Other</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-bold uppercase tracking-wider text-white/40">Tell us about your goals</label>
              <textarea 
                rows={3}
                placeholder="What are you trying to achieve? Any context helps..." 
                className="w-full bg-lumio-ink border border-white/10 rounded-lg px-4 py-2 text-white text-xs placeholder:text-white/20 focus:border-lumio-accent outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <button type="submit" className="w-full btn btn-primary py-3 text-[10px] tracking-widest uppercase">
              Send My Enquiry →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

interface HomeViewProps {
  setView: (v: ViewState) => void;
  setSelectedProject: (p: Project) => void;
  activeServiceId: string;
  setActiveServiceId: (id: string) => void;
  key?: React.Key;
}

interface CaseStudyCardProps {
  project: Project;
  setView: (v: ViewState) => void;
  setSelectedProject: (p: Project) => void;
  key?: React.Key;
}

function CaseStudyCard({ project, setView, setSelectedProject }: CaseStudyCardProps) {
  return (
    <div 
      className="group bg-white rounded-3xl border border-lumio-ink/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full cursor-pointer"
      onClick={() => { setSelectedProject(project); setView('case-detail'); window.scrollTo(0, 0); }}
    >
      <div className={`p-12 text-center ${project.bg} transition-transform duration-500 group-hover:scale-[1.02]`}>
        <div className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 ${project.accent}`}>
          {project.category}
        </div>
        <h3 className={`text-xl md:text-2xl font-serif ${project.accent}`}>
          {project.client}
        </h3>
      </div>
      
      <div className="p-10 flex flex-col flex-grow">
        <span className="text-[10px] font-bold uppercase tracking-widest text-lumio-ink/30 mb-2">
          {project.client}
        </span>
        <h4 className="text-sm font-bold text-lumio-ink mb-6 leading-snug group-hover:text-lumio-accent transition-colors">
          {project.title}
        </h4>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 bg-lumio-surface rounded text-[10px] font-medium text-lumio-ink-soft border border-lumio-ink/5">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-6 border-t border-lumio-ink/5 flex items-center justify-between">
          <div className="text-xs font-serif text-lumio-accent italic">
            {project.result}
          </div>
          <ArrowRight size={16} className="text-lumio-accent opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
        </div>
      </div>
    </div>
  );
}

interface CaseStudiesViewProps {
  setView: (v: ViewState) => void;
  setSelectedProject: (p: Project) => void;
  key?: React.Key;
}

function CaseStudiesView({ setView, setSelectedProject }: CaseStudiesViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lumio-accent block mb-3">Case Studies</span>
          <h1 className="text-4xl md:text-6xl font-serif text-lumio-ink mb-8 leading-tight">
            Proof in <span className="italic text-lumio-accent">Performance.</span>
          </h1>
          <p className="text-lg text-lumio-ink-muted leading-relaxed">
            Explore how we've helped some of the most ambitious brands scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(project => (
            <CaseStudyCard key={project.id} project={project} setView={setView} setSelectedProject={setSelectedProject} />
          ))}
        </div>
      </section>
    </motion.div>
  );
}

interface CaseDetailViewProps {
  project: Project;
  setView: (v: ViewState) => void;
  key?: React.Key;
}

function CaseDetailView({ project, setView }: CaseDetailViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <section className={`py-20 px-6 md:px-12 ${project.bg}`}>
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => { setView('case-studies'); window.scrollTo(0, 0); }}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-lumio-ink/40 hover:text-lumio-accent transition-colors mb-8"
          >
            ← Back to All Cases
          </button>
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] block mb-3 ${project.accent}`}>
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-serif text-lumio-ink leading-tight mb-6">
                {project.client}: {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-white/50 backdrop-blur-sm border border-lumio-ink/5 rounded-full text-[10px] font-medium text-lumio-ink-soft">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-white inline-flex flex-col justify-center max-w-md">
                <div className="text-[9px] font-bold uppercase tracking-widest text-lumio-ink/30 mb-1.5">Core Result</div>
                <div className={`text-lg md:text-xl font-serif italic leading-tight ${project.accent}`}>
                  {project.result}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              {project.image && (
                <div className="overflow-hidden rounded-[2.5rem] bg-white border border-lumio-ink/5 shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.client} 
                    className="w-full h-auto object-cover aspect-[5/4]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-24">
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-lumio-accent">01. The Challenge</h4>
              <p className="text-lg text-lumio-ink-soft leading-relaxed font-normal">
                {project.challenge}
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-lumio-accent">02. The Strategy</h4>
              <p className="text-lg text-lumio-ink-soft leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
 
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-lumio-accent">03. The Results</h4>
              <p className="text-lg text-lumio-ink-soft leading-relaxed font-normal">
                {project.resultsNarrative}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 self-start space-y-12 bg-lumio-surface p-12 rounded-[2rem] border border-lumio-ink/5 sticky top-32">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-lumio-ink/20 mb-4">Platforms Used</div>
              <div className="space-y-4">
                {project.tags.map(tag => (
                  <div key={tag} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-lumio-accent" />
                    <span className="text-sm font-medium text-lumio-ink-soft">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-lumio-ink/5">
              <div className="text-[10px] font-bold uppercase tracking-widest text-lumio-ink/20 mb-6">Want results like these?</div>
              <button 
                onClick={() => {
                  setView('home');
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 500);
                }}
                className="btn btn-primary w-full py-4 uppercase tracking-widest text-[10px]"
              >
                GET IN TOUCH AND LET'S BUILD YOUR STRATEGY
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lumio-ink text-white py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-12">See more cases.</h2>
          <button 
            onClick={() => { setView('case-studies'); window.scrollTo(0, 0); }}
            className="btn btn-primary px-12"
          >
            View All Case Studies
          </button>
        </div>
      </section>
    </motion.div>
  );
}

function HomeView({ setView, setSelectedProject, activeServiceId, setActiveServiceId }: HomeViewProps) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(PROJECTS.length);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const nextProject = () => {
    setShouldAnimate(true);
    setCurrentProjectIndex((prev) => prev + 1);
  };

  const prevProject = () => {
    setShouldAnimate(true);
    setCurrentProjectIndex((prev) => prev - 1);
  };

  const handleAnimationComplete = () => {
    if (currentProjectIndex >= PROJECTS.length * 2) {
      setShouldAnimate(false);
      setCurrentProjectIndex(currentProjectIndex - PROJECTS.length);
    } else if (currentProjectIndex < PROJECTS.length) {
      setShouldAnimate(false);
      setCurrentProjectIndex(currentProjectIndex + PROJECTS.length);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className=""
    >
      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-lumio-ink">
        <HeroSlideshow />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-lumio-accent block mb-6 px-1">
                Growth Marketing Agency
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] tracking-tight mb-8 drop-shadow-2xl">
                Reach the market <br />
                <span className="italic font-light text-lumio-accent">others miss.</span>
              </h1>
              
              <div className="flex flex-col md:flex-row gap-10 items-start md:items-center mb-10">
                <p className="text-sm md:text-base text-white/90 max-w-lg leading-relaxed font-light drop-shadow-lg">
                  Lumio is a performance marketing agency helping North American brands grow through paid media, SEO, and influencer marketing. We unlock access to high-spending consumer markets that remain untapped by your competitors.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="px-8 py-4 bg-lumio-accent text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-lumio-ink transition-all duration-300 shadow-xl shadow-lumio-accent/20">
                    Get in touch
                  </a>
                  <button 
                    onClick={() => { setView('case-studies'); window.scrollTo(0,0); }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    See our work
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Overlay */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-10 border-t border-white/10 max-w-5xl">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-serif text-white">$100M<span className="text-lumio-accent font-light">+</span></div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">Revenue Generated</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-serif text-white">4.8<span className="text-lumio-accent font-light">x</span></div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">Average ROAS</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-serif text-white">25M<span className="text-lumio-accent font-light">+</span></div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">Spend Managed</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-serif text-white">10M<span className="text-lumio-accent font-light">+</span></div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">Monthly Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Ticker */}
      <section className="bg-white pt-24 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center gap-6">
          <div className="h-px bg-lumio-ink/5 flex-grow" />
          <h2 className="text-xl font-bold uppercase tracking-[0.3em] text-lumio-ink/40 whitespace-nowrap">
            Our Clients
          </h2>
          <div className="h-px bg-lumio-ink/5 flex-grow" />
        </div>
        
        <div className="mask-fade overflow-hidden space-y-8 md:space-y-12">
          {/* Row 1 */}
          <div className="flex gap-20 items-center animate-scroll whitespace-nowrap px-6">
            {[...CLIENT_LOGOS.slice(0, Math.ceil(CLIENT_LOGOS.length / 2)), ...CLIENT_LOGOS.slice(0, Math.ceil(CLIENT_LOGOS.length / 2))].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0">
                <span className="text-xl md:text-2xl font-serif font-bold text-lumio-ink/40 hover:text-lumio-accent transition-all duration-300 cursor-default uppercase tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Row 2 */}
          <div className="flex gap-20 items-center animate-scroll whitespace-nowrap px-6 opacity-80" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
            {[...CLIENT_LOGOS.slice(Math.ceil(CLIENT_LOGOS.length / 2)), ...CLIENT_LOGOS.slice(Math.ceil(CLIENT_LOGOS.length / 2))].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0">
                <span className="text-xl md:text-2xl font-serif font-bold text-lumio-ink/40 hover:text-lumio-accent transition-all duration-300 cursor-default uppercase tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-lumio-surface">
        <SectionTitle 
          eyebrow="What we do" 
          title="Growth services built for ambitious brands" 
          description="From performance ads to cultural market expansion—every service is designed to drive measurable revenue."
        />
        <ServicesTabs 
          setView={setView} 
          activeId={activeServiceId} 
          setActiveId={setActiveServiceId} 
        />
      </section>

      {/* Featured Case Studies Preview */}
      <section id="work" className="section-padding bg-white pb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lumio-accent block mb-3">Featured Work</span>
            <h2 className="text-3xl md:text-5xl font-serif text-lumio-ink leading-tight">
              Real stories, <span className="italic text-lumio-accent font-normal">Real results.</span>
            </h2>
          </div>
          <button 
            onClick={() => { setView('case-studies'); window.scrollTo(0, 0); }}
            className="text-sm font-bold text-lumio-accent flex items-center gap-2 hover:gap-3 transition-all pb-2 border-b-2 border-lumio-accent/20"
          >
            Read More <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="relative group/slider px-4 lg:px-0">
          <div className="overflow-hidden">
            <motion.div 
              animate={{ x: `calc(-${currentProjectIndex * 100}% - ${currentProjectIndex * 2}rem)` }}
              className="flex gap-8 md:hidden"
              transition={shouldAnimate ? { type: "spring", stiffness: 300, damping: 30 } : { duration: 0 }}
              onAnimationComplete={handleAnimationComplete}
            >
              {[...PROJECTS, ...PROJECTS, ...PROJECTS].map((project, idx) => (
                <div key={`${project.id}-${idx}`} className="w-full shrink-0">
                  <CaseStudyCard 
                    project={project} 
                    setView={setView} 
                    setSelectedProject={setSelectedProject} 
                  />
                </div>
              ))}
            </motion.div>

            <motion.div 
              animate={{ x: `calc(-${currentProjectIndex * 50}% - ${currentProjectIndex * 1}rem)` }}
              className="hidden md:flex lg:hidden gap-8"
              transition={shouldAnimate ? { type: "spring", stiffness: 300, damping: 30 } : { duration: 0 }}
              onAnimationComplete={handleAnimationComplete}
            >
              {[...PROJECTS, ...PROJECTS, ...PROJECTS].map((project, idx) => (
                <div key={`${project.id}-tablet-${idx}`} className="w-[calc(50%-1rem)] shrink-0">
                  <CaseStudyCard 
                    project={project} 
                    setView={setView} 
                    setSelectedProject={setSelectedProject} 
                  />
                </div>
              ))}
            </motion.div>

            <motion.div 
              animate={{ x: `calc(-${currentProjectIndex * (100 / 3)}% - ${currentProjectIndex * (32 / 3)}px)` }}
              className="hidden lg:flex gap-8"
              transition={shouldAnimate ? { type: "spring", stiffness: 300, damping: 30 } : { duration: 0 }}
              onAnimationComplete={handleAnimationComplete}
            >
              {[...PROJECTS, ...PROJECTS, ...PROJECTS].map((project, idx) => (
                <div key={`${project.id}-desktop-${idx}`} className="w-[calc(33.333%-1.334rem)] shrink-0">
                  <CaseStudyCard 
                    project={project} 
                    setView={setView} 
                    setSelectedProject={setSelectedProject} 
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-12 z-10 opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <button 
              onClick={prevProject}
              className="w-12 h-12 rounded-full bg-white shadow-xl border border-lumio-ink/5 flex items-center justify-center text-lumio-ink hover:text-lumio-accent transition-colors"
            >
              <ChevronRight size={24} className="rotate-180" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-12 z-10 opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <button 
              onClick={nextProject}
              className="w-12 h-12 rounded-full bg-white shadow-xl border border-lumio-ink/5 flex items-center justify-center text-lumio-ink hover:text-lumio-accent transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-lumio-surface py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionTitle 
              eyebrow="Why Lumio" 
              title="Built differently." 
              description="Most agencies are specialists pretending to go broad. We are specialists who know how to scale."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-lumio-accent-light flex items-center justify-center rounded-xl text-lumio-accent shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1">Senior talent only</h4>
                  <p className="text-[11px] text-lumio-ink-muted leading-relaxed">Account managed by experienced marketers.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-lumio-accent-light flex items-center justify-center rounded-xl text-lumio-accent shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1">Cultural intelligence</h4>
                  <p className="text-[11px] text-lumio-ink-muted leading-relaxed">We understand nuances that make brands resonate in cultural communities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-lumio-accent-light flex items-center justify-center rounded-xl text-lumio-accent shrink-0">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1">Results, not reports</h4>
                  <p className="text-[11px] text-lumio-ink-muted leading-relaxed">We measure ourselves by your revenue growth, not vanity metrics.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-lumio-accent-light flex items-center justify-center rounded-xl text-lumio-accent shrink-0">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1">Custom solutions</h4>
                  <p className="text-[11px] text-lumio-ink-muted leading-relaxed">Full access to your accounts and real-time performance data.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-lumio-ink/5 relative z-10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-lumio-accent text-lumio-accent" />)}
              </div>
              <p className="text-sm font-serif italic text-lumio-ink leading-relaxed mb-4">
                "It was great working with Lumio. They are very knowledgeable and well-versed in Amazon Ads, and they helped us achieve a really strong target TACOS"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-lumio-accent/10 flex items-center justify-center text-lumio-accent font-bold text-xs">O</div>
                <div>
                  <div className="text-[10px] font-bold text-lumio-ink uppercase tracking-wider">Operations Manager</div>
                  <div className="text-[9px] text-lumio-ink-muted uppercase tracking-widest">Performance CPG Brand</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-lumio-ink p-8 rounded-3xl shadow-2xl relative ml-0 md:ml-12 lg:ml-20 -mt-4 md:-mt-8 z-20"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-lumio-accent text-lumio-accent" />)}
              </div>
              <p className="text-sm font-serif italic text-white leading-relaxed mb-4">
                "Lumio set up our WeChat presence, ran a CNY campaign, and connected us with local KOLs. Within 90 days we had closed three properties directly attributed to their work. The ROI was unlike anything we'd seen from traditional advertising"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-lumio-accent font-bold text-xs border border-white/5">D</div>
                <div>
                  <div className="text-[10px] font-bold text-white uppercase tracking-wider">Director of Marketing</div>
                  <div className="text-[9px] text-white/50 uppercase tracking-widest">Luxury Real Estate Group</div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-lumio-accent/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      <ContactForm />
    </motion.div>
  );
}

interface FreeSeoAuditViewProps {
  setView: (v: ViewState) => void;
  key?: React.Key;
}

function FreeSeoAuditView({ setView }: FreeSeoAuditViewProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-[#FBFBFA] min-h-screen pt-24"
    >
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-[#FBFBFA] border-b border-lumio-ink/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start relative z-10">
          <div className="lg:col-span-7">
            <div className="flex items-center mb-6">
              <span className="bg-lumio-teal-light text-lumio-teal text-[10px] font-bold px-3 py-1.5 rounded tracking-[0.2em] uppercase">FREE SEO AUDIT</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-lumio-ink leading-[1.1] mb-8">
              Find out why Google isn't <span className="italic text-lumio-accent font-normal">sending you customers.</span>
            </h1>
            <p className="text-base text-lumio-ink-muted leading-relaxed mb-10 max-w-xl">
              Get a comprehensive SEO audit of your website in 48 hours — completely free, no strings attached. We'll show you exactly what's holding your rankings back and what to fix first.
            </p>
            
            <div className="flex flex-wrap gap-8 mb-16">
              {[
                'Delivered within 48 hours',
                'No credit card required',
                'No obligation to buy'
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm font-medium text-lumio-ink-soft">
                  <div className="w-2 h-2 rounded-full bg-lumio-teal shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-10 border-t border-lumio-ink/5">
              <div>
                <div className="text-3xl font-serif text-lumio-ink">68<span className="text-lumio-accent">%</span></div>
                <div className="text-[10px] uppercase tracking-widest text-lumio-ink/30 mt-2">Clicks go to top 5</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-lumio-ink">3.5<span className="text-lumio-accent">×</span></div>
                <div className="text-[10px] uppercase tracking-widest text-lumio-ink/30 mt-2">More traffic than paid</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-lumio-ink">53<span className="text-lumio-accent">%</span></div>
                <div className="text-[10px] uppercase tracking-widest text-lumio-ink/30 mt-2">Total organic traffic</div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="bg-lumio-surface p-10 rounded-[2.5rem] border border-lumio-ink/10 shadow-sm relative overflow-hidden">
               <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-serif text-lumio-ink mb-2">Get your free audit</h3>
                    <p className="text-xs text-lumio-ink-muted mb-8 italic">Delivered to your inbox within 48 hours.</p>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-lumio-ink/10 text-sm focus:border-lumio-accent outline-none bg-white font-sans" />
                        <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-lumio-ink/10 text-sm focus:border-lumio-accent outline-none bg-white font-sans" />
                      </div>
                      <input type="email" placeholder="Business Email" className="w-full px-4 py-3 rounded-xl border border-lumio-ink/10 text-sm focus:border-lumio-accent outline-none bg-white font-sans" />
                      <input type="url" placeholder="Website URL (e.g. https://yourbrand.com)" className="w-full px-4 py-3 rounded-xl border border-lumio-ink/10 text-sm focus:border-lumio-accent outline-none bg-white font-sans" />
                      <select className="w-full px-4 py-3 rounded-xl border border-lumio-ink/10 text-sm focus:border-lumio-accent outline-none bg-white font-sans appearance-none text-lumio-ink-muted text-gray-500">
                        <option>Select Business Type</option>
                        <option>E-commerce</option>
                        <option>Local Business</option>
                        <option>SaaS / Tech</option>
                        <option>Professional Services</option>
                        <option>Other</option>
                      </select>
                      <button 
                        onClick={() => setSubmitted(true)}
                        className="btn btn-primary w-full py-4 uppercase tracking-widest text-xs font-bold"
                      >
                        Request Free Audit →
                      </button>
                      <p className="text-[10px] text-center text-lumio-ink/30 italic">
                        🔒 Your information is secure and only used for your audit.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 bg-lumio-teal-light text-lumio-teal rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check size={32} />
                    </div>
                    <h3 className="text-2xl font-serif text-lumio-ink mb-4">Request Received</h3>
                    <p className="text-sm text-lumio-ink-muted leading-relaxed">
                      We've received your request. A senior SEO specialist is reviewing your site now. You'll receive your PDF audit via email within 48 business hours.
                    </p>
                  </motion.div>
                )}
               </AnimatePresence>
            </div>
            
            {/* Decorative Polish */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lumio-accent/10 rounded-full blur-[120px] -z-10" />
          </div>
        </div>

        {/* Gradient backdrop similar to Chinese Market page */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lumio-accent/5 to-transparent pointer-events-none" />
      </section>

      {/* Audit Features */}
      <section className="py-16 bg-lumio-surface">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            eyebrow="What's Inside" 
            title="A real audit. Not an automated report." 
            description="Every audit is manually reviewed by a senior specialist to provide context that crawler tools miss."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Technical SEO Health', desc: 'Site speed, Core Web Vitals, crawlability, and indexation analysis.', tag: 'Technical' },
              { num: '02', title: 'On-Page Analysis', desc: 'Title tags, metadata, header structure, and keyword optimization.', tag: 'On-Page' },
              { num: '03', title: 'Keyword Gap Analysis', desc: 'Identify high-value keywords your competitors are winning but you are not.', tag: 'Keywords' },
              { num: '04', title: 'Backlink Profile Review', desc: 'Quality and authority assessment of your current link relationships.', tag: 'Authority' },
              { num: '05', title: 'Competitive Benchmarking', desc: 'See exactly how you stack up against your top 3 rivals.', tag: 'Competitive' },
              { num: '06', title: 'Priority Action Plan', desc: 'The 10 highest-impact fixes ranked by effort vs. measurable ROI.', tag: 'Actionable' }
            ].map(item => (
              <div key={item.num} className="bg-white p-6 rounded-3xl border border-lumio-ink/5 hover:border-lumio-accent/10 transition-all flex flex-col group">
                <div className="text-3xl font-serif text-lumio-accent/5 mb-4 group-hover:text-lumio-accent/10 transition-colors">
                  {item.num}
                </div>
                <h4 className="text-base font-bold text-lumio-ink mb-2">{item.title}</h4>
                <p className="text-[13px] text-lumio-ink-muted leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="mt-auto">
                  <span className="px-2 py-1 bg-lumio-teal-light text-lumio-teal text-[8px] font-bold uppercase rounded tracking-widest">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Findings */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            eyebrow="Audit Sample" 
            title="Real findings, real actions." 
            description="Here is a look at the level of detail we provide in every single free report."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-lumio-ink p-10 rounded-[2.5rem] text-white">
              <div className="flex items-center justify-between mb-10">
                <div className="text-[10px] font-bold uppercase tracking-widest text-lumio-accent">Technical Finding</div>
                <span className="px-3 py-1 bg-rose-500/20 text-rose-400 text-[9px] font-bold uppercase rounded">Critical</span>
              </div>
              <p className="text-lg font-serif mb-6 leading-snug">
                "Mobile page speed is currently 4.8s. Google’s threshold is under 2.5s. You’re likely losing 30% of traffic before the page even loads."
              </p>
              <div className="pt-8 border-t border-white/10">
                <div className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-3 font-mono">Action to Fix</div>
                <p className="text-xs text-white/60 leading-relaxed italic">
                  Compress high-resolution hero images and enable lazy loading for secondary visual components.
                </p>
              </div>
            </div>
            
            <div className="bg-lumio-surface p-10 rounded-[2.5rem] border border-lumio-ink/5">
              <div className="flex items-center justify-between mb-10">
                <div className="text-[10px] font-bold uppercase tracking-widest text-lumio-accent">On-Page Finding</div>
                <span className="px-3 py-1 bg-amber-500/10 text-amber-600 text-[9px] font-bold uppercase rounded">High Impact</span>
              </div>
              <p className="text-lg font-serif mb-6 leading-snug text-lumio-ink">
                "Targeting [Product Name] in Toronto, but your homepage H1 tag is generic. You are sitting on page 3 when you could be in the top 5."
              </p>
              <div className="pt-8 border-t border-lumio-ink/5">
                <div className="text-[9px] font-bold uppercase tracking-widest text-lumio-ink/30 mb-3 font-mono">Action to Fix</div>
                <p className="text-xs text-lumio-ink-muted leading-relaxed italic">
                  Restructure header tags to include high-intent geographic keywords without over-optimizing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lumio-accent py-24 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif mb-8 leading-tight">Find out what Google isn't telling you.</h2>
          <button 
            onClick={() => {
              const el = document.querySelector('input[placeholder="First Name"]');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="btn bg-white text-lumio-accent px-12 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-lumio-surface"
          >
            Request Free Audit
          </button>
        </div>
      </section>
    </motion.div>
  );
}

interface InsightsViewProps {
  setView: (v: ViewState) => void;
  setSelectedArticle: (a: Article) => void;
  key?: React.Key;
}

function InsightsView({ setView, setSelectedArticle }: InsightsViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <section className="px-6 md:px-12 py-24 bg-[#FBFBFA] border-b border-lumio-ink/5">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-lumio-accent block mb-6">Market Intelligence</span>
          <h1 className="text-4xl md:text-5xl font-serif text-lumio-ink leading-[1.1] mb-6">
            Insights on <span className="italic text-lumio-accent font-normal">Growth & Dominance.</span>
          </h1>
          <p className="text-base text-lumio-ink-soft max-w-2xl leading-relaxed">
            Deep dives into advertising strategies, cultural shifts, and the technical mechanisms behind high-performance brands.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 gap-y-16">
            {INSIGHTS_ARTICLES.map((article, i) => (
              <div 
                key={i} 
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedArticle(article);
                  setView('insight-detail');
                  window.scrollTo(0, 0);
                }}
              >
                <div className="bg-lumio-surface aspect-[4/3] rounded-[1.5rem] mb-6 overflow-hidden border border-lumio-ink/5 transition-all group-hover:border-lumio-accent/20">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="text-[9px] font-bold text-lumio-accent uppercase tracking-widest mb-3">{article.category}</div>
                <h3 className="text-xl font-serif text-lumio-ink mb-3 group-hover:text-lumio-accent transition-colors">{article.title}</h3>
                <p className="text-[11px] text-lumio-ink-soft leading-relaxed mb-4 line-clamp-2">{article.desc}</p>
                <div className="flex items-center gap-4 text-[9px] font-bold text-lumio-ink/30 uppercase tracking-widest">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function InsightDetailView({ article, setView }: { article: Article; setView: (v: ViewState) => void; key?: React.Key }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="bg-white pt-24"
    >
      <div className="max-w-3xl mx-auto px-6 py-20">
        <button 
          onClick={() => setView('insights')}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-lumio-accent mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft size={14} /> Back to Insights
        </button>
        
        <div className="text-[10px] font-bold text-lumio-accent uppercase tracking-[0.2em] mb-6">{article.category}</div>
        <h1 className="text-4xl md:text-6xl font-serif text-lumio-ink leading-[1.1] mb-6">{article.title}</h1>
        <p className="text-xl text-lumio-ink-soft font-sans mb-10 leading-relaxed italic">{article.desc}</p>
        
        <div className="bg-lumio-surface aspect-video rounded-[2rem] overflow-hidden mb-12 border border-lumio-ink/5">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex items-center gap-6 text-[11px] font-bold text-lumio-ink/30 uppercase tracking-widest mb-12 border-b border-lumio-ink/5 pb-8">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
          <span>•</span>
          <span>Written by Lumio Growth Team</span>
        </div>

        <div className="markdown-body">
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="text-base md:text-lg text-lumio-ink-soft leading-relaxed mb-8">{children}</p>,
              strong: ({ children }) => <strong className="font-bold text-lumio-ink">{children}</strong>,
              h1: ({ children }) => <h1 className="text-2xl font-serif text-lumio-ink mb-6 mt-10">{children}</h1>,
              h2: ({ children }) => <h2 className="text-xl font-serif text-lumio-ink mb-4 mt-8">{children}</h2>,
              h3: ({ children }) => <h3 className="text-lg font-serif text-lumio-ink mb-3 mt-6">{children}</h3>,
              ul: ({ children }) => <ul className="list-disc pl-6 mb-8 space-y-2 text-lumio-ink-soft">{children}</ul>,
              li: ({ children }) => <li>{children}</li>
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </div>
    </motion.div>
  );
}

interface ChineseMarketingViewProps {
  setView: (v: ViewState) => void;
  key?: React.Key;
}

const LucideIcon = ({ name, className }: { name: string, className?: string }) => {
  const icons: Record<string, any> = {
    MessageSquare,
    Smartphone,
    Users,
    BarChart,
    Type,
    Calendar,
    Search,
    CheckCircle,
    Star,
    Zap,
    PenTool,
    TrendingUp
  };
  const Icon = icons[name] || Globe;
  return <Icon className={className || "w-6 h-6"} />;
};

function ChineseMarketMarketingView({ setView }: ChineseMarketingViewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: '7.1M+', label: 'Chinese consumers in North America' },
    { value: '$150B', label: 'Annual spending power' },
    { value: '3x', label: 'Higher brand loyalty vs general market' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FBFBFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 md:pt-40 md:pb-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[9px] font-bold uppercase tracking-[0.2em] text-lumio-accent block mb-8"
              >
                Chinese Market Marketing Specialist
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif leading-[1.1] mb-8 text-lumio-ink"
              >
                Your brand, inside the <span className="italic text-lumio-accent font-normal leading-normal">North American Chinese community.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm md:text-base text-lumio-ink-muted mb-10 leading-relaxed max-w-xl"
              >
                There are 1.7 million Chinese Canadians and 5.4 million Chinese Americans — high-spending, brand-loyal, and almost entirely invisible to your current marketing. Lumio helps North American brands change that.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-5 mb-16"
              >
                <a href="#packages" className="btn btn-primary px-10 py-4 shadow-xl shadow-lumio-accent/20 text-[10px] uppercase tracking-widest font-bold">See our packages</a>
                <button 
                  onClick={() => {
                    const el = document.getElementById('contact-chinese');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn bg-lumio-ink/5 border border-lumio-ink/10 text-lumio-ink px-10 py-4 hover:bg-lumio-ink/10 transition-colors uppercase tracking-widest text-[10px] font-bold"
                >
                  GET IN TOUCH
                </button>
              </motion.div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-lumio-ink/10 text-left">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-xl md:text-3xl font-serif text-lumio-ink mb-2">{stat.value}</div>
                    <div className="text-[9px] uppercase tracking-widest text-lumio-ink-muted/60 leading-tight font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative z-10 w-full"
              >
                {/* Main Opportunity Card */}
                <div className="bg-white rounded-[2.5rem] border border-lumio-ink/5 p-12 mb-8 shadow-xl text-left">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-lumio-accent mb-8">Market Opportunity</div>
                  <div className="mb-10">
                    <div className="text-4xl md:text-5xl font-serif text-lumio-ink mb-4">$150B</div>
                    <div className="text-[12px] text-lumio-ink-muted">Annual purchasing power of North American Chinese consumers</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {['WeChat', 'Rednote', 'Douyin', 'Bilibili'].map(tag => (
                      <span key={tag} className="px-5 py-2.5 bg-lumio-ink/5 border border-lumio-ink/10 rounded-full text-[9px] font-bold text-lumio-ink-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-6 text-left">
                  <div className="bg-white rounded-[2rem] border border-lumio-ink/5 p-8 shadow-md">
                    <div className="text-2xl font-serif text-lumio-ink mb-4">82%</div>
                    <div className="text-[10px] text-lumio-ink-muted leading-relaxed">
                      of Chinese North Americans use <br /> WeChat daily
                    </div>
                  </div>
                  <div className="bg-white rounded-[2rem] border border-lumio-ink/5 p-8 shadow-md">
                    <div className="text-2xl font-serif text-lumio-ink mb-4">4.2x</div>
                    <div className="text-[10px] text-lumio-ink-muted leading-relaxed">
                      higher average order value vs <br /> general market
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Polish */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lumio-accent/10 rounded-full blur-[120px] -z-10" />
            </div>
          </div>
        </div>

        {/* Floating shapes background - full width */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lumio-accent/5 to-transparent pointer-events-none" />
      </section>

      {/* Opportunity Band */}
      <div className="bg-lumio-accent py-6 px-6 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center gap-6">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm md:text-base text-white font-medium text-left">
            <span className="opacity-60 mr-2">The hidden opportunity:</span>
            North American Chinese consumers are one of the most underserved markets on the continent. Most brands simply don't know how to reach them, but we do.
          </p>
        </div>
      </div>

      {/* Main Content Area (Light) */}
      <div className="bg-white rounded-t-[4rem]">

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            eyebrow="How it works" 
            title="Simplified market entry." 
            description="We handle the complexity of entering the North American Chinese market so your team doesn't have to."
          />
          <div className="grid md:grid-cols-4 gap-0 border border-lumio-ink/5 rounded-[2.5rem] overflow-hidden bg-white shadow-lg">
            {CHINESE_MARKET_STEPS.map((step, idx) => (
              <div key={idx} className={`p-8 border-b md:border-b-0 md:border-r border-lumio-ink/5 last:border-0 relative group hover:bg-lumio-surface transition-colors`}>
                <div className="text-4xl font-serif text-lumio-accent/10 mb-6 group-hover:text-lumio-accent/20 transition-colors uppercase italic">{step.id}</div>
                <h4 className="text-base font-bold mb-3">{step.title}</h4>
                <p className="text-[13px] text-lumio-ink-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-lumio-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            eyebrow="What we do" 
            title="Strategic channel management." 
            description="Full-spectrum marketing management across the platforms your North American Chinese customers use daily."
          />
          <div className="grid md:grid-cols-3 gap-4">
            {CHINESE_SERVICES.map((svc, i) => (
              <div key={i} className="bg-white p-5 rounded-[1.5rem] border border-lumio-ink/5 hover:border-lumio-accent/20 transition-all group text-left">
                <div className="w-8 h-8 bg-lumio-accent/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-lumio-accent group-hover:text-white transition-all text-lumio-accent">
                  <LucideIcon name={svc.icon} className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-base font-serif mb-1.5 text-lumio-ink">{svc.name}</h4>
                <p className="text-[11px] text-lumio-ink-muted leading-relaxed mb-4">{svc.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {svc.plats.map(p => (
                    <span key={p} className="text-[6.5px] font-bold uppercase tracking-widest px-1.5 py-0.5 bg-lumio-surface border border-lumio-ink/5 rounded-full text-lumio-ink-soft">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Calendar */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle 
            eyebrow="Cultural Calendar" 
            title="Moments that matter most." 
            description="We help you show up authentically during the celebrations that drive the highest consumer spend."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHINESE_SEASONS.map((season, i) => (
              <div key={i} className="bg-lumio-surface p-5 rounded-xl border border-lumio-ink/5 hover:border-lumio-accent/10 transition-all">
                <div className="text-2xl mb-3">{season.icon}</div>
                <h4 className="text-sm font-bold mb-1 text-lumio-ink">{season.name}</h4>
                <div className="text-[8px] font-bold text-lumio-accent uppercase tracking-widest mb-2 italic">{season.date}</div>
                <p className="text-[11px] text-lumio-ink-muted leading-relaxed">{season.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 bg-lumio-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            eyebrow="Our Packages" 
            title="Choose your level of engagement." 
            description="From first-time market entry to full-scale North American Chinese market domination — we have a tier for every stage."
          />
          <div className="grid md:grid-cols-3 gap-0 border border-lumio-ink/10 rounded-[2rem] overflow-hidden bg-white shadow-xl text-left items-stretch">
            {PACKAGES.map((pkg, idx) => (
              <div key={idx} className={`p-8 flex flex-col h-full ${pkg.featured ? 'bg-lumio-ink text-white' : 'border-r border-lumio-ink/5 last:border-0'}`}>
                <div className={`inline-block px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-6 w-fit ${pkg.featured ? 'bg-lumio-accent text-white' : 'bg-lumio-accent-light text-lumio-accent'}`}>
                  {pkg.badge}
                </div>
                <h4 className={`text-2xl font-serif mb-3 ${pkg.featured ? 'text-white' : 'text-lumio-ink'}`}>{pkg.name}</h4>
                <div className="min-h-[2.5rem] mb-6">
                  <p className={`text-[12px] leading-relaxed ${pkg.featured ? 'text-white/40' : 'text-lumio-ink-muted'}`}>
                    {pkg.tagline}
                  </p>
                </div>
                
                <div className={`h-px w-full mb-6 ${pkg.featured ? 'bg-white/10' : 'bg-lumio-ink/5'}`} />

                <div className={`text-[9px] font-bold uppercase tracking-widest mb-4 ${pkg.featured ? 'text-white/30' : 'text-lumio-ink/30'}`}>What's Included</div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${pkg.featured ? 'bg-lumio-accent/20' : 'bg-lumio-accent-light'}`}>
                        <div className={`w-1 h-1 rounded-full ${pkg.featured ? 'bg-lumio-accent' : 'bg-lumio-accent'}`} />
                      </div>
                      <span className={`text-[12px] leading-relaxed ${pkg.featured ? 'text-white/80' : 'text-lumio-ink-soft'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <button 
                    onClick={() => {
                      const el = document.getElementById('contact-chinese');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`btn w-full py-3.5 text-[9px] tracking-widest uppercase font-bold transition-all shadow-lg ${pkg.featured ? 'btn-primary shadow-lumio-accent/20' : 'bg-lumio-surface border border-lumio-ink/10 hover:border-lumio-accent text-lumio-ink'}`}
                  >
                    Get Started
                  </button>
                  <p className={`text-[9px] italic text-center mt-4 ${pkg.featured ? 'text-white/30' : 'text-lumio-ink-muted'}`}>
                    {pkg.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-lumio-ink-muted mt-8 italic">
            Contact us for custom pricing tailored to your brand's goals and budget.
          </p>
        </div>
      </section>

      {/* À LA CARTE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            eyebrow="À La Carte" 
            title="Not ready for a retainer? Start here." 
            description="One-time projects and bolt-on services for brands testing the water before committing to a monthly package."
          />
          <div className="grid md:grid-cols-3 gap-4">
            {CHINESE_ADDONS.map((addon, i) => (
              <div key={i} className="bg-lumio-surface p-6 rounded-2xl border border-lumio-ink/5 hover:border-lumio-accent/20 transition-all group flex flex-col items-start text-left">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm text-lumio-accent">
                  <LucideIcon name={addon.icon} className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold mb-2 text-lumio-ink">{addon.name}</h4>
                <p className="text-[12px] text-lumio-ink-muted leading-relaxed mb-6">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Wrap-up */}
      <section className="py-16 bg-lumio-surface relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <SectionTitle 
            eyebrow="Questions" 
            title="Frequently asked" 
            dark={false}
          />
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-lumio-ink/5 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left group"
                >
                  <span className="text-base font-normal text-lumio-ink group-hover:text-lumio-accent transition-colors pr-6">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${openFaq === i ? 'bg-lumio-accent text-white rotate-45' : 'bg-lumio-surface text-lumio-accent'}`}>
                    <Plus className="w-3.5 h-3.5" />
                  </div>
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-[13px] text-lumio-ink-soft leading-relaxed border-t border-lumio-ink/5 pt-4 italic">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="contact-chinese">
        <ContactForm />
      </div>
      </div>
    </motion.div>
  );
}

function Footer({ setView, setActiveServiceId }: { setView: (v: ViewState) => void, setActiveServiceId: (id: string) => void }) {
  return (
    <footer className="bg-lumio-ink pt-20 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <button onClick={() => { setView('home'); window.scrollTo(0,0); }} className="text-2xl font-serif text-white mb-6">
            Lumi<span className="text-lumio-accent">o</span>
          </button>
          <p className="text-sm text-white/40 leading-relaxed max-w-xs">
            Growth marketing for ambitious North American brands—including the Chinese consumer market others miss.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-6">Services</h4>
          <ul className="space-y-4">
            {[
              { name: 'Paid Media', id: 'paid' },
              { name: 'SEO', id: 'seo' },
              { name: 'Influencer', id: 'influencer' },
              { name: 'Chinese Market Marketing', id: 'chinese' }
            ].map(link => (
              <li key={link.name}>
                <button 
                  onClick={() => {
                    if (link.id === 'chinese') { 
                      setView('chinese-marketing'); 
                      window.scrollTo(0, 0); 
                    } else if (link.id === 'seo') {
                      setView('free-seo-audit');
                      window.scrollTo(0, 0);
                    } else {
                      setView('home');
                      setActiveServiceId(link.id);
                      setTimeout(() => {
                        const el = document.getElementById('services');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="text-sm text-white/60 hover:text-lumio-accent transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-6">Company</h4>
          <ul className="space-y-4">
            {['About', 'Case Studies', 'Insights'].map(link => (
              <li key={link}>
                {link === 'Insights' ? (
                  <button 
                    onClick={() => { setView('insights'); window.scrollTo(0, 0); }}
                    className="text-sm text-white/60 hover:text-lumio-accent transition-colors"
                  >
                    {link}
                  </button>
                ) : link === 'Case Studies' ? (
                  <button 
                    onClick={() => { setView('case-studies'); window.scrollTo(0, 0); }}
                    className="text-sm text-white/60 hover:text-lumio-accent transition-colors"
                  >
                    {link}
                  </button>
                ) : (
                  <a href="#" className="text-sm text-white/60 hover:text-lumio-accent transition-colors">{link}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/60 hover:bg-lumio-accent hover:text-white transition-all"><Instagram size={18} /></a>
            </div>
          <a href="mailto:hello@lumio.ca" className="text-sm text-white/60 hover:text-lumio-accent flex items-center gap-2">
            <Mail size={16} /> hello@lumio.ca
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-medium text-white/20">© 2025 LUMIO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="text-[10px] font-medium text-white/20 hover:text-white transition-colors">PRIVACY POLICY</a>
          <a href="#" className="text-[10px] font-medium text-white/20 hover:text-white transition-colors">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeServiceId, setActiveServiceId] = useState<string>(GENERAL_SERVICES[0].id);

  return (
    <div className="min-h-screen bg-lumio-surface overflow-x-hidden">
      <Navbar 
        currentView={currentView} 
        setView={setCurrentView} 
        setActiveServiceId={setActiveServiceId}
      />
      
      <main>
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <HomeView 
              key="home" 
              setView={setCurrentView} 
              setSelectedProject={setSelectedProject} 
              activeServiceId={activeServiceId}
              setActiveServiceId={setActiveServiceId}
            />
          )}
          {currentView === 'case-studies' && (
            <CaseStudiesView 
              key="case-studies" 
              setView={setCurrentView} 
              setSelectedProject={setSelectedProject} 
            />
          )}
          {currentView === 'case-detail' && selectedProject && (
            <CaseDetailView 
              key={`detail-${selectedProject.id}`} 
              project={selectedProject} 
              setView={setCurrentView} 
            />
          )}
          {currentView === 'chinese-marketing' && (
            <ChineseMarketMarketingView key="chinese" setView={setCurrentView} />
          )}
          {currentView === 'free-seo-audit' && (
            <FreeSeoAuditView key="seo-audit" setView={setCurrentView} />
          )}
          {currentView === 'insights' && (
            <InsightsView key="insights" setView={setCurrentView} setSelectedArticle={setSelectedArticle} />
          )}
          {currentView === 'insight-detail' && selectedArticle && (
            <InsightDetailView key="insight-detail" article={selectedArticle} setView={setCurrentView} />
          )}
        </AnimatePresence>
      </main>

      <Footer setView={setCurrentView} setActiveServiceId={setActiveServiceId} />

      {/* Global CSS for some utility animations */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </div>
  );
}

