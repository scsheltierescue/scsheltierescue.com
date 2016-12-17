# scsheltierescue.com [![Built with Gulp](http://img.shields.io/badge/built%20with-gulp.js-red.svg)](http://gulpjs.com/)

<img src="https://raw.github.com/alexdiliberto/scsheltierescue.com/master/img/SCSR-Logo-New-Transparent_500x606.png" alt="SCSR" title="SCSR" width="250" height="303">

SC Sheltie Rescue is a non-profit volunteer group dedicated to helping Shetland Sheepdogs in Columbia, SC and the surrounding areas.

##Contributing
Instructions to get started with development:
```sh
git clone git@github.com:scsheltierescue/scsheltierescue.com.git
cd scsheltierescue.com

npm install -g bower

gem install foundation

bower i
npm i

gulp watch
```

When making template changes don't forget to precompile again:
```sh
handlebars templates/ -f js/templates.js
```

##Foundation Dependency Updates
Update foundation to the latest stable release:
```sh
foundation update
```

Update foundation to a specified tag:
```sh
bower update foundation#<tag>
```

##Deployment
Automatic deploy using [dploy.io](dploy.io) via [https://sc-sheltie-rescue.dploy.io](https://sc-sheltie-rescue.dploy.io)

*Note: If you make CSS updates, you will still need to manually deploy the generated `app.css` file*
