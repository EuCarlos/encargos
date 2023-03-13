import { createConnection, getConnectionOptions } from 'typeorm'
require("dotenv").config()

const getDBConnection =async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  await createConnection({...connectionOptions, name:"default"});
}

getDBConnection()