/**
 * Modal Component
 * Accessible dialog using Radix Dialog primitive.
 * Traps focus, supports Escape key, and uses semantic markup.
 */
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Modal ({ trigger, title, description, children }){
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={"px-6"}>
        <DialogHeader>
          <DialogTitle className="font-medium text-lg font-heading text-h3">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-sm text-muted-foreground">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="mt-4">{children}</div>
      </DialogContent>
    </Dialog>
  );
};