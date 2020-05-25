import { User } from '../../../../db/models/user';
import { Context } from '../../context';
import { GraphQLResolveInfo } from 'graphql/type/definition';

type UserQueryArguments = {
	where?: {
		id?: number;
		email?: string;
	};
};

type UsersQueryArguments = {
	where?: {
		is_deleted?: boolean;
	};
	query?: {
		limit?: number;
		offset?: number;
	};
};

export type UserQuery = (
	parent: any,
	arguments: UserQueryArguments,
	context: Context,
	info: GraphQLResolveInfo,
) => Promise<User> | null;

export type UsersQuery = (
	parent: any,
	arguments: UsersQueryArguments,
	context: Context,
	info: GraphQLResolveInfo,
) => Promise<User[]> | null;
