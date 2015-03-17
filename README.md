# coffeeS-JS-SCSS-CSSuseGuard

# Porting NYU-library-Assets to Siteleaf

A help document for integreation of CoffeeScript and SASS styling sheets to a CMS like siteleaf.
Siteleaf and pretty much all the Static CMS tools only supports nomal WEB languages (no preprocessing required) like Javascript, CSS and (new) Liquid. Hence all our NYU Library assets need to ported from Coffee-Sript to Javascript and SCSS styling sheets to CSS.

Now since we need to automate the process in Jenkins for any change and our limitations are to Jenkins and Ruby.

Hence I found Guard to be the best option.
Guard is a command line tool to easily handle events on file system modifications. Best part of it is if it is left to and we change a Coffee-Script or SCSS, the change is automatically reflected in the equivalent JS or CSS file respectively.

# Using Guard.

I copied all the assets into my local directory from https://github.com/NYULibraries/nyulibraries-assets/tree/master/lib/assets

Made a simpler file format.

Run these Following commands.
  
    git clone https://github.com/Amay22/coffeeS-JS-SCSS-CSSuseGuard
    
    cd coffeeS-JS-SCSS-CSSuseGuard
    
    bundle install
    
    bundle exec guard
  
  
# Problems I Faced


1. SCSS is not exactly copmilable so if it has errors and we don't catch it during runtime then that error persists and Guard is not able to process it into CSS.

2. I ran into another Guardfile code error as it doesn't read .js.coffee extensions and I had to type in a pattern expression to define those files as coffees-script files.

