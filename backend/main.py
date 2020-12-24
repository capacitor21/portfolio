from flask import Flask, request
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

class Backend(Resource):
    def get(self):
        return {"Name":"Michael"}

api.add_resource(Backend, "/backend")

if __name__ == "__main__":
    app.run(debug=True)