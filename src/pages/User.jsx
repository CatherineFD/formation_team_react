import React from 'react';
import Loader from "../components/UI/Loader/Loader";
import {useNavigate} from "react-router-dom";
import ButtonSetting from "../components/UI/ButtonSetting/ButtonSetting";
import "../style/User.scss";

const User = () => {
    const [isLoading, setLoading] = React.useState(false);
    const [user, setUser] = React.useState({firstName: 'Екатерина', lastName: 'Фирсова', email: '1111@yandex.ru'});

    const router = useNavigate();

    return (
        <div>
            {
                (isLoading)
                ?
                    <Loader/>
                :
                    <div id="user" className="container">
                        <div className="user__title">
                            <div className="mr-3 user__img">
                                <img alt="user" src="../assets/user/user.png"/>
                            </div>

                            <div className="user__name d-flex  flex-row">
                                <div className="d-flex flex-column justify-content-center">
                                    <h3>{ user.firstName } { user.lastName }</h3>
                                    <h4 className="text-uppercase"> { user.email }</h4>
                                </div>

                                {/*v-if="!$route.params.id"*/}
                                <ButtonSetting onClick={() => router('/users/setting')}/>
                            </div>

                        </div>


                    </div>
            }
            
        </div>
    );
};

export default User;