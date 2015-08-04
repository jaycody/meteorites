# meteorites
> experiments with meteor.js
 
## meteor projects contained herein
- my-meteor-blog
    + Blog app based on the work of Fabian Vogelsteller (frozeman) in his book Building Single-page Web Apps with Meteor


##initial steps
1. install meteor
```curl https://install.meteor.com/ | sh```
2. use meteor to create project directory, and initiate project
```
cd ~/meteorites
meteor create my-meteor-blog
cd my-meteor-blog
meteor
```
     - meteor will start a local server on port 3000.  open browswer and navigate to http://localhost:3000 
3. create the following dir structure
```
- my-meteor-blog
    - server
    - client
        - styles
        - templates
```
4. add packages
     - most packages add templating functionality or provide extra objects in the global namespace of our projects
     - or add featues to meteor's build process (eg stylus package)
     - for this project, using 
          - **less** core package which will compile our style files on the fly to css
          - **jeeyul:moment-with-langs**: 3rd party library for date parsing
