import { config } from 'dotenv';
import { ApolloError } from 'apollo-server-fastify';

// Populate environment variables from .env file
config();

const requiredEnvironmentVariables: string[] = ['NODE_ENV', 'PORT', 'SECRET'];

requiredEnvironmentVariables.forEach(variable => {
	if (!(variable in process.env)) {
		throw new ApolloError(
			`Variable ${variable} was not declared in .env file!`,
		);
	}
});

export default {
	NODE_ENV: process.env.NODE_ENV || 'production',
	IS_DEV: process.env.NODE_ENV === 'development',
	IS_TEST: process.env.NODE_ENV === 'testing',
	IS_PROD: process.env.NODE_ENV === 'production',
	PORT: Number(process.env.PORT) || 3000,
	SECRET: process.env.SECRET || 'super_secret',
	DATABASE_URL: process.env.DATABASE_URL || '',
	REDIS_URL: process.env.REDIS_URL || '',
	LOG_LEVEL: process.env.LOG_LEVEL || 'info',
	DISABLE_LOGGING: Boolean(process.env.DISABLE_LOGGING) || false,
};