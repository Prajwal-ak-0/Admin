"use client";

import { useEffect, useState } from "react";

import { CreateServerModal } from "@/components/modals/CreateServerModal";
import { InviteModal } from "../modals/InviteModal";
import { EditServerModal } from "../modals/EditServerModal";
import { MembersModal } from "../modals/MembersModal";
import { CreateChannelModal } from "../modals/CreateChannelModal";
import { DeleteChannelModal } from "../modals/DeleteChannelModal";
import {DeleteServerModal} from "../modals/DeleteServerModal";
import { LeaveServerModal } from "../modals/LeaveServerModal";
import { EditChannelModal } from "../modals/EditChannelModal";
import { MessageFileModal } from "../modals/MessageFileModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal/>
      <EditServerModal/>
      <MembersModal/>
      <DeleteServerModal/>
      <CreateChannelModal/>
      <DeleteChannelModal/>
      <LeaveServerModal/>
      <EditChannelModal/>
      <MessageFileModal/>
    </>
  )
}