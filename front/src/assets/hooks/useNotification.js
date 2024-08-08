import { useSnackbar } from "notistack";
import { useCallback } from "react";

export function useNotification (message, status) {
  const { enqueueSnackbar } = useSnackbar();

  const result = useCallback(() => {
    enqueueSnackbar(message, {
      variant: status,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
    })
  }, [message, status])

  return result
}

