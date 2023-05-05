import { HTMLAttributes } from 'react';

type FieldProps = HTMLAttributes<HTMLDivElement>;

export function Field(props: FieldProps) {
  return <div className='col-span-6 sm:col-span-3' {...props} />;
}
