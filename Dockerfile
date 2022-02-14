FROM       node:16 as builder
RUN        npm i -g --unsafe-perm @subql/node@latest \
           && apk add --no-cache curl \
           && apk add --no-cache jq
CMD        ["h=$(curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "chain_getBlockHash", "params":[0]}' https://rpc.framenode-1.s1.dev.sora2.soramitsu.co.jp)", "j=$(echo $h | jq -r .result)", "echo $j > gethash.json"]  

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
