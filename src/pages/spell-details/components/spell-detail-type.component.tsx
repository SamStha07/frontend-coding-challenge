import React, { FC } from 'react';

interface ISpellTypeProps {
  level: number | undefined;
  attack_type: string | undefined;
  range: string | undefined;
}

interface IItemProps {
  text: string;
  value: string | number;
}

const Item: FC<IItemProps> = ({ text, value }) => {
  return (
    <p className='text-gray-500 first-letter:capitalize'>
      {text}: <span className='text-gray-700 capitalize'>{value}</span>
    </p>
  );
};

const SpellDetailType: FC<ISpellTypeProps> = ({ level, attack_type, range }) => {
  return (
    <div className='my-4'>
      <Item text='level' value={level!} />
      {attack_type && <Item text='attack type' value={attack_type} />}

      <Item text='range' value={range!} />
    </div>
  );
};

export default SpellDetailType;
