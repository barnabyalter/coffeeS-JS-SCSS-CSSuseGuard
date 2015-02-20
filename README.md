# coffeeS-JS-SCSS-CSSuseGuard

# Porting NYU-library-Assets to Siteleaf

A help document for integreation of CoffeeScript and SASS styling sheets to a CMS like siteleaf.
Siteleaf and pretty much all the Static CMS tools only supports nomal WEB languages (no preprocessing required) like Javascript, CSS and (new) Liquid. Hence all our NYU Library assets need to ported from Coffee-Sript to Javascript and SCSS styling sheets to CSS.

Now since we need to automate the process in Jenkins for any change and our limitations are to Jenkins and Ruby.

Hence I found Guard to be the best option.
Guard is a command line tool to easily handle events on file system modifications. Best part of it is if it is left to and we change a Coffee-Script or SCSS, the change is automatically reflected in the equivalent JS or CSS file respectively.

# Using Guard.

Run these Following commands.
  
    git clone https://github.com/Amay22/coffeeS-JS-SCSS-CSSuseGuard
    
    cd coffeeS-JS-SCSS-CSSuseGuard
    
    bundle install
    
    bundle exec guard
  
  
# Problems I faced

In SCSS or styling sheets we have used bootstrap 
  
