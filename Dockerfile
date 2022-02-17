FROM       node:16.14.0 as builder
RUN        npm i -g --unsafe-perm @subql/node@0.28.2

FROM       node:16-alpine
ARG        SORA_ENDPOINT
ENV        TZ utc
RUN        apk add --no-cache tini git
COPY       --from=builder /usr/local/lib/node_modules /usr/local/lib/node_modules
ENTRYPOINT ["/sbin/tini", "--", "/usr/local/lib/node_modules/@subql/node/bin/run"]
WORKDIR    /app
COPY       . .
USER       node
CMD        ["-f","/app"]
