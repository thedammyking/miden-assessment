'use client';

import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { CountrySelectorDropdown, type ParsedCountry, FlagImage } from 'react-international-phone';
import { ChevronDown } from 'lucide-react';

import 'react-international-phone/style.css';

interface CountryPickerProps {
  handleSelection(country: ParsedCountry): void;
  selectedCountry: ParsedCountry;
}

const CountryPicker: React.FC<CountryPickerProps> = ({ handleSelection, selectedCountry }) => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  const handleCountrySelect = (country: ParsedCountry) => {
    handleSelection(country);
    setIsPopoverOpen(false);
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={open => setIsPopoverOpen(open)}>
      <PopoverTrigger asChild>
        <button
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          className='w-[57px] h-10 flex justify-center items-center gap-1 bg-[#F5F9FC] absolute top-1 left-1 bottom-1'
        >
          <ChevronDown className='w-4 h-4 stroke-[1px]' />
          <FlagImage iso2={selectedCountry.iso2} size='20px' />
        </button>
      </PopoverTrigger>
      <PopoverContent className='w-max h-max p-0'>
        <CountrySelectorDropdown
          show
          selectedCountry={selectedCountry.iso2}
          onSelect={handleCountrySelect}
          style={{ position: 'relative', top: 0, left: 0 }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default CountryPicker;
