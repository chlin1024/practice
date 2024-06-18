export default () => ({
  database: {
    username: 'postgres',
    password: '',
    database: 'buyy_ecommerce',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT as string, 10) || 5432,
  },
});
