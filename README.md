# charthub.litmuschaos.io  
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Flitmuschaos%2Fcharthub.litmuschaos.io.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Flitmuschaos%2Fcharthub.litmuschaos.io?ref=badge_shield)

Front-end for litmus community charts.

# Installation
- Install Golang. Follow the instructions [here](https://golang.org/doc/install).
- Install Node.js and npm. Follow the instructions [here](https://nodejs.org/en/download/current/).
- Install Yarn. Follow the instructions [here](https://yarnpkg.com/en/docs/install).
- Install npm packages.
  ```
  yarn install  
  ```
- Install Go server dependencies.
  ```
  go get github.com/gorilla/mux
  go get gopkg.in/yaml.v3
  ```

# Usage
Navigate into `server` folder and run `go run *.go`. This will start the backend framework. 
Now, navigate back to the root folder in a separate terminal and run `yarn start` to run development server; 
to create production build, run `yarn build`. This conjoined process starts up the charthub on your localhost. 
Open your browser and go to `http://localhost:3000/`.

# docker

Install docker compose [Instructions here!](https://docs.docker.com/compose/install/)

Run the containers using docker-compose

```docker-compose up```

Go to your browser and open: `http://localhost`

You can also run server and client seperately using the commands

```docker-compose up server```

and

```docker-compose up client```

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Flitmuschaos%2Fcharthub.litmuschaos.io.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Flitmuschaos%2Fcharthub.litmuschaos.io?ref=badge_large)