# this is the dockerfile for the frontend react app
# it is based on the node:14-alpine image
FROM node:14-alpine
# set the working directory to /app
WORKDIR /app
# copy the package.json file to the working directory
COPY package.json .
# install the dependencies
RUN npm install
# copy the rest of the files to the working directory
COPY . .
# expose port 3000
EXPOSE 3000
# run the app
CMD ["npm", "start"]