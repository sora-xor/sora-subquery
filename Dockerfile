FROM       node:16 as builder
RUN        npm i -g --unsafe-perm @subql/node@latest

FROM       node:16-alpine
ARG        SORA_ENDPOINT
ENV        TZ utc
RUN        apk add --no-cache tini git \
           && apk add --no-cache curl \
           && apk add --no-cache jq
COPY       --from=builder /usr/local/lib/node_modules /usr/local/lib/node_modules
ENTRYPOINT ["/sbin/tini", "--", "/usr/local/lib/node_modules/@subql/node/bin/run"]
WORKDIR    /app
COPY       . .
USER       node
CMD        ["-f","/app"]
