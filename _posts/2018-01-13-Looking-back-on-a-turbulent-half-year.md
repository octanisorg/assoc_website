---
published: true
layout: post
title: "Looking back on a turbulent half year"
author:
  display_name: Johannes
  login: johannes
  email: "info@octanis.org"
  url: ""
author_login: johannes
author_email: "info@octanis.org"
bgimage: r1_headline.jpg
categories:
  - Octanis
---
<style>.post img{max-width:40%;float:left; margin-right:45px;} .post{text-align: justify;}</style>

It is crazy how fast time passes when you are well occupied doing things you love.  It was only 2 weeks ago, that somebody of our group noticed, that we have not written any updates here for nearly half a year.  This is not because nothing has happened in these 6 months, quite the opposite! So many things have been advancing and changing, that we hardly get the time to write a post here.

Use the following links to directly dive into the different topics. Or read from top to bottom to get a broad overview of what happened.
- [General assembly and board changes](#general-assembly-and-board-changes)
- [Holacracy](#holacracy)
- [Rover](#rover)
- [Rack](#rack)
- [Nestbox](#nestbox)
- [Fujibox](#fujibox)

The next few weeks will be very busy for most of us, with work outside of Octanis and during that time we will not have any Open-Nights. We will start again to have our weekly gettogethers on the 6th of February.

-------------------------------


General assembly and board changes
--
As we are organized as an association, we hold an ordinary general assembly once per year. At this assembly we present what happened during the year, talk about the finances of the association and elect the new board members for the year to come. This years general assembly was held on the 19th of October at Haquarium. For the extra curious, you can find [the assembly minutes on Github](https://github.com/octanisorg/minutes/blob/master/AG20171019.md). This year there were multiple changes to the constitution of the board. After three years of dedication, Marion has decided to leave the board in order to focus on other engagements. At the same time, Franziska Meinherz and Johannes Wüthrich were elected into the board. Franziska is a PHD student in the environmental science section at EPFL and Johannes is a master student in the electrical engineering section. Together with the existing members (Sam, Raffael, Quentin and Ana) there board has now 6 members.


Holacracy
--
Speaking about the board of the association: Over the last few years it has become clearer and clearer, that our board-meetings often took an awful lot of time, but did not result in much. In the past we held board meeting maybe every other month, but then four multiple ours in a row. This always led to extended discussions and people getting sidetracked.

So in an effort to change this, Sam introduced us to the concept of [Holacracy](https://www.holacracy.org/whitepaper). Now, going into details of what this means for us will fill another blog post, so we leave that for later.

In short: The entire association is organized in "circles". There is for example a "board-circle", a "rover-circle", a "nestbox-circle" etc. Each circle has a certain number of members and each member has one or multiple clearly defined roles within that circle.  For example in the board circle we have the "Bookkeeping Baboon" role, in charge of the accounting, and which is currently filled by Quentin. People can of course be part of multiple circles. This organization should give all aspects of the association a better structure. It also gives all the member of a circle more freedom, as they are fully responsible for everything linked to their role. This structure is on purpose very flat. There are no bosses and no workers, but people equally responsible for different domains.

The Holycracy framework also foresees certain types of meetings, where the tactical meeting is clearly the most important. A tactical meeting is a short meeting (in our case usually less than 25min), with a clearly defined structure. Again, this should allow to be more efficient, by cutting of any unnecessary discussion and distractions, so often encountered in other types of meetings. In the case of the board, we have passed from having a 4-6 hour meeting every 1-2 months to one 25min meeting every week. And I think we can already say now, that these short meetings are much, much, much more efficient than the ones we had before.

If you are interested in seeing, what it means to be part of the Octanis Board and if you are interested in really investing yourself into this association, talk to us, or come directly to one of our board tactical meetings, on Tuesday at 18:15 in MED - EPFL.


Rover
--
In the last blog post, we wrote about how the Rover went to Antarctica and came back again. Since then we have mostly done work behind the scenes. Because, together with the Rover hardware which came back from Antarctica, there is also a huge amount of data, from all the sensors and subsystems which got delivered back to us. You might remember that we had a live dashboard, which showed some data, while the rover was on its mission. But this was only a very small part of all the measurements recorded by the system. The much bigger chunk of data was stored locally on the rover.

So in September a group of people - including Sam, Franziska and Beat - started looking at this data. And as it is so often in science, recording the data is one thing, but actually making sense of it and doing the post-treatment is on its own a big challenge. For our primary mission of measuring [the rugosity](https://en.wikipedia.org/wiki/Rugosity) of the snow, we are working on making sense of the LIDAR measurement coupled with the data from the position measurement (GPS and accelerometer)

But there is not only the scientific aspect to the recorded data, but also the engineering view of the mission. In order to look forward on a possible future mission we need to understand how well our current system works, where the problems were located and what did not work at all. And to answer these question we again need to have a close look at all the recorded data. In this case for example the inside and outside temperature, the battery charging and discharging curves, the feedback from the motors, and many more. While this is not the most interesting and immediately rewarding kind of work, it is a very important step towards any future new prototypes.

Towards the end of November we also started brainstorming about a new and bigger rover model. It might include track instead of wheels, a roll cage to make it self righting and communication using CAN bus. So stay tuned, this will get interesting.


Rack
--
![The mechanical compartement of the rack](/img/blog-post-20180113/rack-mechanics.jpg)

The Octanis Racks (plural by now) have gone through a very steep development. As outlined in the previous post, we had started to assemble all our tools into a rack, covering just 1 m^2 of floor space, but offering a highly versatile work experience. You can see below what this look like. All the tools are thematically organized into compartments; there is a mechanical workshop compartment, a electronics testing compartment, a 3D printing compartment etc. The first rack we built was to accommodate the tools we had at Haquarium. And this rack, called the [Faraday](https://en.wikipedia.org/wiki/Michael_Faraday) rack, is still residing, in the now new rooms of Haquarium. With our acceptance as an EPFL association and our increased presence in the MED building on the EPFL campus, we started to look out to also have a rack there. We were able to get into a partnership with the Discovery Learning Labs (DLL) at EPFL, which allowed us to build another rack, called the [Green](https://en.wikipedia.org/wiki/George_Green_(mathematician)) rack, at EPFL. The tools present in this second rack are very similar to the ones at Haquarium; again we have electronics prototyping tools, like a soldering iron, an oscilloscope etc, a 3D printer, mechanical tools, like screw drivers, a drill, and many more. This allows us to do most of the work for our projects using the rack at EPFL.

![The electronics compartement of the rack](/img/blog-post-20180113/rack-electronics.jpg)

During the last 3 months we started initiating people in how to use the rack and in rapid prototyping in general. Sam and Raffael held a weekly 1-hour workshop on Thursday evening, where they presented [the idea of the rack and the tools](https://www.meetup.com/octanis/events/nvlmxnywpbmb/). But this course did not only serve as a presentation of the tools, but also as an on-boarding opportunity for people who wanted to test the racks. The Green rack at EPFL has a fully digital access control system. Reservation and unlocking of tools and compartments can be made over a [dedicated website](https://racks.octanis.org/). Eventually the idea is to make the racks (and many copies) publicly accessible, so that anybody can reserve and use tools.  But at the moment we are in a semi-closed Beta-testing phase, and in order to get access to the rack in this stage people have to participate at a Thursday workshop.

Summed over all the rack introduction workshops we had around 50 participants and many of them subsequently started using the rack. We also got a lot of very valuable feedback, which will help us to improve the coming iterations of the racks.

If you are interested in using and testing the rack, come to one of the workshops on rapid prototyping. We will start offering workshops again, at the start of february.


Nestbox
--
![The new Nestbox breadboard PCBs](/img/blog-post-20180113/nestbox-pcbs.jpg)

The Nestbox project has also seen a lot of changes since the last update. In the meantime we were able to do in depth tests with our first prototype. During these tests we have noticed quite a few problems with the 13.56 MHz RFID system, which we intended to use to identify the Owls. We were not able to operate the used circuit consistently over a longer timespan and often had resets of our electronics. This lead us to consider other options and in the end we decided to pursue the project using 125 kHz based RFID tags. At the lower frequency the electronic circuits tend to be simpler. Another advantage is, that the 125 kHz frequency band is very common for animal identification. Following this decision we started creating a second prototype. We currently do not have a complete prototype, integrating all the desired functionality, but we fabricated multiple "breadboard" circuits, using dedicated PCBs to test the different subsystems. We obtained very promising results with the new RFID system as well with an improved power supply system, which is geared towards solar power supply.

Our collaboration with the research group of professor Roulin at UNIL continues. To foster communication between his group and the people from Octanis working on the project, we held a common workshop / presentation where professor Roulin presented the background of his research and we presented our latest results. Following this presentation we had a very fruitful discussion with many members of the research group with many interesting insights.

We are also in contact with another group of researchers, with interest in a similar system. In their case they want to focus on weight measurements of owls. This lead us to start thinking about integrating a weight sensor to our setup. We were recently able to test such a sensor and got very promising first results.

[Link to video we made this week](https://drive.google.com/file/d/1uer5fnK8slHawTf7k0lXq0lo52p2hKvN/view).

So we are now evaluating with the Ornithological Institute who to put in place a collaboration for this project.


Fujibox
--
![The first Fujibox prototype](/img/blog-post-20180113/fujibox.png)

In November there was suddenly a new project appearing and then progressing very fast. What happened is that Guillaume was in need of a Christmas present for his mother and so he thought about creating a very personalized way of communicating with her. His project, titled Fujibox consists of a electronic device, resembling a table clock, which is able to display messages. Now you might think, what is so new about that, there are nowadays smart watches / clocks everywhere. But the novelty lies in the simplicity of his device. The device has only two functions: show the time and receiving and displaying message from a single person. It can not send messages, nor can it receive message from any arbitrary person. The idea of Fujibox is to create a very personal channel of communication, where you can surprise a person you love with messages from time to time. So the Fujibox goes away from the very generic approach from moderns smart phones, which can do anything, to an object, which you associate with one single person, the person who gave you the box and who is able to send you message.

As the first prototype was supposed to be a Christmas gift, Guillaume was very motivated to indeed finish it before Christmas. And indeed he created his first Fujibox which not only is fully functional, but also looks very nice.

While constructing his first prototype he also asked around very often for feedback which was overwhelmingly positive. Many people see a clear value in a device like this and expressed interest in having one for themselves. So there are currently talks ongoing with potential supporters and who knows, maybe you will some day be able to buy a Fujibox to give to somebody. What is sure, is that a new prototype will see the light of day in the next few months. For more info and updates check the [Fujibox wiki page](https://wiki.octanis.org/octanisx/cube).


Outlook
--
So after looking back on a very filled half year we will have a quick look forward. As stated in the beginning we are currently in semi-hibernation until the end of the exams at EPFL. Following that, we will start having Open-Nights again in the beginning of February. At the same time we will also start doing introduction workshops again for the Rack.

In order to stay up to date with what happens and certainly to never miss an event you can follow us on all the major social media site ([Facebook](https://www.facebook.com/octanis.org/), [Twitter](https://twitter.com/octanisorg) and [Instagram](https://www.instagram.com/octanisorg/)). We also list all our events and workshops on our [Meetup Page](https://www.meetup.com/octanis/). For all people who like to receive periodic information in their email client of their choice, you can [sign up to our Mailing list](http://octanis.org/start/#subscribe).
As a new years resolution we also decided to write blog posts like this one more often. So stay tuned for the next post in the middle of February, where we will take a look back at all the Open-Nights since August past, and look forward to all the Open-Nights to come.

For the next months there are already a few very interesting things in queue. This might include looking at very tiny things or getting an introduction to the Git version control system.

So stay tuned and stay curious!
