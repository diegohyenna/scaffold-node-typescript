import express from 'express'
import cors from 'cors'

class App {
  public express: express.Application;

  public constructor () {
    this.express = express()
    this.middelwares()
    this.routes()
  }

  private middelwares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database () {
    console.log('a')
  }

  private routes () {
    this.express.get('/', (req, res) => {
      return res.send('Hello world')
    })
  }
}

export default new App().express
