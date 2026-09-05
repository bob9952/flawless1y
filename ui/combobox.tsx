import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Check, ChevronsUpDown, X } from "lucide-react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "./command";

import React from "react";


// ne svidja mi se sto je ovo genericko ? 
// nema potrebe da bude, sve moze preko propova ja mislim ... 
// mada skroz je i ovo okej, uvek mogu da saljem string ... 
// samo sto search function nece biti fetch i to je to, ne mora da vrati promise 

// interface Props<T extends object> {
//     title?: string;
//     value?: T;
//     valueKey: keyof T;
//     disabled?: boolean;
//     size?: number;
//     renderText: (value: T) => string;
//     onChange?: (value: T) => void;
//     searchFn: (search: string, offset: number, size: number) => Promise<T[]>;
// }

// // definisao bih type ili kako ? 
// // zvao bih sa ComboBox< {} > 

// const ComboBox = <T extends object>({
//     title,
//     value,
//     valueKey,
//     disabled = false,
//     size = 25,
//     renderText,
//     onChange,
//     searchFn,
// }: Props<T>) => {
//     const [search, setSearch] = useState<string>("");
//     const [options, setOptions] = useState<T[]>([]);
//     const [canLoadMore, setCanLoadMore] = useState<boolean>(true);
//     const debouncedsearch = useDebounce<string>(search, 500);
//     const [isLoading, setIsLoading] = useState<boolean>(false);

//     const getOptions = useCallback(async () => {
//         setIsLoading(true);
//         const searchResult = await searchFn(debouncedsearch || "", 0, size);
//         if (searchResult.length === 0 || searchResult.length < size) {
//             setCanLoadMore(false);
//         }
//         setOptions(searchResult);
//         setIsLoading(false);
//     }, [debouncedsearch, searchFn, size]);

//     const getMoreOptions = useCallback(async () => {
//         setIsLoading(true);
//         const searchResult = await searchFn(
//             debouncedsearch || "",
//             options.length,
//             size,
//         );
//         if (searchResult.length === 0 || searchResult.length < size) {
//             setCanLoadMore(false);
//         }
//         if (
//             searchResult[searchResult.length - 1][valueKey] ===
//             options[options.length - 1][valueKey]
//         ) {
//             setCanLoadMore(false);
//             return;
//         }
//         setOptions([...options, ...searchResult]);
//         setIsLoading(false);
//     }, [debouncedsearch, searchFn, options, valueKey, size]);

//     useEffect(() => {
//         getOptions();
//     }, [getOptions]);

//     return (
//         <Popover modal={true}>
//             <PopoverTrigger asChild>
//                 <Button
//                     variant="outline"
//                     className={cn(
//                         "w-full justify-between",
//                         !value && "text-muted-foreground",
//                     )}
//                     disabled={disabled}
//                 >
//                     <div className="truncate">
//                         {value ? renderText(value) : `Select ${title}`}
//                     </div>
//                     <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                 </Button>
//             </PopoverTrigger>
//             <PopoverContent className="PopoverContent p-0">
//                 <Command shouldFilter={false}>
//                     <CommandInput
//                         placeholder={`Search ${title}...`}
//                         value={typeof search === "string" ? search : ""}
//                         onValueChange={(value) => setSearch(value)}
//                     />
//                     <CommandList>
//                         <CommandEmpty>Nije pronadjen ni jedan rezultat.</CommandEmpty>
//                         <CommandGroup className="max-h-60 overflow-y-auto">
//                             <PopoverClose asChild>
//                                 <div>
//                                     {options.map((option) => (
//                                         <CommandItem
//                                             value={option[valueKey] as string}
//                                             key={option[valueKey] as string}
//                                             onSelect={() => onChange?.(option)}
//                                         >
//                                             <Check
//                                                 className={cn(
//                                                     "mr-2 h-4 w-4",
//                                                     option[valueKey] ===
//                                                         value?.[valueKey]
//                                                         ? "opacity-100"
//                                                         : "opacity-0",
//                                                 )}
//                                             />
//                                             {renderText(option)}
//                                         </CommandItem>
//                                     ))}
//                                 </div>
//                             </PopoverClose>
//                             <CommandItem asChild>
//                                 {canLoadMore && (
//                                     <Button
//                                         variant="ghost"
//                                         size="sm"
//                                         className="w-full h-7"
//                                         onClick={getMoreOptions}
//                                         disabled={isLoading}
//                                     >
//                                         {isLoading 
//                                             ? <LoaderIcon className="w-4 h-4 animate-spin" /> 
//                                             : "Load More ↓"}
//                                     </Button>
//                                 )}
//                             </CommandItem>
//                         </CommandGroup>
//                     </CommandList>
//                 </Command>
//             </PopoverContent>
//         </Popover>
//     );
// };


// interface Props<T extends object> {
//     title?: string;
//     value?: T;
//     valueKey: keyof T;
//     disabled?: boolean;
//     size?: number;
//     renderText: (value: T) => string;
//     onChange?: (value: T) => void;
//     searchFn: (search: string, offset: number, size: number) => Promise<T[]>;
// }

export type ComboOption = { value: string; label: string };

type ComboBoxProps = {
  title?: string;
  options: ComboOption[];
  value?: string;                              // undefined => placeholder
  onChange?: (v: string | undefined) => void;  // pass undefined to clear
  placeholder?: string;
  searchable?: boolean;                        // default true
  clearable?: boolean;                         // default true
  disabled?: boolean;
  className?: string;
};


// definisao bih type ili kako ? 
// zvao bih sa ComboBox< {} > 

const ComboBox = ({
    title,
    options,
    value,
    onChange,
    placeholder = `Izaberite ${title ?? "stavku"}`,
    searchable = true,
    clearable = true,
    disabled,
    className
}: ComboBoxProps) => {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const selected = options.find(o => o.value === value);
  
    const filteredOptions = React.useMemo(() => {
        if (!search.trim()) return options;
        const searchLower = search.toLowerCase().trim();
        return options.filter(o => 
          o.label.toLowerCase().includes(searchLower)
        );
      }, [options, search]);

    const handleSelect = (val: string) => {
      onChange?.(val === value ? undefined : val);
      setOpen(false);
    };
  
    return (
      <Popover modal open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            disabled={disabled}
            className={cn("w-full justify-between", !selected && "text-muted-foreground", className)}
          >
            <span className="truncate">{selected?.label ?? placeholder}</span>
            <span className="ml-2 inline-flex items-center gap-1">
              {clearable && value !== undefined && (
                <X
                  className="h-4 w-4 opacity-60 hover:opacity-100"
                  onClick={(e) => { e.stopPropagation(); onChange?.(undefined); setSearch(''); }}
                />
              )}
              <ChevronsUpDown className="h-4 w-4 opacity-60" />
            </span>
          </Button>
        </PopoverTrigger>
  
        {/* <PopoverContent className="p-0 w-auto" style={{ width: 'var(--radix-popover-trigger-width)' }}> */}
        <PopoverContent className="p-0 w-auto min-w-[var(--radix-popover-trigger-width)] max-w-[90vw]" style={{ width: 'auto' }}>
          <Command shouldFilter={false}  className="w-full">
            {searchable && <CommandInput value={search} onValueChange={setSearch} placeholder={`Pretraži ${title ?? ""}…`} />}
            <CommandList>
              <CommandEmpty>Nema rezultata.</CommandEmpty>
              <CommandGroup className="w-full max-h-70 overflow-y-auto">
                {filteredOptions.map((o) => (
                  <CommandItem
                    key={o.label}
                    value={o.label} 
                    onSelect={() => handleSelect(o.value)}
                  >
                    <Check className={cn("mr-2 h-4 w-4", o.value === value ? "opacity-100" : "opacity-0")} />
                    {/* {o.label} */}
                    <span>{o.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
};

export default ComboBox;