# meteorites
> experiments with meteor.js
 
## meteor projects contained herein
- my-meteor-blog
    + Blog app based on the work of Fabian Vogelsteller (frozeman) in his book Building Single-page Web Apps with Meteor


##initial steps
#####install meteor
```curl https://install.meteor.com/ | sh```
#####use meteor to create project directory, and initiate project
     - meteor will start a local server on port 3000.  open browswer and navigate to http://localhost:3000 
```
cd ~/meteorites
meteor create my-meteor-blog
cd my-meteor-blog
meteor
```
#####create the following dir structure
```  
- my-meteor-blog
    - server
    - client
        - styles
        - templates
```   
#####add packages
     - most packages add templating functionality or provide extra objects in the global namespace of our projects
     - or add featues to meteor's build process (eg stylus package)
     - for this project, using 
          - **less** core package which will compile our style files on the fly to css
          - **jeeyul:moment-with-langs**: 3rd party library for date parsing
