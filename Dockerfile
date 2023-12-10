FROM       onfinality/subql-node:v3.4.7
ARG        SORA_ENDPOINT
ENV        TZ utc
ENTRYPOINT ["/sbin/tini", "--", "/usr/local/lib/node_modules/@subql/node/bin/run"]
WORKDIR    /app
COPY       . .
USER       node
CMD        ["-f","/app"]
