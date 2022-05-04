FROM node:fermium-alpine AS builder
# ENV NX_BASE_URL=https://ops.iauro.co/gessa-projectdummy--development
WORKDIR /home/app/gessa
COPY package.json .
COPY yarn.lock .
RUN yarn global add @nrwl/cli && yarn
COPY . .
RUN yarn run container:build:prod

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /home/app/gessa/dist/apps/container/ .
COPY --from=builder /home/app/gessa/nginx.conf /etc/nginx/nginx.conf
