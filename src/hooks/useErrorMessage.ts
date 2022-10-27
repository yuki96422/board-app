import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

type Props = {
  title: string
  status: "info" | "warning" | "success" | "error" | "loading"
  duration:number
};

const useErrorMessage = () => {
  const toast = useToast();
  const showErrorMessage = useCallback(
    (props: Props) => {
      const { title, status, duration } = props;
      toast({ title, status, duration });
    },
    [toast]
  );

  return { showErrorMessage };
};

export default useErrorMessage;
