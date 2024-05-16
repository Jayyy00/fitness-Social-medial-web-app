import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, } from '@mui/material';

const Profile = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
  
    return (
        <div>
            <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack}/>
                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Jenifer</h1>
            </section>

            <section>
                <img className='w-[100%] h-[15rem] object-cover' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-gym-cover-design-template-43cd23790c989c1f882fb75e7a35823d_screen.jpg?ts=1626933203" alt=""/>
            </section>

            <section>
                <div className='flex justify-between items-start mt-5 h-[5rem] '>
                    <Avatar
                    className='transform -translate-y-20' 
                    alt='Jenifer' 
                    src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w300/2023/10/free-images.jpg'
                    sx={{width:"10rem",height:"10rem",border:"4px solid white"}}
                    />

                </div>
            </section>
        </div>
    )
}

export default Profile
