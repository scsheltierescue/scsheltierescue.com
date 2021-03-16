<h1 align="center">
  <img src="https://cdn.rawgit.com/scsheltierescue/scsheltierescue.com/master/img/SCSR-Logo-New-Transparent_500x606.png" alt="SCSR Logo" width="250" height="303">
  <br>
  <a href="https://scsheltierescue.com/">scsheltierescue.com</a>
</h1>

[![Deployment status from DeployBot](https://sc-sheltie-rescue.deploybot.com/badge/02267417943996/2877.svg)](http://deploybot.com)

SC Sheltie Rescue is a non-profit volunteer group dedicated to helping Shetland Sheepdogs in Columbia, SC and the surrounding areas.

## Contributing

Instructions to begin local development:

```bash
# 1. Configure Local Dev Environment

# Mac (MAMP)
https://gist.github.com/alexdiliberto/67d0680be184396f83a686a80990eafd
https://gist.github.com/jfloff/5138826

# Linux (LAMP)
https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-ubuntu-18-04
https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-apache-in-ubuntu-20-04
https://hostadvice.com/how-to/how-to-enable-apache-mod_rewrite-on-an-ubuntu-18-04-vps-or-dedicated-server/

# 2. Configure `/etc/hosts`

127.0.0.1 scsr.localhost

# 3. install foundation gem

gem install foundation

# 4. Clone repository

git clone git@github.com:scsheltierescue/scsheltierescue.com.git
cd scsheltierescue.com

# 5. Install dependencies

npx bower i && yarn

# 6. Setup the build pipeline for development

yarn build
yarn build:watch
```

Now open [https://scsr.localhost](https://scsr.localhost) in your browser

## Foundation Dependency Updates
Update foundation to the latest stable release:

```bash
foundation update
```

Update foundation to a specified tag:

```bash
bower update foundation#<tag>
```

## Deployment

Automatic deploy using [DeployBot](https://deploybot.com/) via [sc-sheltie-rescue.deploybot.com](https://sc-sheltie-rescue.deploybot.com/)

_Note: If you make CSS updates, you will still need to manually deploy the generated `app.css` file_
