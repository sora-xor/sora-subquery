FROM       onfinality/subql-node:v5.2.5
ARG        SORA_ENDPOINT
ENV        TZ utc
ENTRYPOINT ["/sbin/tini", "--", "/bin/run"]
WORKDIR    /app
COPY       . .
USER       node
CMD        ["-f","/app"]
