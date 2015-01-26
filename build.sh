git add .
git commit -m $1 
docker build -t netgio/flint .
APP=$(sudo docker run -d -p 8080 netgio/flint)
PORT=$(sudo docker port $APP 8080| awk -F: '{print $2}')
echo "Open http://localhost:$PORT/"
curl http://localhost:$PORT

