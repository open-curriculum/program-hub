# program-hub

## Default (Git Pages - Automatic when pushed to the repo)
To manually build for git pages: ```jekyll build```

## Local Development
To develop locally: ```jekyll serve```  
Follow instructions in terminal

## Production deployment
To build for production: ```jekyll build --config=_config.yml,_config-prod.yml```

Note: ```jekyll serve``` fails to include both config files.