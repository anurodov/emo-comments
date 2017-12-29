# EMO comments

### Final Project Documentation
* Overview
* Demo
* References

**Overview**

<img src="/images/dude.png" width="50%">

EMO is a prototype of an AI-solution which helps authors see how well their article really did using Natural Language Processing. Journalists have ignored comments for a long time, but maybe we just have to sort them better to hear our readers?

EMO uses analyzes comments and builds a graph of emotions. Journalists then will be able to see emotions like confident, tentative, analytical, angry, sad or positive and the weight of comments calculated as a percentage of total. So if journalists want to avoid trolls and participate in discussion first, they can do that by filtering.


**Demo**

<img src="/images/scheme.png" width="50%">

EMO uses IBM Watson API to process comments, that’s why journalists don’t have to worry about the AI side of the tool, it’s all handled by IBM. That also means that EMO doesn’t require a lot of effort on the programming side to create, so it can be used by almost everybody. It's written in NodeJS and front-end is mostly in P5.js and jQuery.


**References**

* [IBM Watson Tone Analyzer API](https://www.ibm.com/watson/developercloud/tone-analyzer/api/v3/#post-tone)
* [MLab's cloud database for storing comments](https://www.mlab.com) 
