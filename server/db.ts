import { Client } from "postgres";

let config = "postgres://eylrwzmt:oZ-T6w_cEIg_2i9agFo6RHf3OpqA82NU@heffalump.db.elephantsql.com/eylrwzmt";

const client = new Client(config);

await client.connect();

export default client;