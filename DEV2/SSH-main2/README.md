# git config --global user.email "hmneton@gmail.com" && git config --global user.name "Honorio" && git clone https://github.com/hmneto/ssh.git && cd ssh && docker-compose up -d --build && docker exec -it ssh ssh-keygen -t rsa -C "hmneton@gmail.com" && docker stop ssh && docker system prune -a && git add . && git commit -m "update"

# git config --global user.email "hmneton@gmail.com" && git config --global user.name "Honorio" && git clone https://github.com/hmneto/ssh.git && cd ssh/ssh && cp id_rsa /root/.ssh && cp id_rsa.pub /root/.ssh && cd ~ && chmod 700 /root/.ssh && chmod 644 /root/.ssh/id_rsa.pub && chmod 600 /root/.ssh/id_rsa