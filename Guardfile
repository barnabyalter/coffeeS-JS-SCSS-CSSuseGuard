group :stylesheets do
  guard 'sass', :input => "stylesheets/scss", :output => "stylesheets/css",  :smart_partials => true , :compass => true
end

group :javascripts do
  guard 'coffeescript', :input => "scripts/coffeescript", :output => "scripts/js" , :patterns => [%r{^scripts/coffeescript/(.+\.(?:coffee|coffee\.md|litcoffee))$}]
end
