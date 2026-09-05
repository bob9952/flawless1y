import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogClose = DialogPrimitive.Close

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-black/65 data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in" />
    <DialogPrimitive.Content ref={ref} className={cn("fixed left-1/2 top-1/2 z-[61] w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 -translate-y-1/2 outline-none", className)} {...props}>
      {children}
      <DialogPrimitive.Close className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-ink shadow-lg transition hover:bg-white" aria-label="Zatvori fotografiju"><X size={20} /></DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
))
DialogContent.displayName = "DialogContent"

const DialogTitle = DialogPrimitive.Title
const DialogDescription = DialogPrimitive.Description

export { Dialog, DialogTrigger, DialogClose, DialogContent, DialogTitle, DialogDescription }
