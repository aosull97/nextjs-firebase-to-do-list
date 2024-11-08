// This is a server component to handle the server-side redirect. It redirects the user to the login page if they are not logged in

import { redirect } from 'next/navigation';

export default function RedirectToLogin() {
  redirect('/sign-in');
}
