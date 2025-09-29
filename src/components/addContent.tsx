import {
    Dialog,
    DialogContent,

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

export function AddContent({className, ...props}: React.ComponentProps<"div">){
    return(
        <Dialog>
            <DialogTrigger className={"bg-blue-500 rounded-md py-3"}>Add Contributor</DialogTrigger>
            <DialogContent>
                <div className={cn("flex flex-col gap-6 ", className)} {...props}>
                    <Card className={"bg-transparent border-none"}>
                        <CardHeader>
                            <CardTitle>Add Contributor</CardTitle>
                            <CardDescription>
                                Thanks to your contribute for Durga Puja🙏.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-3">
                                        <div className="flex items-center">
                                            <Label htmlFor="invoiceNo">Invoice No</Label>
                                        </div>
                                        <Input id="invoiceNo" min={0}   type="number" placeholder={"Invoice No"} required />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <div className="flex items-center">
                                            <Label htmlFor="address">Address</Label>
                                        </div>
                                        <Input id="address" type="text" placeholder={"Enter you address"} required />
                                    </div>
                                    <div className="grid gap-3">
                                        <div className="flex items-center">
                                            <Label htmlFor="amount">Amount</Label>
                                        </div>
                                        <Input id="amount" type="number" placeholder={"Amount"} required />
                                    </div>
                                    <div className="grid gap-3 ">
                                        <div className="flex items-center justify-between   w-[20%]">
                                            <Toggle variant={"outline"} size={"lg"} children={"Paid"}/>
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