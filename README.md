# Ecommerce Progressive Web Apps

CZR is React and Node.js based eCommerce platform. Allows creating a Progressive Web Apps. This is based from cezerin after project went dead. (https://github.com/maksimgold208/React-Ecommerce-CZR)

Built with:
* Node.js v8.9
* React v16
* Redux
* Express
* Babel
* WebPack 4
* MongoDB

## Dashboard
Client-side dashboard use JSON Web Token (JWT) to access REST API.

![Signin email](https://cezerin.com/assets/images/cezerin-signin-email.png)

## Store
Single-Page Application with React server-side rendering.

[![Cezerin Store](https://cezerin.com/assets/images/cezerin-mobile-product.png)](https://store.cezerin.com)

[![Cezerin Store](https://cezerin.com/assets/images/cezerin-mobile-order-summary.png)](https://store.cezerin.com)

## Installation

- [with GitHub](https://github.com/maksimgold208/React-Ecommerce-CZR/blob/master/docs/getting-started.md)
- [with Docker](https://github.com/maksimgold208/React-Ecommerce-CZR/docs/getting-started-docker.md)
- [How to deploy a Cezerin2 on Ubuntu 16.04](https://github.com/maksimgold208/React-Ecommerce-CZR/blob/master/docs/how-to-deploy-a-cezerin2-on-ubuntu-16-04.md)
- [How to deploy a Cezerin2 on Ubuntu 18.04.1 (from GitHub)](https://github.com/maksimgold208/React-Ecommerce-CZR//blob/master/docs/how-to-deploy-a-cezerin2-on-ubuntu-18-04-1-github.md)

### Requirements
* Node.js >= 8
* MongoDB >= 3.2


## Documentation

[Documentation](https://github.com/maksimgold208/React-Ecommerce-CZR/tree/master/docs)


## Application Structure

```
.
├── config                   # Project and build configurations
├── dist                     # Distribution folder
├── locales                  # Text files
├── logs                     # Log files
├── public                   # Static public assets and uploads
│   ├── admin                # Dashboard index.html
│   ├── admin-assets         # Dashboard assets
│   └── content              # Store root folder
|
├── scripts                  # Shell scripts for theme install/export
├── src                      # Application source code
│   ├── admin                # Dashboard application
│   │   └── client           # Client side code
│   ├── api                  # REST API
│   │   └── server           # Server side code
│   ├── store                # Store application
│   |   ├── client             # Client side code
│   |   ├── server             # Server side code
│   |   └── shared             # Universal code
│   └── index.js             # Server application start point
├── theme                    # Theme as a local package
└── process.json             # pm2 process file
```
