# Pac-Man Solutions - Front-End

<div align="center">
  <img src=public/solutions-logo.png alt="Pac-Man Solutions Logo" width="25%"/>
</div>

<div align="center">
  <a href="[docs-link]"><strong>Documentation</strong></a>
  <strong>·</strong>
  <a href="license.txt"><strong>License</strong></a>
  <strong>·</strong>
  <strong>Demo (Coming Soon)</strong>
  <br/>
  <br/>  
  <img src="https://shields.io/badge/react-black?logo=react&style=for-the-badge" alt="react logo"/>
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript logo"/>
  <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="docker logo"/>
</div>

<div align="center" width="50%">
An artificial intelligence environment enabling users to watch simulated solutions to the original 1980's Pac-Man arcade game.
</div>

<br/>
<div align="center">
  <img src=public/demo.gif alt="Pac-Man Solutions Logo" width="75%"/>
</div>

## Key Features

- Simulate intelligent agents attempting to solve Pac-Man levels in a custom-built environment
- Watch these solutions in an interactive React application
- Develop agents to compete against the pre-built models

## Getting Started

It should be noted that the applications can also be quickly run using Docker. Currently, the images are not hosted on a repository and so they must first be built, this can be done using the [Docker Deployment](#deployment) steps.

To setup and run the react application, [npm >= 10.2.0][npm-install] must be installed. For the React app to function correctly, the Flask server must be running.

```bash
# install dependencies
npm install
# start the local server
npm start
```

## Development

### Pre-Commit

This project makes use of [pre-commit](https://pre-commit.com/) as a tool for development. Usage requires Python to be installed, however, this should already be installed should you have followed the [installation steps](#back-end-solutions).

```shell
# only run this if not already installed
pip install pre-commit
# the following command should be successful
pre-commit --version
# inside the project directory, run this command to install the git hook scripts
pre-commit install --hook-type pre-commit --hook-type pre-push
```

With this now configured, a series of jobs will now run upon every commit and push. Commit jobs will consist of linting whilst push jobs involve testing. See [pre-commit-config.yaml][pre-commit-path] for more detailed information.

## Deployment

Docker has been utilised to deploy the full-stack application. Docker images for the front and back-end applications are brought together using a Docker Compose file. Before following these steps, ensure [Docker >= 20.10.23][docker-install] and [Docker Compose >= 3.8][docker-compose-install] are installed correctly.

### Publishing a new version

When a new version of the application is ready, a new version of the docker images must also be generated. The version of the image must match the version given within the repository, and the `latest` tag should always be used to ensure the pointer is up to date.

```bash
# building the image
docker build . --tag davidkidd/pacman-solutions-frontend:latest --tag davidkidd/pacman-solutions-frontend:{new-version-number}
```

### Running the images

```bash
docker run -p 3000:80 -d davidkidd/pacman-solutions-frontend:latest
```


## Known Bugs

### React

#### Stuttering Render

- There is currently a visual bug where, whilst rendering the simulation, the state will jump suddenly and continue from a seemingly random point with agents in new positions not near their previous.
- Once the same simulation is restarted, this event does not occur and so it appears to be a front-end issue with the way that the states are rendered.
- It is not a commonly-occurring bug and so it has not been pinpointed yet, nor does it constitute a major issue


## Acknowledgements

- [Pacman](https://www.pacman.com/en/) - For the inspiration to solve this game
- [Public Pixel Font](https://www.fontspace.com/public-pixel-font-f72305) - For the font used in the web application


<!-- MARKDOWN LINKS & IMAGES -->

[docs-link]: https://david-kidd.gitbook.io/ai-solutions-to-pac-man/
[react-badge]: https://shields.io/badge/react-black?logo=react&style=for-the-badge
[pre-commit-path]: /.pre-commit-config.yaml
[npm-install]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[docker-install]: https://docs.docker.com/get-docker/
[docker-compose-install]: https://docs.docker.com/compose/install/
