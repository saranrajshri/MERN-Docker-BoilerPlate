FROM node:10.16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# Install Packages

RUN yarn install

# Copy local files to app folder

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]