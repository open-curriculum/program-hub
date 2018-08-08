# program-hub

## Default (Git Pages - Automatic when pushed to the repo)
To manually build for git pages: ```bundle exec jekyll build```

## Local Development
To develop locally: ```bundle exec jekyll serve```  
Follow instructions in terminal

## Production deployment
To build for production: ```bundle exec jekyll build --config=_config.yml,_config-prod.yml```

Note: ```bundle exec jekyll serve``` fails to include both config files.
