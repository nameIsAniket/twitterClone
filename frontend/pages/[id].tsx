import { useCurrentUser } from '@/hooks/user';
import {Feedcard, TwitterLayout} from './index' 
import type { NextPage } from 'next'
import Image from 'next/image';
import { IoArrowBack } from "react-icons/io5";
import { Tweet } from '@/gql/graphql';

 const UserProfilePage: NextPage = () => {
    const {user} = useCurrentUser();
    return <div>
        <TwitterLayout>
            <div className='relative'>
                <nav className='ml-4 gap-6 flex items-center bg-opacity-50 backdrop-blur py-1' >
                    <IoArrowBack className='text-xl'/>
                    <div>
                        <div className='font-semibold text-xl'>{user?.firstName + " " +user?.lastName}</div>
                        <div className='text-slate-600 text-sm'>100 Post</div>
                    </div>
                </nav>

                <Image src={'https://pbs.twimg.com/profile_banners/3052732555/1557767914/1500x500'} alt='Background Image' height={200} width={598} className='w-full'></Image>

                <Image src={"https://pbs.twimg.com/profile_images/1127986516339249152/-NCXZ_DB_400x400.jpg"} alt='Profile Image' height={140} width={140} className='rounded-full absolute top-48 ml-4 bg-black p-1'></Image>

                <div className='flex justify-end h-16 mt-2'>
                    <div className='border rounded-full border-slate-600 h-fit px-3 py-1 mr-4 mt-2 font-semibold'>Edit Profile</div>
                </div>
                
                <div className='pl-4 pb-4 border-b border-slate-600'>
                    <div className='text-xl font-bold pt-2 '>
                        Aniket Lakade
                    </div>
                    <div className='text-slate-600 font-sans h-fit'>
                        @AniketLakde
                    </div>
                    <div className='font-sans mt-2'>
                        Curious/Learner/Traveller
                    </div>
                    <div className='flex gap-2 mt-1 text-slate-600 font-sans h-fit'>
                        <div>

                            Wardha, India
                        </div>
                        <div>
                            Born January 10, 2000
                        </div>
                        <div>
                            joined March 2015
                        </div>
                    </div>
                    <div className='flex gap-2 mt-2 font-sans text-sm h-fit'>
                        <div className='flex gap-1'>
                            <div>90</div><div className='text-slate-600'>Following</div>
                        </div>
                        <div className='flex gap-1'>
                            <div>2</div><div className='text-slate-600'>followers</div>
                        </div>
                    </div>
                </div>

                <div>
                    {user?.tweets?.map(tweet => <Feedcard key={tweet?.id} data={tweet as Tweet}/>)}
                </div>
                

            </div>
        </TwitterLayout>
    </div>
}

export default UserProfilePage