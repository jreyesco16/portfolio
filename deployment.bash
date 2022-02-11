sudo su

git pull

npm run build

pm2 start npm --name "next" -- start

systemctl restart nginx