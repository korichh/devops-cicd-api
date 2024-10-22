FROM node:20-alpine AS build

WORKDIR /build

COPY package*.json ./
RUN npm install

COPY src ./src
COPY tsconfig.json ./
RUN npm run build

FROM node:20-alpine AS prod

WORKDIR /prod

COPY --from=build build/package*.json ./
COPY --from=build build/dist ./dist

RUN npm install --only=prod && npm cache clean --force

EXPOSE 5000

CMD ["npm", "start"]