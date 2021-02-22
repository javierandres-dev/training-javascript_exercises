import React from 'react';

const Exercise1 = () => {
  const d = document,
    $solution: HTMLElement | null = d.getElementById('solution'),
    $notification: HTMLElement | null = d.getElementById('notification');
  if ($solution !== null && $notification !== null) {
    $solution.innerText = 'from exercise 1 into solution';
    $notification.innerText = 'from exercise 1 into notification';
  }
  return <div>... from exercise 1</div>;
};

export default Exercise1;
