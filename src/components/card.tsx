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
                <CardDescription></CardDescription>
                <CardAction >Invoice no- {contributorData.raseedNo}</CardAction>
            </CardHeader>
            <CardContent>
                <p>Amount - {contributorData.amount}</p>
                <Badge variant={"default"} className={"dark:bg-green-500 px-7 text-md"} asChild={true}>
                    <p>Paid</p>
                </Badge>
            </CardContent>

        </Card>
    )
}