import {
    Dialog,
    DialogContent,

    DialogTitle,

    DialogTrigger,
} from "@/components/ui/dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Toggle } from "@/components/ui/toggle"
import {useState} from "react";
import * as React from "react";
import {useContentStore} from "@/store.ts";


export function AddContent({className, ...props}: React.ComponentProps<"div">){

    const[isPaid,setIsPaid]=useState(false);
    const {addContent}=useContentStore();

   async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData=new FormData(e.currentTarget);
        const data=Object.fromEntries(formData.entries());
        // @ts-ignore
        data.isPaid=isPaid;
       try {
        addContent(data);
       }catch (e){
           const error = e as Error;
           console.error(error.message);

       }
    }



    return(
        <Dialog>
            <DialogTrigger className={"bg-blue-500 rounded-md py-3"}>Add Contributor</DialogTrigger>
            <DialogContent >
                <DialogTitle className={"flex items-center justify-self-center"}>
                    <img src={"./logo.png"} className={"w-[10vw] rounded-xl"}/>
                </DialogTitle>
                <div className={cn("flex flex-col gap-6 ", className)} {...props}>
                    <Card className={"bg-transparent border-none"}>
                        <CardHeader>
                            <CardTitle>Add Contributor</CardTitle>
                            <CardDescription>
                                Thanks to your Contribution for Durga Puja🙏.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={(e:React.FormEvent<HTMLFormElement>)=>handleSubmit(e)}>
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-3">
                                        <div className="flex items-center">
                                            <Label htmlFor="invoiceNo">Invoice No</Label>
                                        </div>
                                        <Input name={"invoiceNo"}   id="invoiceNo" min={0} type="number" placeholder={"Invoice No"} required />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            name={"name"}
                                            id="name"
                                            type="text"
                                            placeholder="Enter your name"
                                            required
                                            formTarget={"name"}
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <div className="flex items-center">
                                            <Label htmlFor="address">Address</Label>
                                        </div>
                                        <Input name={"address"} id="address" type="text" placeholder={"Enter you address"} required />
                                    </div>
                                    <div className="grid gap-3">
                                        <div className="flex items-center">
                                            <Label htmlFor="amount">Amount</Label>
                                        </div>
                                        <Input name={"amount"} id="amount" type="number" placeholder={"Amount"} required />
                                    </div>
                                    <div className="grid gap-3 ">
                                        <div className="flex items-center justify-between   w-[20%]">
                                            <input  type="checkbox" name="isPaid" className="hidden peer" />
                                            <Toggle pressed={isPaid} onPressedChange={setIsPaid} name={"isPaid"}  variant={"outline"} size={"lg"} children={"Paid"}/>
                                        </div>

                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Button type="submit" className="w-full cursor-pointer hover:bg-green-400">
                                            Save
                                        </Button>
                                    </div>
                                </div>

                            </form>
                        </CardContent>
                    </Card>
                </div>
            </DialogContent>
        </Dialog>
    )
}