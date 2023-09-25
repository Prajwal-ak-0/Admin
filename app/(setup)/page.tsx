import { initialProfile } from "@/lib/InitialProfile"
import {db} from "@/lib/db";
import { UserButton } from "@clerk/nextjs";
import {redirect} from "next/navigation"

const SetUpPage =async () => {

  const profile=await initialProfile();

  const server=await db.server.findFirst({
    where:{
      members:{
        some:{
          profileId:profile.id
        }
      }
    }
  })

  if(server){
    return redirect(`/servers/${server.id}`);
  }

  return (
    <>
    <div>Create a Server</div>
    </>
  )
}

export default SetUpPage;