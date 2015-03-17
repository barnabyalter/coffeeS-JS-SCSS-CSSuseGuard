require 'nyulibraries-assets'

group :stylesheets do
  guard 'sass', :style => :compressed, :input => 'lib/assets/stylesheets', :output => 'dist/stylesheets',  :smart_partials => true , :compass => true
end

group :javascripts do
  guard 'coffeescript', :style => :compressed ,:input => 'lib/assets/javascripts', :output => 'dist/javascripts', :patterns => [%r{^lib/assets/javascripts/(.+(\.js)?\.coffee)$}]
  guard :concat,{
    type: 'js',
    files: %w(* assets/javascripts/*),
    input_dir: 'assets/javascripts',
    output: 'dist/javascripts/application'
  }
  guard 'uglify', :input => 'dist/javascripts/application.js', :output => 'dist/javascripts/application.js'
end

Guard.run_all
