#How to install and modify
[Foundation] 6 and [Jekyll]

### Get Started
Install Jekyll

```
[sudo] gem install jekyll
```
```
[sudo] gem install bundler
```
```
[sudo] gem install kramdown
```
```
[sudo] bundle install
```

To test your site locally just run:

```
[sudo] jekyll serve
```

if this process errors out -- please use:
```
[sudo] bundle clean --force
```
and then rerun `[sudo] jekyll serve`

### Dependencies
 - ruby
 - Jekyll
 - kramdown
 - pygments

## Customize

Custom SASS Styling: ``` /assets/stylesheets/_theme.scss ```

Custom JS: ``` /assets/javascripts/script.js ```

Change primary navigation: ``` _config.yml ```
