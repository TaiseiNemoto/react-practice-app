import { forwardRef } from 'react';

export default forwardRef<HTMLInputElement>(function SearchInput(props, ref) {
  return <input ref={ref} placeholder="Looking for something?" />;
});
