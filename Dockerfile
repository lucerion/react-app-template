from node:22-bullseye

ARG DEV_PACKAGES="yarn"

RUN apt-get update -qq && \
    apt-get install -yq --no-install-recommends $DEV_PACKAGES

WORKDIR /react-app-template

COPY . .

RUN yarn install

CMD ["yarn", "start"]
