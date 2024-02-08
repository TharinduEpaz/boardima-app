import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const avatarImageLinks = {
  avatar1: "https://api.dicebear.com/7.x/lorelei/svg?seed=Chester",
  avatar2: "https://api.dicebear.com/7.x/lorelei/svg?seed=Mittens",
  avatar3: "https://api.dicebear.com/7.x/lorelei/svg?seed=Angel",
  avatar4: "https://api.dicebear.com/7.x/lorelei/svg?seed=Max",
  avatar5: "https://api.dicebear.com/7.x/lorelei/svg?seed=Buster",
  avatar6: "https://api.dicebear.com/7.x/lorelei/svg?seed=Bandit",
};

export function People() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={avatarImageLinks.avatar1} alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-sm text-muted-foreground">
            olivia.martin@email.com
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src={avatarImageLinks.avatar2} alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jackson Lee</p>
          <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={avatarImageLinks.avatar3} alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
          <p className="text-sm text-muted-foreground">
            isabella.nguyen@email.com
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={avatarImageLinks.avatar4} alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">William Kim</p>
          <p className="text-sm text-muted-foreground">will@email.com</p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={avatarImageLinks.avatar5} alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sofia Davis</p>
          <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
        </div>
      </div>
    </div>
  );
}
