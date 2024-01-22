import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { blue } from '@mui/material/colors';

export default function CPWregister() {
    return(
        <div>
            <div className="formContainer">
                <div className="formWrapper">
                    <span class="logo" >CPW SCHOOL ALL CONTACT</span>
                    <span class="title" align = "center">Register</span>

                    <form>
                        <input type="text" placeholder="display name"/>
                        <input type="email" placeholder="email"/>
                        <input type="password" placeholder="password"/>
                        <input  type="file"/> 
                        <label htmlFor="file">
                        <AddAPhotoIcon sx={{ color: blue[200] }} />
                            <span>Add an Avatar</span>
                        </label>
                        <button>Sign up</button>
                    </form>
                    <p>You do have an account? Login</p>
                </div>
                 </div>
        </div>
    )
};

