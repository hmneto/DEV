# git clone https://github.com/hmneto/BLOG.git && cd BLOG && docker-compose up -d --build

# git pull && docker-compose up -d --build


sudo apt-get update &&
sudo apt install docker.io -y && 
sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose &&
sudo chmod +x /usr/local/bin/docker-compose &&
docker-compose --version



sudo chmod 777 wp-content
