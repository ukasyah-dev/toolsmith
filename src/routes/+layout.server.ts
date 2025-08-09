import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ url }) => {
	// TODO: Check if user is authenticated
	const auth = {
		isAuthenticated: false
	};

	if (!auth.isAuthenticated) {
		if (!url.pathname.startsWith('/auth')) {
			redirect(307, '/auth/login');
		}
	}

	return {
		auth
	};
};
