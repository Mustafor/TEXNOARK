"use client"
import { Button } from "@nextui-org/button"
import CustomModal from "./CustomModal"
import { useDisclosure } from "@nextui-org/modal";
import { useState } from "react";
import LoginInputs from "./LoginInputs";
import CreateUsers from "./CreateUsers";
import { Img4 } from "@/public/images/Icon";

const Login = () => {
    const [isLogin, setIsLogin] = useState<"login" | "createUser">("login")
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
  return (
    <div className="text-center">
        <Button style={{width:"auto", height:"auto"}} className="w-[50px] h-[50px] rounded-md bg-[#EBEFF3] p-[12px]" onPress={onOpen}>
            <Img4/>
        </Button>
        <CustomModal isLogin={isLogin} setIsLogin={setIsLogin} isOpen={isOpen} onOpenChange={onOpenChange}>
            {isLogin == "login" ? <LoginInputs onClose={onClose}/> : <CreateUsers setIsLogin={setIsLogin}/>}
        </CustomModal>
    </div>
  )
}

export default Login