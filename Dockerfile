# define our environment
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "start" ]

# install rdkit and bottle
#RUN /opt/conda/bin/conda install --yes --freeze-installed -c conda-forge rdkit bottle hdbscan && /opt/conda/bin/conda clean -afy

# can probably be removed in a future version: https://github.com/scikit-learn-contrib/hdbscan/issues/436
#RUN /opt/conda/bin/conda install joblib==0.17.0
#RUN pip install bottle-beaker

# define target folder
#WORKDIR /app

# copy everything from our backend to our app folder
#COPY backend /app/

# copy the pre-built front-end
#TODO the docker could build and copy
#COPY dist/ /app/dist/ 

# Create temp-files folder and copy all .sdf into it
#COPY backend/*.sdf /app/temp-files/

# run server
#CMD ["python", "-u", "backend-cime-dist.py"] # "-u" is needed such that there will be console output provided by docker

# Running
# docker build -f Dockerfile -t cime .
# docker run -d -p 8080:8080 --detach cime
