FROM node:10.15.3-alpine as builder

## Install build toolchain, install node deps and compile native add-ons
RUN apk add --no-cache --virtual .gyp python make g++

WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./
RUN npm ci --quiet --production

# Production stage
FROM node:10.15.3-alpine as app

WORKDIR /usr/app

## Copy source files
COPY . .

## Copy built node modules and binaries without including the toolchain
COPY --from=builder /usr/app/node_modules /usr/app/node_modules

ENV NODE_ENV=production
ENV PORT=80
EXPOSE 80

USER node
CMD [ "node", "src/start.js"]

