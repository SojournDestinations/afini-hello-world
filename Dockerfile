FROM node:6.2.2
ENV appDir /usr/src/app
WORKDIR ${appDir}

ADD . .

CMD ["npm", "start"]
