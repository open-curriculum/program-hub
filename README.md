# program-hub

## Default (Git Pages)
To build for git pages: ```jekyll build```
## Production deployment
~~~To build for production:~~~ ```jekyll build --config=_config.yml,_config-prod.yml```
Remove ```/program-hub/``` reference from ```_config.yml``` when building. The above command is failing to properly merge the two config file variablesm which is supposed to do this automatically.