import {createConnection} from "typeorm";

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mongodb',
      url: 'mongodb+srv://segp_30:mementomori123z@cluster0.0zgwu.mongodb.net/financial_service?retryWrites=true&w=majority',
      logging: true,
      synchronize: true,
      useNewUrlParser: true,
      ssl: true,
      entities: ['dist/Infra/Data_Base/Orm/*.js']
    })
  }
]