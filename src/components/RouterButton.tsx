import React from "react";
import { Button } from "@material-ui/core";
import { useRouter } from "hooks/useRouter";

export interface RouterButtonProps {
  id: string;
  route: string;
  displayText: string;
}

export function RouterButton(props: RouterButtonProps) {
  const router = useRouter();

  return (
    <Button
      id={props.id}
      variant="contained"
      color="primary"
      size="large"
      onClick={() => { router.push(props.route); }}
    >
      {props.displayText}
    </Button>
  );
}
