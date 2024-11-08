// This is a server component to handle the server-side redirect

import { redirect } from 'next/navigation';

export default function RedirectToLogin() {
  redirect('/sign-in');
}
