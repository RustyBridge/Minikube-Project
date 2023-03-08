from flask import Flask
from flask_restful import Resource, Api
from cassandra.cluster import Cluster
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "http://webapp.test"}})
api = Api(app)

class read(Resource):
    def get(self):
        
        cluster = Cluster(['my-db-0.my-db-svc.default.svc.cluster.local'],port=9042)
        session = cluster.connect('my_keyspace')
        session.execute('USE my_keyspace')
        data = session.execute('SELECT * FROM my_keyspace.tf_db;')
        
        for value in data:
            response = value.tf_db_quantity
            return {'statusCode': 200, 'data': response}

class write(Resource):
    def get(self):
        cluster = Cluster(['my-db-0.my-db-svc.default.svc.cluster.local'],port=9042)
        session = cluster.connect('my_keyspace')
        session.execute('USE my_keyspace')
        data = session.execute('SELECT * FROM my_keyspace.tf_db;')
    
        for value in data:
            new_value = value.tf_db_quantity + 1
            session.execute(f"UPDATE tf_db SET tf_db_quantity={new_value} WHERE tf_db_vcounter='view-count';")
            return {'statusCode': 200, 'data': new_value}

api.add_resource(read, '/read')
api.add_resource(write, '/write')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)