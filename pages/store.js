import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function Store() {

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('loginStatus') !== 'true') {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.setItem('loginStatus', 'false');
    router.push('/login');
  }

  return (
    <div className='store'>
      <h2>Welcome to the store!</h2>
      <button className='logout-btn' onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Store;
