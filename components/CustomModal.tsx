"use client"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import React, { ReactNode, SetStateAction } from "react";


interface ModalType {
    children:ReactNode
    isOpen:boolean
    isLogin:"login" | "createUser"
    onOpenChange:React.Dispatch<SetStateAction<boolean>>
    setIsLogin:React.Dispatch<SetStateAction<"login" | "createUser">>
}


const CustomModal:React.FC<ModalType> = ({setIsLogin, children, isOpen, onOpenChange, isLogin}) => {

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
              <ModalHeader className="flex items-center justify-center gap-5">
                <p onClick={() => setIsLogin("login")} className={`${isLogin == "login" ? "text-[#f5a524]" : ""} text-[20px] cursor-pointer `}>Login</p>
                <p onClick={() => setIsLogin("createUser")} className={`${isLogin == "createUser" ? "text-[#f5a524]" : ""} text-[20px] cursor-pointer `}>Creata User</p>
              </ModalHeader>
              <ModalBody>
                {children}
              </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default CustomModal