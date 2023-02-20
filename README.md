## **Minikube Project**

A project where I aimed to deploy a web application (frontend - backend/API - DB) in Minikube to gain applied knowledge and experiment with stateful workloads in K8s.

### **Description:**
1. The frontend was created using React, it contains a visitor counter written in JavaScript and it is provisioned by a deployment.
2. The backend/API was written in python, leveraging the Flask framework and it is using the DataStax Cassandra driver. It is provisioned by a deployment as well.
3. The Cassandra containers are managed by a stateful set to form a cluster, a local storage provisioner was set up for the persistent volumes and a headless service for the request handling.


### **Disclaimer:**
1. This is a work in progress, until this canary is removed don't expect it to be fully operational
2. The Frontend was not created by me. All credits go to my brother and talented developer, Nick Vasilopoulos (https://www.linkedin.com/in/nickvasilopoulos/)
3. The frontend Dockerfile needs the source code of the app (not published) to build the image