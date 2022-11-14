FROM node:16-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
ADD "package.json" .
ADD "package-lock.json" .
RUN npm install
ADD . .
CMD npm start
