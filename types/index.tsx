import { MouseEventHandler } from 'react';

export interface customButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
}

export interface SearchManufacturerprops {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
