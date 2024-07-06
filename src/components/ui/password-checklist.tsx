'use client';

import { InfoIcon } from 'lucide-react';
import React from 'react';
import ReactPasswordChecklist from 'react-password-checklist';
import uncheckedCheckbox from '@/assets/images/checkbox.png';
import checkedCheckbox from '@/assets/images/checked-checkbox.png';
import Image from 'next/image';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { PopoverAnchor } from '@radix-ui/react-popover';

interface PasswordChecklist {
  password: string;
}

const PasswordChecklist: React.FC<PasswordChecklist> = ({ password }) => {
  const [isValid, setIsValid] = React.useState(false);
  return (
    <Popover open={!!password && !isValid} onOpenChange={() => {}}>
      <PopoverAnchor asChild>
        <PopoverTrigger asChild>
          <div className='absolute left-0 right-0 top-0 bottom-0' />
        </PopoverTrigger>
      </PopoverAnchor>
      <PopoverContent side='left' sideOffset={16} align='start' alignOffset={24} asChild>
        <div className='password-checklist-container p-[21px] w-[194px] bg-[#e6f9f4] rounded border border-[#E1EBF5]'>
          <div className='password-checklist-arrow absolute w-[12px] h-[12px] bg-[#e6f9f4] top-4 border border-[#E1EBF5]' />
          <p className='flex gap-2 items-center justify-start text-[#182D41] font-serif font-medium'>
            <InfoIcon className='stroke-current' size={20} /> Password must
          </p>
          <ReactPasswordChecklist
            className='password-checklist *:font-serif *:font-light *:text-xs *:leading-[150%] flex flex-col gap-1 *:flex *:items-center *:gap-1'
            style={{ marginLeft: 28 }}
            rules={['minLength', 'capital', 'lowercase', 'specialChar']}
            minLength={8}
            value={password}
            messages={{
              minLength: '8 Characters Long',
              capital: '1 Uppercase Letter',
              lowercase: '1 Lowercase Letter',
              specialChar: '1 Special Character'
            }}
            iconComponents={{
              ValidIcon: <Image src={checkedCheckbox} alt='Valid' width={8} height={8} />,
              InvalidIcon: <Image src={uncheckedCheckbox} alt='Valid' width={8} height={8} />
            }}
            iconSize={8}
            validTextColor='#01C295'
            invalidTextColor='#557591'
            onChange={isValid => {
              setIsValid(isValid);
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PasswordChecklist;
