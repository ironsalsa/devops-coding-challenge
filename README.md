# The Setup

Our NodeJS developer Becca has created a microservice to solve a problem for a client that needs a Hello World app. They need it badly, and the code is ready for deployment - we need to deliver the code into the client's server environment, and you've been given the task of getting it done.

# The Goals

Our client doesn't allow any access into the server environment for devs, but the Senior DevOps Engineer willbe responsible for publishing through the client build pipeline. You are responsible for adding the following into the repo:
* A Dockerfile to build and serve the application on container port 3000
  * Any base container image may be used, as long as it uses Debian as the underlying Linux OS. No Windows, and if you use Alpine you have to explain to the client why you choose that over a Debian-like OS.
* A Docker Compose file to show:
  * Environmental variables need to be set, as determined from the code
  * Exposing the port on the host port 5830
* A Bash script named build.sh that builds and serves the application locally using the above files

All of these changes must be submitted to this repository as a Github Pull Request, which will be peer reviewed and cleared for deployment if deemed good enough for production.

# Background info

The Senior DevOps Engineer will be using the above configurations to deploy to both a local server and a Kubernetes cluster that you have no further information on, as we are still in talks with the client on the specifics - a well designed process should be able to flex with the enviornment that we are able to agree to with the client while also being able to be demonstrated on their current server with only Docker and Docker Compose as dependencies.


# Post-amble, or whatever you call that

This is part of a series of coding challenges to demonstrate abilities in broad categories of skills necessary for success in the 2020 IT landscape. In this challenge, you may prove that you can be a successful DevOps resource in an agile environment.
