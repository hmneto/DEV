
FROM ubuntu:latest
RUN apt-get update 


RUN apt-get install -y curl 

ENV NODE_VERSION=12.6.0
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version

WORKDIR /app

# RUN curl -O https://nodejs.org/download/release/latest-v16.x/node-v16.9.1-linux-arm64.tar.gz  

# RUN tar xzf node-v16.9.1-linux-arm64.tar.gz

# ENV PATH="/node-v16.9.1-linux-arm64/bin:${PATH}"

# RUN curl -L https://www.npmjs.com/install.sh | sh

RUN npm install yarn -g

RUN node -v

RUN npm -v

COPY package*.json ./

RUN npm install yarn -g

RUN npm install webpack webpack-cli -g

RUN npm install

COPY . .

RUN webpack
