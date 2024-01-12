docker rm -f $(docker-compose ps -a -q)
rm -rf .data/
rm -rf dist/
rm -rf src/types/
yarn
yarn codegen
yarn build
docker-compose up && docker-compose run