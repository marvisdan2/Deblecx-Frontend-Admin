# pull official base image
FROM node:17-alpine



# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

# let docker access to node_modules/.vite
RUN chown -R node:node /app/node_modules/.vite

USER node

EXPOSE 8080
# start app
CMD ["npm", "run", "dev"]    