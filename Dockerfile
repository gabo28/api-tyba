###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:14.18.2 As development

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm i
RUN npm uninstall bcrypt
RUN npm i bcrypt
COPY --chown=node:node . .

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:14.18.2 As build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm i --only=production && npm cache clean --force
RUN npm uninstall bcrypt
RUN npm i bcrypt

USER node

###################
# PRODUCTION
###################

FROM node:14.18.2 As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]