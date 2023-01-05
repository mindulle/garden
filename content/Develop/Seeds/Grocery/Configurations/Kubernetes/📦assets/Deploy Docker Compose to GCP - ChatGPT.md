To deploy a Docker Compose application to Google Cloud Platform, you will need to do the following:

1.  Create a Google Cloud Platform account and project if you don't already have one.
2.  Install the Google Cloud SDK.
3.  Authenticate the Google Cloud SDK with your Google Cloud Platform account using `gcloud auth login`.
4.  Use the `gcloud` command to create a new cluster on Google Kubernetes Engine (GKE): `gcloud container clusters create [CLUSTER_NAME]`
5.  Use `kubectl` to create a new deployment based on your Docker Compose configuration: `kubectl create -f [COMPOSE_FILE]`
6.  Expose the deployment as a new service: `kubectl expose deployment [DEPLOYMENT_NAME] --type=LoadBalancer --port 80 --target-port 80`
7.  Verify that the service was created successfully: `kubectl get services`

Keep in mind that this is just a high-level overview of the process. You may need to modify your Docker Compose configuration file or adjust the commands above depending on your specific needs.

I hope this helps! Let me know if you have any questions.