<h1 align="center">
  <img src="https://cdn.rawgit.com/scsheltierescue/scsheltierescue.com/master/img/SCSR-Logo-New-Transparent_500x606.png" alt="SCSR Logo" width="250" height="303">
  <br>
  <a href="https://scsheltierescue.com/">scsheltierescue.com</a>
</h1>

[![Deployment status from DeployBot](https://sc-sheltie-rescue.deploybot.com/badge/02267417943996/2877.svg)](http://deploybot.com)

SC Sheltie Rescue is a non-profit volunteer group dedicated to helping Shetland Sheepdogs in Columbia, SC and the surrounding areas.

## Contributing

Instructions to begin local development:

````bash
# 1. Configure MAMP
#     https://gist.github.com/alexdiliberto/67d0680be184396f83a686a80990eafd
#     https://gist.github.com/jfloff/5138826

# 2. Configure `/etc/hosts`

```sh
  127.0.0.1 scsheltierescue.dev
````

# 3. Install Bower globally

yarn global add bower

# 4. install foundation gem

gem install foundation

# 5. Clone repository

git clone git@github.com:scsheltierescue/scsheltierescue.com.git
cd scsheltierescue.com

# 6. Install the repo's dependencies

bower i && yarn

# 7. Setup the build pipeline for development

yarn watch

````
Now open [https://scsheltierescue.dev](https://scsheltierescue.dev) in your browser

## Foundation Dependency Updates
Update foundation to the latest stable release:

```bash
foundation update
````

Update foundation to a specified tag:

```bash
bower update foundation#<tag>
```

## Deployment

Automatic deploy using [DeployBot](https://deploybot.com/) via [sc-sheltie-rescue.deploybot.com](https://sc-sheltie-rescue.deploybot.com/)

_Note: If you make CSS updates, you will still need to manually deploy the generated `app.css` file_
