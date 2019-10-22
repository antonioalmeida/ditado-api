FROM node:11-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
ADD "package.json" .
ADD "package-lock.json" .
RUN npm install
ADD . .
CMD npm start
