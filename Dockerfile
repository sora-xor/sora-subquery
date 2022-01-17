FROM        node:14-alpine
ARG         SORA_ENDPOINT
ENV         TZ utc
RUN         apk add --no-cache tini git
ENTRYPOINT  ["/sbin/tini", "--", "subql-node"]
RUN         npm i -g @subql/node
WORKDIR     /app
COPY        . .
USER        node
CMD         ["-f","/app"]
