'use client';
import { customButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  isDisabled,
  rightIcon,
}: customButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      <div className="relative w-6 h-6 ">
        {rightIcon && (
          <Image
            src={rightIcon}
            fill
            alt="right-icon"
            className="object-contain"
          />
        )}
      </div>
    </button>
  );
};

export default CustomButton;
