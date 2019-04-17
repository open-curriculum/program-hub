# program-hub
## Set up local git-pages development environment from scratch for OSX
1. Install Homebrew: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
2. Install Xcode Developer Tools
3. `brew install ruby automake autoconf libtool`
4. `gem install bundler`
   - If ffi throws an error, first try `gem install ffi -v '1.9.21'`
5. Install SASS: `brew install sass/sass/sass`
   - If recommended in brew message, run `brew link --overwrite sass` 
6. To test, restart terminal and run `bundle exec jekyll serve`

## Default (Git Pages - Automatic when pushed to the repo)
To manually build for git pages: ```bundle exec jekyll build```

## Local Development
To develop locally: `bundle exec jekyll serve`
Follow instructions in terminal

## Production deployment
To build for production: `bundle exec jekyll build --config=_config.yml,_config-prod.yml`

Note: `bundle exec jekyll serve` fails to include both config files.

If using the configured deploy script, you can simply run `./deploy`