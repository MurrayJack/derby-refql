FROM node:8

# Create app directory
WORKDIR /Users/murrayjack/playing-with-grapgql/StarRezDB

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 4001
CMD [ "npm", "start" ]