# SVG

## known issues: transformOrigin is currently slightly oriented to the left while using google chrome browser. 

### this is a playground for designing/testing custom SVG's and animating them

Currently I'm creating a SVG image that will serve as an overlay with interactive elements that will be built with JavaScript. This overlay will serve as a welcome screen to my portfolio/projects. I currently have only a rough idea of how I will use this exactly but the goal is to create and animate the image that's made from scratch so that prospective employers get a good first impression of my design and coding skills. 

Project evolve timeline: 

- created a dozen different designs of the svg and ended up using a svg without background and using a background image within CSS instead for flexibility. 

- final version of SVG has a 100, 100 viewbox and is set to scale to 100 vw vh using CSS.

- transform origin doesn't become fixed using 50%, 50% in CSS so I learned about greensock/gsap. Right now I tested it and the transfor origin is better but still not completely fixed. I need to learn more about animating using gsap in order to get this right. The hover effect using .hover() is also far from identical to a CSS :hover transition. 

- this turned out to be a project in itself. So far it took my 7 days to learn about SVG creation up to the point where I have a SVG that will scale correctly within the browser. 

- I lined up several resources +- 2 days worth of learning material explaining gsap in more detail. I will go through that and hopefully I will have achieved my end goal at the end of that. 

- After going through some of the resources and posting on different forums I found a solution to one of 2 problems and diagnosed the origin of both. The scaling issue is due to the SVG editor adding in scaling sizes that I was able to remove with a technique that consisted of ungrouping, moving 1 to the left and back to the right with arrow keys and regrouping. The SVG editor's behovior is such that it removes the tags that created the issue. 

- The second issue with the transformOrigin is related to a google chrome browser inconsistency. The problem did not appear in IE or FireFox. Nor in the codepen editor.

- I decided to move forward regardless of the second browser bug since the scaling transformOrigin issue is minor and only results in a slight bend to the left and wont result in a broken animation. 

- Added classnames to all the SVG elements that need to be animated seperately. 

- Tested the SVG elements for inconsistencies and noticed that the spiral is slightly oval when rotating. Since I'm scaling it down I found out that scaling it down to 0.55 on the Y axis mitigates this inconsistency nicely. 

- Added CSS hover style to the SVG button element to make the cursor a pointer cursor to indicate the presence of the click handler I will add in the future

- animated the button hover over and out states with the background spiral scaling in response too. 

- documented css and JS so far. 

- added in animation for all the elements.

- added click event listener that starts the complete animation. 

- animation completed succesfully.

- optimized animation delay times and specific numbers for the best result. 

- added in fade effect that hides the overlay. 

- documented the remaining JS. 

- finished version 1 commit to GitHub. 

