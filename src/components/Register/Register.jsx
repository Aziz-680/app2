import Style from "./Register.module.css"
import { Button, Checkbox, Label, TextInput, Radio } from "flowbite-react";
import { useForm } from "react-hook-form"


const defaultValues = {
    name:"",
    email:"",
    password:"",
    rePassword:"",
    dateOfBirth:"",
    gender:""
}

const Register = () => {
    
    let {register,handleSubmit} = useForm({
        defaultValues
    });

    function onSubmit(data){
        console.log(data);
    }

    return (
        <>
            <div className="max-w-lg mx-auto py-25" >
                <div className="bg-white dark:bg-gray-800 p-6 shadow-lg " >
                    <h2 className=" text-center ">Registration Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
                        {/* ||||||||||||||||||||| Email ||||||||||||||||||||| */}
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email">Your Email</Label>
                            </div>
                            <TextInput id="email" type="email" placeholder="name@mail.com"  shadow {...register("email")} />
                        </div>

                        {/* ||||||||||||||||||||| Name ||||||||||||||||||||| */}
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name">Your Name</Label>
                            </div>
                            <TextInput id="name" type="text" placeholder="Folan Elan"  shadow {...register("name")} />
                        </div>

                        {/* ||||||||||||||||||||| Password ||||||||||||||||||||| */}
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password">Your Password</Label>
                            </div>
                            <TextInput id="password" type="password" placeholder="********"  shadow {...register("password")} />
                        </div>

                        {/* ||||||||||||||||||||| Confirm Pass ||||||||||||||||||||| */}
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="rePassword">Confirm Password</Label>
                            </div>
                            <TextInput id="rePassword" type="password" placeholder="********"  shadow {...register("rePassword")} />
                        </div>

                        {/* ||||||||||||||||||||| Bith Date ||||||||||||||||||||| */}
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="dateOfBirth">Birth Date</Label>
                            </div>
                            <TextInput id="dateOfBirth" type="date" shadow {...register("dateOfBirth")} />
                        </div>

                        {/* ||||||||||||||||||||| Gender ||||||||||||||||||||| */}
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="gender">Select Your Gender</Label>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <Radio id="male" value="male" {...register("gender")}/>
                                <Label htmlFor="male">Male</Label>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <Radio id="female" value="female" {...register("gender")}/>
                                <Label htmlFor="female">Female</Label>
                            </div>
                        </div>
                        <Button className="bg-blue-700 dark:text-white" type="submit">Submit</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register