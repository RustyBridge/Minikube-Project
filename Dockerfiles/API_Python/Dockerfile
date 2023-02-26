FROM ubuntu:20.04

RUN apt-get -y update
RUN apt-get install -y python3.8 python3.8-dev python3.8-venv python3-pip python3-wheel build-essential

WORKDIR /app


COPY requirements.txt .
RUN pip install -r requirements.txt --src /usr/local/src

COPY . .

EXPOSE 5000

CMD ["python3.8", "api.py"]