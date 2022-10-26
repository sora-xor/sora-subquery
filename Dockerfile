FROM       node:16 as builder
RUN        npm i -g --unsafe-perm @subql/node@0.23.1

FROM       node:16-alpine
ARG        SORA_ENDPOINT
ENV        TZ utc
RUN        apk add --no-cache tini
COPY       --from=builder /usr/local/lib/node_modules /usr/local/lib/node_modules
ENTRYPOINT ["/sbin/tini", "--", "/usr/local/lib/node_modules/@subql/node/bin/run"]
WORKDIR    /app
COPY       . .
USER       node
CMD        ["-f","/app"]