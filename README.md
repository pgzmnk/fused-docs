# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Run scrape for typesense searh

```
docker run -it --env-file=.env -e "CONFIG=$(cat config.json | jq -r tostring)" typesense/docsearch-scraper:0.9.1
```