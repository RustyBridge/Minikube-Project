## **Minikube Project**

A project where I aimed to deploy a web application (frontend - backend/API - DB) in Minikube to gain applied knowledge and experiment with stateful workloads in K8s.

### **Architecture diagram:**

![Kubernetes Project](https://user-images.githubusercontent.com/68524920/221428695-b878d366-5471-4e00-928d-da48df0508f1.png)


### **Description:**
1. For the Database I chose Apache Cassandra, as it seemed interesting and I didn't have specific requirements \
Being the stateful component of the application, it required persistent storage, which was provisioned locally using the local-path-provisioner (https://github.com/rancher/local-path-provisioner) \
The replication and volume claims are handled by a stateful set and the networking by a headless service 
2. The Backend is a simple Flask API with two functions that are invoked by GET requests \
The first one reads the value from the DB and returns it and the second one, increments the value in the DB by 1 and returns the new value \
The communication with the DB is established using the DataStax python driver for Cassandra (https://github.com/datastax/python-driver) \
The replication is handled by a deployment and the networking by a standard service 
3. The Frontend is a simple React application that displays your visitor number. The function: \
a) Checks the local storage for the value and if it doesn’t exist it, calls the backend write function \
b) If the value already exists in local storage (the website has already been visited), calls the backend read function \
The replication is handled by a deployment and the networking by a standard service 
4. To make the application accessible I created an ingress leveraging minikube's nginx ingress controller \
One domain was set for the frontend (webapp.test) and one for the backend (api.webapp.test) which were added to the /etc/hosts file on the host machine.

### **Disclaimer:**
The Frontend was not created by me. All credits go to my brother, Nick Vasilopoulos (https://www.linkedin.com/in/nickvasilopoulos/)
