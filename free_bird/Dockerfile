FROM elixir:alpine

RUN apk add --no-cache make gcc libc-dev
RUN apk update && apk add inotify-tools

WORKDIR /app

RUN mix local.hex --force && \
    mix local.rebar --force

COPY mix.exs mix.lock ./
COPY config config

RUN mix do deps.get, deps.compile

COPY . .

COPY entrypoint.sh entrypoint.sh

EXPOSE 4000