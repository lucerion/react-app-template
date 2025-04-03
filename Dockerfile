ARG NODE_VERSION
ARG YARN_VERSION

FROM node:${NODE_VERSION}-slim

RUN corepack enable \
    && corepack prepare yarn@${YARN_VERSION} --activate

WORKDIR /react-app-template

COPY package.json yarn.lock ./

RUN yarn install --immutable

COPY . .

CMD ["yarn", "start"]
