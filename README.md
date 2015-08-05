# meteorites
> experiments with meteor.js
 
## meteor projects contained herein
- my-meteor-blog
    + Blog app based on the work of Fabian Vogelsteller (frozeman) in his book Building Single-page Web Apps with Meteor
- simple-todos
    + basic tutorial from the meteor website.  Create a simple app to manage a 'todo' list and collaborate with others

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
- to add core package  
    1. navigate to project folder
    2. add package in terminal
>```
$ meteor add less
```
- to add 3rd party packages
     1. search for package using https://atmospherejs.com or with CLI
     ```$ meteor search <package name>```
     2. install
     ```meteor add jeeeyul:moment-with-langs```

#####dirs and their loading order
- client
- client/compatibility
- server
- public
- private
- lib
- tests
- packages

####Often Used commands
- dealing with running project
    + CTRL+Z suspends the program
    + bg sends to background
    + fg sends to foreground, from where
    + CTRL+C closes the program
    + meteor starts program again


####terms and tools
- **Spacebars** - meteor's template engine, which is derived from the handlebars template engine.  Spacebars is built on top of **BLAZE** which is Meteor's reactive DOM update engine
    + Spacebar is useful bc of simplicity and reactivity.  **Reactive Templates** mean that some parts of the template can automaticlally change with the underlying data changes.  Alleviates the need for manual DOM manipulation and inconsistent interfaces

####Meteor's build process
- when running 'meteor' app, Meteor will look through ALL the HTML files available in our app's folder, **concatenating the content of all 'head' and 'body' tags as its own templates, which will be injected with its corresponding JavaScript template when the DOM is loaded.

 

