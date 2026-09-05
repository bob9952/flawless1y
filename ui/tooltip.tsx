import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = ({
    delayDuration = 0,
    ...props
  }: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider> & {
    delayDuration?: number
  }) => {
    return (
      <TooltipPrimitive.Provider
        data-slot="tooltip-provider"
        delayDuration={delayDuration}
        {...props}
      />
    )
  }
  TooltipProvider.displayName = "TooltipProvider"



// const TooltipProvider = (
//     { delayDuration = 0, ...props }:
//     React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider>
//   ) => {
//     return (
//       <TooltipPrimitive.Provider
//         data-slot="tooltip-provider"
//         delayDuration={delayDuration}
//         {...props}
//       />
//     );
//   }
// function TooltipProvider({
//   delayDuration = 0,
//   ...props
// }: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
//   return (
//     <TooltipPrimitive.Provider
//       data-slot="tooltip-provider"
//       delayDuration={delayDuration}
//       {...props}
//     />
//   )
// }

// function Tooltip({
//   ...props
// }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
//   return (
//     <TooltipProvider>
//       <TooltipPrimitive.Root data-slot="tooltip" {...props} />
//     </TooltipProvider>
//   )
// }
const Tooltip = ({
    ...props
  }: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>) => {
    return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
  }
  Tooltip.displayName = "Tooltip"


const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ ...props }, ref) => {
  return (
    <TooltipPrimitive.Trigger
      ref={ref}
      data-slot="tooltip-trigger"
      {...props}
    />
  )
})
TooltipTrigger.displayName = "TooltipTrigger"

// function TooltipTrigger({
//   ...props
// }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
//   return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
// }

// function TooltipContent({
//   className,
//   sideOffset = 0,
//   children,
//   ...props
// }: React.ComponentProps<typeof TooltipPrimitive.Content>) {
//   return (
//     <TooltipPrimitive.Portal>
//       <TooltipPrimitive.Content
//         data-slot="tooltip-content"
//         sideOffset={sideOffset}
//         className={cn(
//           "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
//           className
//         )}
//         {...props}
//       >
//         {children}
//         <TooltipPrimitive.Arrow className="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
//       </TooltipPrimitive.Content>
//     </TooltipPrimitive.Portal>
//   )
// }

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    sideOffset?: number
  }
>(({ className, align = "center", sideOffset = 4, children, ...props }, ref) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        align={align}
        className={cn(
        //   "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",  
        className
        )}
        {...props}
      >
        {children}
        {/* <TooltipPrimitive.Arrow className="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" /> */}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
})
TooltipContent.displayName = "TooltipContent"

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
