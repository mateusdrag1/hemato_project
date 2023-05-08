/* eslint-disable jsx-a11y/label-has-associated-control */
import { LabelHTMLAttributes } from 'react';

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className='text-sm text-zinc-600 flex items-center justify-between' {...props} />;
}
