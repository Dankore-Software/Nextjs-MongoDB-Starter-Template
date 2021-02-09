FROM node:14-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache git
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install PM2 globally
RUN npm install --global pm2

COPY ./package.json /usr/src/app/
RUN npm install --production && npm cache clean --force
COPY ./ /usr/src/app

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 80

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Launch app with PM2
CMD ["pm2-runtime", "start", "npm", "--", "start"]