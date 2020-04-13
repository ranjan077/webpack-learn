import React, { lazy, Suspense } from 'react';

function ReactCounterAsync() {
  const Counter = lazy(() => import('./Counter.jsx'));
  return (
    <div>
      <Suspense fallback={<div>Loding...</div>}>
        <Counter initialCount={1} />
      </Suspense>
    </div>
  );
}

export default ReactCounterAsync;
