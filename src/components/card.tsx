import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import type {ContributorsData} from "@/App.tsx";
import {Badge} from "@/components/ui/badge.tsx";

interface CardProps{
    contributorData:ContributorsData;
}

export function CardComponent({contributorData}:CardProps){
    return(
        <Card>
            <CardHeader>
                <CardTitle className={"text-3xl"}>{contributorData.name}</CardTitle>

                <CardAction >Invoice no- {contributorData.raseedNo}</CardAction>
            </CardHeader>
            <CardContent>
                <p className={"mb-10"}>Amount - {contributorData.amount}</p>
                <Badge variant={"default"} className={`${contributorData.isPaid?"dark:bg-green-500":"dark:bg-red-700 text-white"} px-7 text-md`} asChild={true}>
                    <p>{contributorData.isPaid?"Paid":"Due"}</p>
                </Badge>
            </CardContent>

        </Card>
    )
}