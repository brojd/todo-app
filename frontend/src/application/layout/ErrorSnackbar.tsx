import { Text } from '@chakra-ui/react';
import { useSnackbar } from '@saas-ui/react';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useAllErrors } from 'store/store.hooks';

export const ErrorSnackbar = observer(() => {
  const allErrors = useAllErrors();
  const snackbar = useSnackbar();

  useEffect(() => {
    if (allErrors.length) {
      snackbar.error({
        title: <Text fontSize={18}>Oooopsy 🫢</Text>,
        description: allErrors.at(-1)?.response?.data.message.join(', '),
        isClosable: true,
        duration: 5000,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allErrors.length]);

  return null;
});
