docker rm -f $(docker-compose ps -a -q)
sudo rm -rf .data/
yarn
yarn codegen
yarn build
docker-compose up