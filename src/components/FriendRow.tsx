import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "lucide-react";
import { FaceIcon } from "@radix-ui/react-icons";
import { Friend } from "@/types/friend";
import photo from '../../public/avatars/0.png';


export default function FriendRow({ friend }: { friend: Friend }) {
    return (
        <Card className="mb-4">
            <CardHeader className="flex-row items-center gap-2">
                <Image
                    src={friend.ppUrl || photo}
                    alt={`${friend.name}'s profile`}
                    className="rounded-full mr-4"
                    unoptimized
                    width={50}
                    height={50}
                    quality={100}
                />
                <div className="flex row w-[100%]">
                    <div className="flex-column w-[50%]">
                        <CardTitle>{friend.name}</CardTitle>
                        <div className="flex row gap-4">
                            <CardDescription>{friend.listeningAgo}</CardDescription>
                            <CardDescription>{friend.listening}</CardDescription>
                        </div>
                    </div>
                    <div className="w-[50%] flex justify-end gap-2">
                        <Button variant="outline" size="icon">
                            <FaceIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                            <ChevronRightIcon className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardHeader>
        </Card>
    );
}