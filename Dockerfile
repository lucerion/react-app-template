from node:22-bullseye

WORKDIR /react-app-template

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

CMD ["yarn", "start"]
