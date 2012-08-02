# -*- encoding: utf-8 -*-
require File.expand_path('../lib/sap/rails/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ["Baylor Rae'"]
  gem.email         = ["baylorrae@gmail.com"]
  gem.description   = %q{Add sap to Rails asset pipline}
  gem.summary       = %q{Add sap to Rails asset pipline}
  gem.homepage      = ""

  gem.files         = `git ls-files`.split($\)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.name          = "sap-rails"
  gem.require_paths = ["lib"]
  gem.version       = Sap::Rails::VERSION
end
