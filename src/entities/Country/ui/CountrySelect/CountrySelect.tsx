import { FC, memo } from 'react';
import { Select, SelectProps } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps extends SelectProps {}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Armenia, content: Country.Armenia },
];

export const CountrySelect: FC<CountrySelectProps> = memo((props) => (
  <Select
    {...props}
    options={options}
  />
));
