git add .
git commit -m $1 
docker build -t netgio/flint .
APP=$(docker run -d -p 8080 netgio/flint)
PORT=$(docker port $APP 8080| awk -F: '{print $2}')
echo "Open http://localhost:$PORT/"
curl http://localhost:$PORT

