#!/usr/bin/env bash
cp ../swagger/swagger.yml ./swagger.yml
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i https://raw.githubusercontent.com/jphacks/SP_2305/master/swagger/swagger.yml \
    -g python-flask \
    -o /local/