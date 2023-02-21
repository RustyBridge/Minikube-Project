FROM ubuntu:20.04

RUN apt-get update && apt-get install --no-install-recommends -y python3.8 python3.8-dev python3.8-venv python3-pip python3-wheel build-essential
RUN python3.8 --version

WORKDIR /app

COPY . .
RUN pip3 install -r requirements.txt

EXPOSE 5000

CMD ["python3.8", "/app/api.py"]