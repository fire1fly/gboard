import { FC, memo, useMemo } from 'react';
import { Select, SelectProps } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps extends SelectProps {}

export const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
  const options = useMemo(() => [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.BYN, content: Currency.BYN },
    { value: Currency.UAH, content: Currency.UAH },
    { value: Currency.KZT, content: Currency.KZT },
    { value: Currency.AMD, content: Currency.AMD },
  ], []);

  return (
    <Select
      {...props}
      options={options}
    />
  );
});
