group :stylesheets do
  guard 'sass', :style => :compressed, :input => "stylesheets/scss", :output => "stylesheets/css",  :smart_partials => true , :compass => true
end

group :javascripts do
  guard 'coffeescript', :style => :compressed ,:input => "scripts/coffeescript", :output => "scripts/js" , :patterns => [%r{^scripts/coffeescript/(.+\.(?:coffee|coffee\.md|litcoffee))$}]
  guard :concat,{
    type: 'js',
    files: %w(* nyulibraries/*),
    input_dir: 'scripts/js',
    output: 'scripts/all'
  }
  guard "uglify", :input => "scripts/all.js", :output => "scripts/a.min.js"
end

Guard.run_all
