# SEQTA API Reference

## Overview
OpenAPI (swagger) file for SEQTA Learn. <br>
Head [here](https://seqtaapi.sockycat.net) to view the API.

### Installation
1. install docker
```bash
sudo apt install docker.io
```
2. clone repo
```bash
git clone https://github.com/ar-cyber/seqta-api-swagger
```
3. run the swagger-ui docker container
```bash
docker run -p 80:8080 -e SWAGGER_JSON="openapi(1).yaml" docker.swagger.io/swaggerapi/swagger-ui
```
## Contributions
Create a Pull Request and send screenshot of swagger editor instance with no/minimal errors.
