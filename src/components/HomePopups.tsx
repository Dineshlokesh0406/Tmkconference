import { useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import popup1Img from "@/assets/popup1.jpg";
import popup2Img from "@/assets/popup2.jpg";

const HomePopups = () => {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  useEffect(() => {
    setIsFirstOpen(true);
  }, []);

  return (
    <>
      <DialogPrimitive.Root
        open={isFirstOpen}
        onOpenChange={(open) => {
          if (!open && isFirstOpen) {
            setIsFirstOpen(false);
            setIsSecondOpen(true);
          } else {
            setIsFirstOpen(open);
          }
        }}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-background/30 backdrop-blur-[2px]" />
          <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 outline-none">
            <div className="relative inline-block mx-auto max-w-[95vw] sm:max-w-[800px] w-auto">
              <DialogPrimitive.Close className="absolute -top-[1px] -right-[1px] inline-flex h-6 w-6 items-center justify-center rounded-sm bg-background/90 border shadow ring-offset-background hover:bg-background/95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <X className="h-3 w-3" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
              <img
                src={popup1Img}
                alt="Popup 1"
                className="max-w-[95vw] max-h-[80vh] w-auto h-auto object-contain rounded-md shadow-lg"
              />
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>

      <DialogPrimitive.Root open={isSecondOpen} onOpenChange={setIsSecondOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-background/30 backdrop-blur-[2px]" />
          <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 outline-none">
            <div className="relative inline-block mx-auto max-w-[95vw] sm:max-w-[800px] w-auto">
              <DialogPrimitive.Close className="absolute -top-[1px] -right-[1px] inline-flex h-6 w-6 items-center justify-center rounded-sm bg-background/90 border shadow ring-offset-background hover:bg-background/95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <X className="h-3 w-3" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
              <img
                src={popup2Img}
                alt="Popup 2"
                className="max-w-[95vw] max-h-[80vh] w-auto h-auto object-contain rounded-md shadow-lg"
              />
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
};

export default HomePopups;


