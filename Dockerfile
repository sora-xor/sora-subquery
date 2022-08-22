FROM       node:16 as builder
RUN        npm i @subql/node@0.31.1 --location=global

FROM       node:16-alpine
ARG        SORA_ENDPOINT
ENV        NODE_VERSION=16.14.2
ENV        YARN_VERSION=1.22.18
ENV        TZ utc
RUN        apk add --no-cache tini curl
COPY       --from=builder /usr/local/lib/node_modules /usr/local/lib/node_modules
ENTRYPOINT ["/sbin/tini", "--", "/usr/local/lib/node_modules/@subql/node/bin/run"]
WORKDIR    /app
COPY       . .
USER       node
CMD        ["-f","/app"]